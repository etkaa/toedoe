import { EditIcon, PlusIcon } from "../../UI/Icons";
import Task from "./Task";

const tasks = [
  {
    id: 1,
    name: "Clean bedroom",
    dueDate: "Today",
    details: "Task details goes here and you can also say whatever",
    isCompleted: false,
  },
  {
    id: 2,
    name: "Wash dishes",
    dueDate: "Tomorrow",
    details: "Task details goes here and you can also say whatever",
    isCompleted: false,
  },
  {
    id: 3,
    name: "Do laundry",
    dueDate: "Next Week",
    details: "Task details goes here and you can also say whatever",
    isCompleted: false,
  },
  {
    id: 4,
    name: "Take out trash",
    dueDate: "January 24",
    details: "Task details goes here and you can also say whatever",
    isCompleted: false,
  },
  {
    id: 1,
    name: "Clean bedroom",
    dueDate: "Today",
    details: "Task details goes here and you can also say whatever",
    isCompleted: false,
  },
  {
    id: 2,
    name: "Wash dishes",
    dueDate: "Tomorrow",
    details: "Task details goes here and you can also say whatever",
    isCompleted: false,
  },
  {
    id: 3,
    name: "Do laundry",
    dueDate: "Next Week",
    details: "Task details goes here and you can also say whatever",
    isCompleted: false,
  },
  {
    id: 4,
    name: "Take out trash",
    dueDate: "January 24",
    details: "Task details goes here and you can also say whatever",
    isCompleted: false,
  },
];

const List = () => {
  return (
    <div
      id="list-section"
      className="relative my-4 flex w-full max-w-[55rem] flex-col gap-y-3"
    >
      <div
        id="list-cover-image"
        className="group relative flex h-[15rem] w-full rounded-xl bg-gradient-to-r from-gray-900 to-gray-950"
      >
        <img
          src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=4896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="list-cover-image"
          className="h-[15rem] w-full rounded-xl object-cover"
        />
        <div className=" absolute bottom-2 left-4 rounded-xl bg-black/30 px-3 py-1">
          <h1 className="text-xl font-semibold text-white">Home</h1>
        </div>
        <span
          className="absolute right-4 top-2 cursor-pointer rounded-full bg-black/40 px-2 py-2 
        opacity-0 transition duration-200 hover:bg-black/80 group-hover:opacity-100"
          onClick={() => {
            console.log("Open edit cover image modal");
          }}
        >
          <h1 className="text-white">
            <EditIcon styles="h-5 w-5" />
          </h1>
        </span>
        <span
          className="absolute bottom-2 right-4 cursor-pointer rounded-full bg-black/40 px-2 py-2 
        opacity-50 transition duration-200 hover:bg-black/80 group-hover:opacity-100"
          onClick={() => {
            console.log("Open new task modal");
          }}
        >
          <h1 className="text-white">
            <PlusIcon styles="h-8 w-8" />
          </h1>
        </span>
      </div>
      <div
        id="tasks-table"
        className="flex h-full w-full flex-col items-start gap-3 overflow-y-auto rounded-xl bg-slate-900 px-2 py-3"
      >
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              id={task.id}
              name={task.name}
              dueDate={task.dueDate}
              details={task.details}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
