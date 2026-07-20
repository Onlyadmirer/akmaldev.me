"use client";

import Header from "./Header";
import Footer from "./Footer";

function Layouts({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen bg-background'>
      <Header />
      <main className='pt-14'>{children}</main>
      <Footer />
    </div>
  );
}

export default Layouts;
