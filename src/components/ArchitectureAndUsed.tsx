import { motion } from "framer-motion";

const ArchitectureAndUsed = () => {
  return (
    <div>
      <motion.div 
        className="flex flex-col items-center justify-center p-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="text-4xl font-extrabold text-black underline-dooted mb-6 tracking-wide border-b-4 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 pb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-500 after:via-purple-500 after:to-pink-500 after:rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Architecture
        </motion.h2>
        <motion.img
          src="https://res.cloudinary.com/djfixzkqe/image/upload/v1769080824/Screenshot_2026-01-22_165015_kridzk.png"
          alt="System Architecture Diagram"
          className="w-full h-auto rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
        />
      </motion.div>
    </div>
  );
};

export default ArchitectureAndUsed;
