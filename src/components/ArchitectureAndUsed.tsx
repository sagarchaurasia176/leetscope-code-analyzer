import { motion } from "framer-motion";

const ArchitectureAndUsed = () => {
  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold mb-6">
          Architecture
      </h2>
      <img
          src="https://res.cloudinary.com/djfixzkqe/image/upload/v1769080824/Screenshot_2026-01-22_165015_kridzk.png"
          alt="System Architecture Diagram"
        className="w-full h-auto rounded-lg"
        />
    </div>
  );
};

export default ArchitectureAndUsed;
