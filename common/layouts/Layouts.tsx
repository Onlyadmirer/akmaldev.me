"use client";

import Header from "./Header";
import Footer from "./Footer";
import ChatShortcut from "@/modules/guestbook/components/ChatShortcut";

function Layouts({ children }: { children: React.ReactNode }) {
  return (
    <main className='min-h-screen bg-background'>
      <Header />
      <div className='pt-14'>{children}</div>
      <Footer />
      <ChatShortcut />
    </main>
  );
}

export default Layouts;
