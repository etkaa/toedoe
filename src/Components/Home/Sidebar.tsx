import { Link } from "react-router-dom";
import { PlusIcon, SettingsIcon, SidebarIcon } from "../../UI/Icons";

interface SidebarProps {
  listId?: string;
  isSideBarOpen: boolean;
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({
  listId,
  isSideBarOpen,
  setIsSideBarOpen,
}) => {
  const lists = [
    {
      id: 1,
      name: "Home",
      items: [
        { id: 1, name: "Item 1" },
        { id: 1, name: "Item 1" },
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
      ],
    },
    {
      id: 2,
      name: "School",
      items: [
        { id: 1, name: "Item 1" },
        { id: 1, name: "Item 1" },
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
        { id: 5, name: "Item 5" },
      ],
    },
    {
      id: 3,
      name: "Work",
      items: [
        { id: 1, name: "Item 1" },
        { id: 3, name: "Item 3" },
        { id: 4, name: "Item 4" },
        { id: 5, name: "Item 5" },
      ],
    },
  ];

  return (
    <div
      className={`flex min-h-screen w-full max-w-[25rem] flex-col bg-slate-800 px-6 py-5 max-lg:hidden ${
        isSideBarOpen && "translate-x-0"
      } ${!isSideBarOpen && "-translate-x-full"} transition duration-300`}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-2xl tracking-wide text-slate-200">My Lists</h1>
        <div
          className="cursor-pointer rounded-lg p-1 hover:bg-slate-700"
          onClick={() => {
            setIsSideBarOpen(false);
          }}
        >
          <SidebarIcon styles={"w-7 h-7"} />
        </div>
      </div>
      <div className="mt-8 flex flex-col justify-start gap-4">
        {lists.map((list) => {
          return (
            <div
              key={list.id}
              className={`group flex flex-col gap-1 rounded-lg p-3 transition duration-300 ${
                listId === list.id.toString() && "bg-slate-700"
              }`}
            >
              <Link
                to={`/dashboard/${list.id}`}
                className="text-xl text-slate-200 transition duration-300"
              >
                <div className="flex justify-between">
                  <h1 className="text-slate-200">{list.name}</h1>
                  <span className="text-lg font-thin text-slate-400 group-hover:text-slate-200 tranition duration-[400ms]">
                    {list.items.length}
                  </span>
                </div>
                <span className="block h-0.5 max-w-0 bg-slate-500 transition-all duration-[400ms] group-hover:max-w-full" />
              </Link>
            </div>
          );
        })}
      </div>
      <div className="group mt-3 flex cursor-pointer justify-between rounded-md p-3 text-xl text-slate-200 transition duration-300 hover:bg-slate-700">
        <h1 className="text-lg text-slate-200 opacity-0 transition duration-300 group-hover:opacity-100">
          Create new list
        </h1>
        <div className="flex translate-x-1 items-center text-slate-400 transition duration-300 group-hover:text-slate-200">
          <PlusIcon styles="w-7 h-7" />
        </div>
      </div>
      <div
        className="group mt-auto flex cursor-pointer items-center justify-between rounded-lg p-3 transition duration-300 hover:bg-slate-700"
        onClick={() => {
          console.log("Open Profile Modal");
        }}
      >
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=3220&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="profile-image"
            className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 object-cover p-[2px]"
          />
          <h1 className="text-lg text-slate-200">Etka</h1>
        </div>
        <SettingsIcon
          styles={"w-7 h-7 text-slate-400 group-hover:text-slate-200 transition duration-300"}
        />
      </div>
    </div>
  );
};

export default Sidebar;
