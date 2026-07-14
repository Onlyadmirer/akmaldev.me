"use client";

import { useTheme } from "@teispace/next-themes";
import { motion } from "framer-motion";
import { LuMoonStar, LuSun } from "react-icons/lu";

interface props {
  className?: string;
}

const ThemeToggle = ({ className }: props) => {
  const { theme, setTheme } = useTheme();

  const isLightMode = theme === "light";

  return (
    <div className={`flex items-center justify-center ${className}`}>
      {/* Desktop */}
      <div className='relative hidden items-center gap-2 rounded-full border-[1.5px] border-neutral-300 bg-neutral-100 p-1 dark:border-neutral-700 dark:bg-neutral-800 md:flex'>
        {/* Sliding Background */}
        <motion.div
          className='absolute bottom-1 top-1 w-8 rounded-full bg-neutral-300 dark:bg-neutral-700'
          animate={{
            x: isLightMode ? 0 : 40,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        />

        {/* Light Mode Button */}
        <motion.button
          className='relative z-10 flex h-8 w-8 cursor-pointer items-center justify-center transition duration-200'
          onClick={() => setTheme("light")}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          aria-label='Light mode button'
        >
          <motion.div
            animate={{
              color: isLightMode ? "#171717" : "#FFFFFF",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <LuSun size={17} />
          </motion.div>
        </motion.button>

        {/* Dark Mode Button */}
        <motion.button
          className='relative z-10 flex h-8 w-8 cursor-pointer items-center justify-center transition duration-200'
          onClick={() => setTheme("dark")}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          aria-label='dark mode button'
        >
          <motion.div
            animate={{
              color: !isLightMode ? "#FFFFFF" : "#737373",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <LuMoonStar size={17} />
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile */}
      <button
        className='flex items-center gap-2 rounded-full border-[1.5px] border-neutral-300 bg-neutral-100 p-1 transition duration-200 hover:scale-110 dark:border-neutral-700 dark:bg-neutral-800 md:hidden'
        onClick={() => setTheme(isLightMode ? "dark" : "light")}
        aria-label='thme toggle button'
      >
        <motion.div
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className='flex h-8 w-8 items-center justify-center rounded-full bg-neutral-300 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-50'
        >
          {isLightMode ? <LuSun size={17} /> : <LuMoonStar size={17} />}
        </motion.div>
      </button>
    </div>
  );
};

export default ThemeToggle;
