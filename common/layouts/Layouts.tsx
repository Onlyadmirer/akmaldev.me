import Navbar from "./navbar/Navbar";

function Layouts({ children }: { children: React.ReactNode }) {
  return (
    <div className='max-w-7xl mx-auto lg:px-4'>
      <div className='lg:grid min-h-screen lg:gap-2 lg:grid-cols-[240px_1fr] lg:py-12'>
        <Navbar />
        <main className='pt-24 lg:pt-0 px-6 lg:px-8'>{children}</main>
      </div>
    </div>
  );
}

export default Layouts;
