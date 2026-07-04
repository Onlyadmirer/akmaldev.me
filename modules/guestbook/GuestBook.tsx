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
import { LogOut, Send } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { toast } from "sonner";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { Spinner } from "@/common/components/ui/spinner";
import SkeletonChat from "./components/SkeletonChat";
import useComments, { CommentType } from "./swr";

function GuestBook() {
  const { data: session, status } = useSession();
  const { comments, isError, isLoading, mutate } = useComments();

  const [comment, setComment] = useState("");

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

  if (status === "loading" || isLoading) {
    return <SkeletonChat />;
  }

  return (
    <div>
      <HeaderSection
        title='Guestbook'
        description='We’d love to hear your thoughts, suggestions, or questions.'
      />

      {isError ? (
        <p>Gagal memuat komentar.</p>
      ) : (
        <div className='flex h-116 overflow-y-scroll max-w-4xl px-4 mb-4 flex-col mx-auto gap-6 py-12 border-b border-neutral-500 border-dashed'>
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
                  <MessageContent>
                    <div className='flex flex-row gap-2 items-center'>
                      <p className='text-neutral-900 dark:text-neutral-300'>
                        {c.user.name}
                      </p>
                      <small className='text-neutral-700 dark:text-neutral-400'>
                        {new Date(c.createdAt).toLocaleDateString()}
                      </small>
                    </div>
                    <Bubble variant='tinted'>
                      <BubbleContent>{c.text}</BubbleContent>
                    </Bubble>
                  </MessageContent>
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
    </div>
  );
}

export default GuestBook;
