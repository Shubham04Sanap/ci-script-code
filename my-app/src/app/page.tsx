"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function BirthdayWish() {
  const [showWish, setShowWish] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 to-yellow-500 text-white text-center p-5">
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        🎉 Happy Birthday! 🎂
      </motion.h1>
      <motion.p
        className="text-lg mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Wishing you a day filled with love, joy, and lots of cake! 🎈🎁
      </motion.p>
      <button
        className="px-4 py-2 bg-white text-pink-500 font-semibold rounded-lg shadow-lg hover:bg-pink-200 transition"
        onClick={() => setShowWish(true)}
      >
        Click for a Surprise 🎊
      </button>
      {showWish && (
        <motion.div
          className="mt-6 text-xl font-semibold"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          🎶 May your year be filled with happiness and success! 🎶
        </motion.div>
      )}
    </div>
  );
}
