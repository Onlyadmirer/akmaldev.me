"use client";

import Header from "./Header";

function Layouts({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen bg-background'>
      <Header />
      <main className='pt-24'>{children}</main>
    </div>
  );
}

export default Layouts;
