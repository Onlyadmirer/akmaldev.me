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
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { FcGoogle } from "react-icons/fc";

interface CommentType {
  id: string;
  text: string;
  createdAt: string;
  user: {
    name: string;
    image: string;
  };
}

function GuestBook() {
  const { data: session, status } = useSession();
  const [comment, setComment] = useState("");
  const [getComment, setGetComment] = useState<CommentType[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch("/api/guestbook");
        const data = await response.json();
        setGetComment(data);
      } catch (error) {
        console.error(error);
        toast.error("failed to load comment");
      }
    };

    fetchComments();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: comment }),
      });

      toast.success("Comment sent!");

      setComment("");

      if (!response.ok) throw new Error("failed to send message");
    } catch (error) {
      console.log(error);
      toast.error("failed to sent message");
    }
  };

  return (
    <div>
      <HeaderSection
        title='Guestbook'
        description='We’d love to hear your thoughts, suggestions, or questions.'
      />

      <div className='flex w-full max-w-4xl px-4 mb-4 flex-col mx-auto gap-6 py-12 border-b border-neutral-500 border-dashed'>
        {getComment.length > 0 ? (
          getComment.map((c) => (
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
                <small className='text-neutral-400'>
                  {new Date(c.createdAt).toLocaleDateString()}
                </small>
                <Bubble variant='muted'>
                  <BubbleContent>{c.text}</BubbleContent>
                </Bubble>
              </MessageContent>
            </Message>
          ))
        ) : (
          <p className='text-neutral-400'>No comments yet. Be the first!</p>
        )}
        {/* <Message align='end'>
          <MessageAvatar>
            <Avatar>
              <AvatarImage src='/avatars/10.png' alt='@avatar' />
              <AvatarFallback>R</AvatarFallback>
            </Avatar>
          </MessageAvatar>
          <MessageContent>
            <Bubble>
              <BubbleContent>Can you share the exact error?</BubbleContent>
            </Bubble>
          </MessageContent>
        </Message> */}
      </div>
      <div>
        {session?.user ? (
          <div className='flex flex-col gap-4'>
            <form onSubmit={handleSubmit} className='flex flex-row gap-2'>
              <Input
                placeholder='Type your message'
                value={comment}
                onChange={(e) =>
                  setComment((e.target as HTMLInputElement).value)
                }
              />
              <Button
                type='submit'
                className='flex items-center text-neutral-800 justify-center'
              >
                <Send size={20} />
              </Button>
            </form>
            <div className='flex flex-row justify-between gap-2'>
              <span className='text-neutral-400'>
                Signed in as @{session?.user?.name}
              </span>
              <Button
                onClick={() => signOut()}
                className='bg-red-600 hover:bg-red-800 text-neutral-300'
              >
                <LogOut size={20} />
                Sign out
              </Button>
            </div>
          </div>
        ) : (
          <div className='flex flex-col items-center gap-4 justify-center'>
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
