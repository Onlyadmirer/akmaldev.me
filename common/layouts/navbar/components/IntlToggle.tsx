import { usePathname, useRouter } from "@/i18n/navigation";
import { motion } from "motion/react";
import { useLocale } from "next-intl";

function IntlToggle() {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathName = usePathname();

  const locales = [
    {
      value: "en",
    },
    {
      value: "id",
    },
  ];

  const currentIndex = locales.findIndex(
    (locale) => locale.value === currentLocale,
  );

  const handleLocalChange = (nextLocale: string) => {
    if (nextLocale === currentLocale) return;

    router.replace(pathName, { locale: nextLocale });
  };

  return (
    <div className={`flex items-center justify-center `}>
      {/* Desktop */}
      <div className='relative hidden items-center rounded-full border-[1.5px] border-neutral-300 bg-neutral-100 p-1 dark:border-neutral-700 dark:bg-neutral-800 md:flex'>
        {/* Sliding Background */}
        <motion.div
          className='absolute bottom-1 top-1 w-10 rounded-full bg-neutral-300 dark:bg-neutral-700'
          animate={{
            x: currentIndex ? 0 : 40,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        />

        {/* Light Mode Button */}
        <motion.button
          className='relative z-10 flex h-8 w-10 cursor-pointer items-center justify-center transition duration-200'
          onClick={() => handleLocalChange("id")}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          aria-label='id mode button'
        >
          <motion.div transition={{ duration: 0.3, ease: "easeInOut" }}>
            <span className='text-xs font-mono'>ID</span>
          </motion.div>
        </motion.button>

        {/* Dark Mode Button */}
        <motion.button
          className='relative z-10 flex h-8 w-10 cursor-pointer items-center justify-center transition duration-200'
          onClick={() => handleLocalChange("en")}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          aria-label='en mode button'
        >
          <motion.div transition={{ duration: 0.3, ease: "easeInOut" }}>
            <span className='text-xs font-mono'>EN</span>
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile */}
      <button
        className='flex items-center gap-2 rounded-full border-[1.5px] border-neutral-300 bg-neutral-100 p-1 transition duration-200 hover:scale-110 dark:border-neutral-700 dark:bg-neutral-800 md:hidden'
        onClick={() => handleLocalChange(currentIndex ? "en" : "id")}
        aria-label='i18n toggle button'
      >
        <motion.div
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className='flex h-8 w-8 items-center justify-center rounded-full bg-neutral-300 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-50'
        >
          {currentIndex ? (
            <span className='text-xs font-mono'>ID</span>
          ) : (
            <span className='text-xs font-mono'>EN</span>
          )}
        </motion.div>
      </button>
    </div>
  );
}

export default IntlToggle;
