import { motion } from "framer-motion";
const Leaderboard = () => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -50 }}
      className="lg:ml-[300px] mt-36 md:mt-16 p-8 lg:p-12 border-2 border-indigo-500 mx-4 rounded-xl"
    >
      <h2 className="text-gray-300 text-3xl"> Leaderboard </h2>{" "}
    </motion.div>
  );
};

export default Leaderboard;
