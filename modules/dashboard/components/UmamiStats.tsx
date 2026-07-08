import SubHeaderSection from "@/common/components/elements/SubHeaderSection";
import { SiUmami } from "react-icons/si";

function UmamiStats() {
  return (
    <div className='py-6 flex flex-col gap-4 border-b border-neutral-600'>
      <SubHeaderSection
        icon={<SiUmami height='2em' />}
        title='Umami'
        description='Track real-time visitor metrics and user engagement'
      />
      <div>
        <iframe
          src='https://cloud.umami.is/share/kQqVwGiVToTkkgX0/akmaldev.me'
          className='w-full h-[600px] border-0'
          referrerPolicy='origin'
          loading='lazy'
        />
      </div>
    </div>
  );
}

export default UmamiStats;
