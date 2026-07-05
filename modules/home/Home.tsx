"use client";

import ChatShortcut from "../guestbook/components/ChatShortcut";
import Featured from "./components/Featured";
import Header from "./components/Header";
import Skils from "./components/Skils";
import { motion } from "motion/react";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <Header />
      <Skils />
      <Featured />
      <ChatShortcut />
    </motion.div>
  );
}

export default Home;
