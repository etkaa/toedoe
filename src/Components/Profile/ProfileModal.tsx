// import { useState } from "react";
import { CloseIcon, EditIcon } from "../../UI/Icons";

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
        className="flex max-h-[80%] w-[90%] max-w-[35rem] flex-col gap-6 rounded-xl bg-slate-900 px-4 py-4 shadow-lg"
      >
        <h1 className="text-xl font-semibold text-slate-200">Profile</h1>
        <div className="flex justify-between gap-2 max-lg:flex-col-reverse">
          <form className="flex w-full flex-col gap-4 px-4 py-1">
            <div className="flex flex-col gap-1">
              <label className="text-slate-200">Your Name</label>
              <input
                type="text"
                className="w-full rounded-lg bg-slate-300 px-2 py-1 shadow-lg outline-none transition duration-200 focus:bg-slate-200"
                //   value={userName}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-slate-200">Email</label>
              <input
                className="w-full rounded-lg bg-slate-300 px-2 py-1 shadow-lg outline-none transition duration-200 focus:bg-slate-200"
                //   value={email}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-slate-200">Empty</label>
              <input
                type="text"
                className="w-full rounded-lg bg-slate-300 px-2 py-1 shadow-lg outline-none transition duration-200 focus:bg-slate-200"
                //   value={empty}
              />
            </div>
          </form>
          <div className="flex h-full flex-col items-center justify-center">
            <div className="w-[8rem] py-3">
              <img
                src="https://source.unsplash.com/random/910x540/?city,night"
                alt="profile-image"
                className="aspect-square w-[8rem] rounded-full border-[3px] border-slate-800"
              />
            </div>
            <button className="mx-auto flex items-center gap-2 text-center text-slate-400 hover:text-slate-200">
              Edit <EditIcon styles="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 px-2 py-2">
          <button
            //   onClick={onDelete}
            className="rounded-lg bg-slate-800 px-4 py-2 font-semibold text-slate-200 shadow-lg hover:bg-black"
          >
            Cancel
          </button>
          <button
            //   onClick={handleSave}
            className="rounded-lg bg-slate-200 px-4 py-2 font-semibold text-slate-800 shadow-lg hover:bg-black hover:text-slate-200"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTaskModal;
