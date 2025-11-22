"use client";

import DekstopNav from "./dekstop/DekstopNav";
import MobileNav from "./mobile/MobileNav";
import { AnimatePresence, motion } from "motion/react";

function Navbar() {
  return (
    <AnimatePresence>
      <motion.div
        key='mobile'
        initial={{ opacity: 0, y: -10 }} // Mulai dari atas, transparan
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }} // Keluar ke bawah
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className='lg:hidden'
      >
        <MobileNav />
      </motion.div>
      <motion.div
        key='desktop'
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className='hidden lg:block sticky top-10 h-170'
      >
        <DekstopNav />
      </motion.div>
    </AnimatePresence>
  );
}

export default Navbar;
