// import { useState } from "react";
import { CloseIcon } from "../../UI/Icons";

const NewTaskModal = () => {
  //   const [taskName, setTaskName] = useState<string>("");
  //   const [taskDetails, setTaskDetails] = useState<string>("");
  //   const [taskDueDate, setTaskDueDate] = useState<string>("");

  return (
    <div
      id="backdrop"
      className="absolute left-0 top-0 z-20 flex  h-screen w-screen items-center justify-center bg-black/60"
    >
      <button
        //   onClick={() => {dispatch(closeTaskDetailsModal()))}
        className="absolute right-8 top-8 z-20 flex items-center gap-2 text-lg text-slate-100"
      >
        <CloseIcon styles="h-8 w-8" />
        Close
      </button>
      <div
        id="modal"
        className="flex max-h-[80%] w-[90%] max-w-[35rem] flex-col gap-6 rounded-xl bg-slate-800 px-4 py-4 shadow-lg"
      >
        <h1 className="text-xl font-semibold text-slate-200">Create a Task</h1>
        <form className="flex flex-col gap-4 px-4 py-1">
          <div className="flex flex-col gap-1">
            <label className="text-slate-200">Task Name</label>
            <input
              type="text"
              className="w-full rounded-lg bg-slate-300 px-2 py-1 shadow-lg outline-none transition duration-200 focus:bg-slate-200"
              //   value={taskName}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-slate-200">Task Details</label>
            <textarea
              //textarea multi line
              className="w-full resize-none rounded-lg bg-slate-300 px-2 py-1 shadow-lg outline-none transition duration-200 focus:bg-slate-200"
              //   value={taskDescription}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-slate-200">Due Date</label>
            <input
              type="text"
              className="w-full rounded-lg bg-slate-300 px-2 py-1 shadow-lg outline-none transition duration-200 focus:bg-slate-200"
              //   value={taskDueDate}
            />
          </div>
        </form>
        <div className="flex items-center justify-center gap-4 px-2 py-2">
          <button
            //   onClick={onDelete}
            className="rounded-lg bg-slate-900 px-4 py-2 font-semibold text-slate-200 shadow-lg hover:bg-black"
          >
            Cancel
          </button>
          <button
            //   onClick={handleSave}
            className="rounded-lg bg-slate-200 px-4 py-2 font-semibold text-slate-800 shadow-lg hover:bg-black hover:text-slate-200"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTaskModal;
