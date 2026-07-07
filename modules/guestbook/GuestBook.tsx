"use client";

import HeaderSection from "@/common/components/elements/HeaderSection";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/common/components/ui/avatar";
import { Bubble, BubbleContent } from "@/common/components/ui/bubble";
import Button from "@/common/components/ui/Button";
import { Input } from "@/common/components/ui/input";
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

function GuestBook() {
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
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async () => {
    try {
      const response = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: comment }),
      });

      const newComment = await response.json();

      toast.success("Comment sent!");

      setComment("");

      await mutate(
        (current: CommentType[] | undefined) =>
          current ? [...current, newComment] : [newComment],
        false,
      );

      await mutate();
    } catch (error) {
      console.log(error);
      toast.error("failed to sent message");
    }
  };

  const onDelete = async (id: string) => {
    try {
      await fetch(`/api/guestbook?id=${id}`, {
        method: "DELETE",
      });
      toast.success("Deleted");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
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
      <HeaderSection
        title='Guestbook'
        description='We’d love to hear your thoughts, suggestions, or questions.'
      />

      {isError ? (
        <p>Gagal memuat komentar.</p>
      ) : (
        <div className='flex h-116 overflow-y-scroll max-w-4xl sm:px-4 mb-4 flex-col mx-auto gap-6 py-12 border-b border-neutral-500 border-dashed'>
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
                    <div className='flex flex-row justify-end gap-2 items-center'>
                      <small className='text-neutral-700 dark:text-neutral-400'>
                        {new Date(c.createdAt).toLocaleDateString()}
                      </small>
                      <p className='text-neutral-900 dark:text-neutral-300'>
                        {c.user.name}
                      </p>
                    </div>
                    <Bubble>
                      <BubbleContent>{c.text}</BubbleContent>
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
                    <div className='flex flex-row gap-2 items-center'>
                      <p className='text-neutral-900 dark:text-neutral-300'>
                        {c.user.name}
                      </p>
                      <small className='text-neutral-700 dark:text-neutral-400'>
                        {new Date(c.createdAt).toLocaleDateString()}
                      </small>
                    </div>
                    <Bubble variant='tinted' className='select-none'>
                      <BubbleContent>{c.text}</BubbleContent>
                    </Bubble>
                  </MessageContent>
                  {contextMenu.visible &&
                    session?.user.role === "Admin" &&
                    contextMenu.commentId === c.id && (
                      <button
                        onClick={() => onDelete(c.id)}
                        style={{ top: contextMenu.y, left: contextMenu.x }}
                        className='fixed z-99 hover:cursor-pointer hover:bg-neutral-500 text-neutral-700 dark:text-neutral-200 bg-neutral-300 dark:bg-neutral-600 p-2 rounded-lg flex flex-row gap-1 justify-center items-center'
                      >
                        <Trash className='text-red-600' size={16} />
                        Delete
                      </button>
                    )}
                </Message>
              ),
            )
          ) : (
            <p className='text-neutral-900 dark:text-neutral-400'>
              No comments yet. Be the first!
            </p>
          )}
        </div>
      )}
      <div>
        {session?.user ? (
          <div className='flex flex-col mb-6 gap-6'>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='flex flex-row gap-2'
            >
              <Input
                placeholder='Type your message'
                value={comment}
                disabled={isSubmitting}
                onChange={(e) =>
                  setComment((e.target as HTMLInputElement).value)
                }
              />
              {isSubmitting ? (
                <Button
                  type='submit'
                  className='flex items-center dark:bg-neutral-300 bg-neutral-900 text-neutral-300 dark:text-neutral-800 justify-center'
                >
                  <Spinner />
                </Button>
              ) : (
                <Button
                  type='submit'
                  className='flex items-center dark:bg-neutral-300 bg-neutral-900 text-neutral-300 dark:text-neutral-800 justify-center'
                >
                  <Send size={20} />
                </Button>
              )}
            </form>
            <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
              <span className='text-neutral-400'>
                Signed in as @{session?.user?.name}
              </span>
              <Button
                onClick={() => signOut()}
                className='bg-red-600 px-2 hover:bg-red-800 text-neutral-300'
              >
                <LogOut size={20} />
                Sign out
              </Button>
            </div>
          </div>
        ) : (
          <div className='flex flex-col items-center mb-6 gap-4 justify-center'>
            <h2>Sign in to join the conversation. Your data is secure.</h2>
            <Button
              onClick={() => signIn("google")}
              className='bg-neutral-200 max-w-sm text-neutral-900'
            >
              <FcGoogle size={22} />
              Sign in with Google
            </Button>
          </div>
        )}
      </div>
    </PageAnimateWrapper>
  );
}

export default GuestBook;
