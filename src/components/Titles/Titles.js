import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import titleStyles from "./titles.module.scss";
const titles = [
  { title: "husband" },
  { title: "father" },
  { title: "web developer" },
  { title: "singer" },
  { title: "songwriter" },
  { title: "producer" },
];
function Titles(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let timesRun = 0;
    const interval = setInterval(() => {
      timesRun += 1;
      setCount((count) => count + 1);
      if (timesRun === 6) {
        setCount((count) => count - 6);
        timesRun = 0;
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const mappedTitles = titles.map((title) => {
    return (
      <motion.h1
        className={titleStyles.title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {title.title}
      </motion.h1>
    );
  });
  return <>{mappedTitles[count]}</>;
}

export default Titles;
