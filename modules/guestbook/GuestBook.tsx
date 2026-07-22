"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/common/components/ui/avatar";
import { Bubble, BubbleContent } from "@/common/components/ui/bubble";
import Button from "@/common/components/ui/Button";
import {
  Message,
  MessageAvatar,
  MessageContent,
} from "@/common/components/ui/message";
import { LogOut, Send, Trash } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { Spinner } from "@/common/components/ui/spinner";
import SkeletonChat from "./components/SkeletonChat";
import useComments, { CommentType } from "./swr";
import PageAnimateWrapper from "@/common/components/elements/PageAnimateWrapper";
import { InputCommentType } from "@/types/userTypes";
import { useTranslations } from "next-intl";

function GuestBook() {
  const t = useTranslations("GuestbookPage");
  const { data: session, status } = useSession();
  const { comments, isError, isLoading, mutate } = useComments();

  const [comment, setComment] = useState("");

  const [contextMenu, setContextMenu] = useState({
    visible: false,
    commentId: "",
    x: 0,
    y: 0,
  });

  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<InputCommentType>();

  const onSubmit = async () => {
    if (comment === "") {
      toast.error(t("toast.invalidInput"));
      return;
    }
    try {
      const response = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: comment }),
      });

      const newComment = await response.json();

      toast.success(t("toast.commentSent"));

      setComment("");

      await mutate(
        (current: CommentType[] | undefined) =>
          current ? [...current, newComment] : [newComment],
        false,
      );

      await mutate();
    } catch {
      toast.error(t("toast.sendFailed"));
    }
  };

  const onDelete = async (id: string) => {
    try {
      await fetch(`/api/guestbook?id=${id}`, {
        method: "DELETE",
      });
      toast.success(t("toast.deleted"));
    } catch {
      toast.error(t("toast.error"));
    }
  };

  const handleContextMenu = (
    e: React.MouseEvent<HTMLElement>,
    commentId: string,
  ) => {
    e.preventDefault();
    setContextMenu({
      visible: true,
      commentId,
      x: e.pageX,
      y: e.pageY,
    });
  };

  useEffect(() => {
    const closeMenu = () =>
      setContextMenu((prev) => ({ ...prev, visible: false }));
    window.addEventListener("click", closeMenu);
    return () => {
      window.removeEventListener("click", closeMenu);
    };
  }, []);

  if (status === "loading" || isLoading) {
    return <SkeletonChat />;
  }

  return (
    <PageAnimateWrapper>
      <div className='mx-auto max-w-3xl px-6 pt-8 pb-24'>
        <div className='mb-12'>
          <h1 className='font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl'>
            {t("title")}
          </h1>
          <p className='mt-3 text-base text-foreground-secondary'>
            {t("description")}
          </p>
        </div>

        {isError ? (
          <p className='text-sm text-foreground-secondary'>{t("loadError")}</p>
        ) : (
          <div className='mb-8 max-h-96 overflow-y-auto space-y-6'>
            {comments.length > 0 ? (
              comments.map((c) =>
                c.user.role === "Admin" ? (
                  <Message key={c.id} align='end'>
                    <MessageAvatar>
                      <Avatar>
                        <AvatarImage src={c.user.image} alt='@avatar' />
                        <AvatarFallback>
                          {c.user.name?.charAt(0) || "A"}
                        </AvatarFallback>
                      </Avatar>
                    </MessageAvatar>
                    <MessageContent>
                      <div className='flex flex-row-reverse items-center gap-2'>
                        <span className='text-xs text-foreground-secondary'>
                          {new Date(c.createdAt).toLocaleDateString()}
                        </span>
                        <span className='text-sm font-medium text-foreground'>
                          {c.user.name}
                        </span>
                      </div>
                      <Bubble>
                        <BubbleContent className='bg-foreground/90 text-neutral-300 dark:text-neutral-900'>
                          {c.text}
                        </BubbleContent>
                      </Bubble>
                    </MessageContent>
                  </Message>
                ) : (
                  <Message key={c.id}>
                    <MessageAvatar>
                      <Avatar>
                        <AvatarImage src={c.user.image} alt='@avatar' />
                        <AvatarFallback>
                          {c.user.name?.charAt(0) || "U"}
                        </AvatarFallback>
                      </Avatar>
                    </MessageAvatar>
                    <MessageContent
                      onContextMenu={(e) => handleContextMenu(e, c.id)}
                    >
                      <div className='flex items-center gap-2'>
                        <span className='text-sm font-medium text-foreground'>
                          {c.user.name}
                        </span>
                        <span className='text-xs text-foreground-secondary'>
                          {new Date(c.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <Bubble>
                        <BubbleContent className='bg-foreground-secondary/30'>
                          {c.text}
                        </BubbleContent>
                      </Bubble>
                    </MessageContent>
                    {contextMenu.visible &&
                      session?.user.role === "Admin" &&
                      contextMenu.commentId === c.id && (
                        <button
                          type='button'
                          onClick={() => onDelete(c.id)}
                          style={{ top: contextMenu.y, left: contextMenu.x }}
                          className='fixed z-50 flex cursor-pointer items-center gap-1 rounded border border-border bg-surface px-3 py-2 text-xs text-foreground-secondary shadow-sm transition-colors hover:text-red-500'
                        >
                          <Trash size={14} />
                          {t("delete")}
                        </button>
                      )}
                  </Message>
                ),
              )
            ) : (
              <p className='text-sm text-foreground-secondary'>
                {t("noComments")}
              </p>
            )}
          </div>
        )}

        <div>
          {session?.user ? (
            <div className='space-y-4'>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex items-end gap-3'
              >
                <div className='flex-1'>
                  <input
                    placeholder={t("inputPlaceholder")}
                    value={comment}
                    disabled={isSubmitting}
                    {...register("comments", {
                      required: "Input cannot be empty",
                      validate: (value) => {
                        if (value.trim() === "") {
                          return "Input cannot be empty";
                        }
                        return true;
                      },
                    })}
                    onChange={(e) =>
                      setComment((e.target as HTMLInputElement).value)
                    }
                    className='w-full border-b border-border bg-transparent pb-2 text-sm text-foreground placeholder-foreground-secondary/70 outline-none transition-colors duration-200 focus:border-foreground'
                  />
                  {errors.comments && (
                    <p className='mt-1 text-xs text-red-500'>
                      {errors.comments.message}
                    </p>
                  )}
                </div>
                {isSubmitting ? (
                  <Button
                    type='submit'
                    className='flex items-center justify-center border border-border px-4 py-2'
                  >
                    <Spinner />
                  </Button>
                ) : (
                  <Button
                    type='submit'
                    className='flex items-center rounded-md justify-center border border-border px-4 py-2'
                  >
                    <Send size={16} />
                  </Button>
                )}
              </form>
              <div className='flex items-center justify-between border-t border-border pt-4'>
                <span className='text-xs text-foreground-secondary/90'>
                  {t("signedInAs", { name: session?.user?.name ?? "" })}
                </span>
                <button
                  type='button'
                  onClick={() => signOut()}
                  className='flex cursor-pointer items-center gap-1 text-xs text-foreground-secondary transition-colors duration-200 hover:text-red-500'
                >
                  <LogOut size={14} />
                  {t("signOut")}
                </button>
              </div>
            </div>
          ) : (
            <div className='flex flex-col items-center gap-4 border-t border-border pt-8'>
              <p className='text-sm text-foreground-secondary'>
                {t("signInPrompt")}
              </p>
              <button
                type='button'
                onClick={() => signIn("google")}
                className='flex cursor-pointer items-center gap-2 border border-border px-4 py-2 text-sm text-foreground transition-colors duration-200 hover:bg-surface'
              >
                <FcGoogle size={18} />
                {t("signInGoogle")}
              </button>
            </div>
          )}
        </div>
      </div>
    </PageAnimateWrapper>
  );
}

export default GuestBook;
