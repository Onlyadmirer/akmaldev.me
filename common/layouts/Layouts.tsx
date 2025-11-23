import Navbar from "./navbar/Navbar";

function Layouts({ children }: { children: React.ReactNode }) {
  return (
    <div className='max-w-7xl mx-auto lg:px-4'>
      <div className='lg:grid min-h-screen lg:gap-2 lg:grid-cols-[240px_1fr] '>
        <Navbar />
        <main className='pt-24 lg:py-12 px-6 lg:pl-8 lg:pr-12'>{children}</main>
      </div>
    </div>
  );
}

export default Layouts;
