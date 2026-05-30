"use client";

import SubHeaderSection from "@/common/components/elements/SubHeaderSection";
import { MdBackupTable } from "react-icons/md";
import CardAchiev from "./featured-components/CardAchiev";
import CardProject from "./featured-components/CardProject";
import CardAbout from "./featured-components/CardAbout";
import CardSkills from "./featured-components/CardSkills";
import CardContact from "./featured-components/CardContact";
import CardDashboard from "./featured-components/CardDashboard";

function Featured() {
  return (
    <div className='py-6 '>
      <SubHeaderSection
        icon={<MdBackupTable size={24} />}
        title='Featured Section'
        description='Explore everything I’ve crafted, contributed, and accomplished.'
      />
      <div className='grid grid-cols-1 pt-6 gap-2 md:grid-cols-4 md:grid-rows-2 '>
        {/* Card Projects */}
        <CardProject />
        {/* Card About */}
        <CardAbout />
        {/* Card Skills */}
        <CardSkills />
        {/* Card Achievements */}
        <CardAchiev />
        {/* Card Contact */}
        <CardContact />
        {/* Card Dashboard */}
        <CardDashboard />
      </div>
    </div>
  );
}

export default Featured;
