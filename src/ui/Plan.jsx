/* eslint-disable react/prop-types */
import { IoFitness } from "react-icons/io5";

function Plan({ index, plans, children }) {
  return (
    <p
      className={`text-start leading-10 flex items-center gap-2 ${
        index === 0 ? "mt-16" : ""
      } ${index === plans?.length - 1 ? "mb-12" : ""}`}
      key={index}
    >
      <IoFitness color="#EA499D" />
      {children}
    </p>
  );
}

export default Plan;
