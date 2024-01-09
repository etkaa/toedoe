import React from "react";
import { ThreeDotIcon } from "../../UI/Icons";

interface TaskProps {
  id: number;
  name: string;
  dueDate: string;
  details: string;
}

const Task: React.FC<TaskProps> = ({ id, name, dueDate, details }) => {
  return (
    <div
      id="an-example-task"
      className="flex w-full items-start justify-between rounded-xl bg-gray-950 px-2 py-3 text-lg text-slate-300"
    >
      <span className="my-auto flex w-[5%] items-center justify-center mr-2">
        <div
          className="h-5 w-5 cursor-pointer rounded-full border-[1px] border-slate-100 hover:bg-slate-100"
          onClick={() => {
            console.log("Complete task with id: ", id);
          }}
        />
      </span>
      <span className="line-clamp-1 w-[25%] max-lg:w-[40%]">{name}</span>
      <span className="mx-4 h-full border-[1px] border-slate-700" />
      <span className="line-clamp-1 w-[20%] text-center max-lg:w-[30%]">
        {dueDate}
      </span>
      <span className="mx-4 h-full border-[1px] border-slate-700" />
      <div className="relative flex w-[35%] max-md:hidden">
        <p className="line-clamp-1 text-right">{details}</p>
        <div className="z-5 absolute right-0 h-full w-[50%] bg-gradient-to-l from-gray-950 from-30% to-transparent" />
      </div>
      <span
        className="my-auto flex w-[5%] items-center justify-center"
        onClick={() => {
          console.log("Open edit task modal");
        }}
      >
        <span className="flex cursor-pointer items-center justify-center rounded-full bg-slate-800 hover:bg-black">
          <ThreeDotIcon />
        </span>
      </span>
    </div>
  );
};

export default Task;
