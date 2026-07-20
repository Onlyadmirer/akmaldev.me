import { Skeleton } from "@/common/components/ui/skeleton";

function SkeletonChat() {
  return (
    <div className='flex flex-col h-screen max-w-3xl px-6 mt-10 mx-auto gap-12'>
      <div className='flex w-full max-w-2xl flex-col gap-4'>
        <Skeleton className='h-6 w-1/2' />
        <Skeleton className='h-4 w-full' />
      </div>
      <div className='w-full max-w-7xl flex gap-8 mt-12 flex-col'>
        <div className='flex self-end gap-4'>
          <div className='space-y-2 flex flex-col items-end'>
            <Skeleton className='h-4 w-[250px]' />
            <Skeleton className='h-4 w-[200px]' />
          </div>
          <Skeleton className='h-12 w-12 rounded-full' />
        </div>
        <div className='flex items-center gap-4'>
          <Skeleton className='h-12 w-12 rounded-full' />
          <div className='space-y-2'>
            <Skeleton className='h-4 w-[250px]' />
            <Skeleton className='h-4 w-[200px]' />
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Skeleton className='h-12 w-12 rounded-full' />
          <div className='space-y-2'>
            <Skeleton className='h-4 w-[250px]' />
            <Skeleton className='h-4 w-[200px]' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonChat;
