import React, { useEffect, useState } from "react";
import faq from "../API/faq.json";
import FAQ from "./UI/FAQ";

const Accordion = () => {
  const [data, setData] = useState([]);
  const [isClose, setIsClose] = useState(true);

  useEffect(() => {
    setData(faq);
  }, []);

  const handleToggle = (id) => {
    setIsClose((prevId => (prevId === id ? true : id )));
  };

  return (
    <section className="text-white">
      <div className="flex justify-center font-bold text-3xl underline underline-offset-4">
        <h1>The Accordion</h1>
      </div>
      <div className="mt-14 flex flex-col flex-1 gap-4 ">
        {data.map((curEle) => {
          return (
            <FAQ 
              key={curEle.id} 
              curData={curEle}
              isActive = {isClose === curEle.id}
              onToggle={() => handleToggle(curEle.id)} 
            />
          ) 
        })}
      </div>
    </section>
  );
};

export default Accordion;
