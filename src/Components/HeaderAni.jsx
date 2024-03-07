import React from "react";
import { motion } from "framer-motion";

const HeaderAni = () => {
  const text = "Real Peaple! Reacl ".split(" ");
  return (
    <div>
      <div className="App">
        {text.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 2.25,
              delay: i / 10,
            }}
            style={{ fontSize: "50px" }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default HeaderAni;
