import {
  CubeIcon,
  HamburgerIcon,
  CloseIcon,
  SettingsIcon,
  PlusIcon,
} from "../../UI/Icons";
import { Link } from "react-router-dom";

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  listId?: string;
}

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

const Navbar: React.FC<NavbarProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  listId,
}) => {
  return (
    <nav className="flex w-full flex-col lg:hidden">
      <div className="flex w-full items-center justify-between px-3 py-4 backdrop-blur-lg lg:hidden">
        <span className="flex items-center gap-2">
          <CubeIcon styles="text-slate-200 h-7 w-7 shadow-md" />
          <h1 className="items-center text-[1.3rem] font-[200] text-slate-200">
            ToeDoe
          </h1>
        </span>
        <span
          className={`${
            isMenuOpen && "rotate-180"
          } cursor-pointer transition-transform duration-500`}
          onClick={() => {
            setIsMenuOpen(true);
          }}
        >
          <HamburgerIcon styles="text-slate-200 h-8 w-8 shadow-md" />
        </span>
      </div>
      <div
        className={`
        absolute right-0 top-0 z-10 flex h-screen 
        overflow-x-hidden bg-slate-800 shadow-xl transition-all duration-[500ms]
        ${
          isMenuOpen
            ? "w-[25rem] max-sm:w-[20rem] max-[325px]:w-[15rem]"
            : "w-0"
        }
      `}
      >
        <div
          id="content-wrapper"
          className="flex flex-col gap-4 px-2 py-4 max-sm:w-[20rem] 
          max-sm:min-w-[20rem] 
          max-[325px]:w-[15rem] max-[325px]:min-w-[15rem] 
          sm:w-[25rem] sm:min-w-[25rem]"
        >
          <div className="flex w-full justify-end">
            <span
              className="rotate-90 cursor-pointer transition-transform duration-500"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              <CloseIcon styles="text-slate-200 h-8 w-8" />
            </span>
          </div>
          <div className="flex flex-col items-center justify-start gap-2">
            {lists.map((list) => (
              <Link
                to={`/dashboard/${list.id}`}
                key={list.id}
                className={`flex w-full cursor-pointer flex-col items-center justify-between rounded-lg px-3 py-2 transition duration-300 hover:bg-slate-700 ${
                  list.id.toString() === listId && "bg-slate-700"
                }`}
              >
                <div className="flex w-full items-center justify-between">
                  <h1 className="text-lg text-slate-200">{list.name}</h1>
                  <span className="text-[1rem] font-thin text-slate-200">
                    {list.items.length}
                  </span>
                </div>
                <span className="mt-1 h-[1px] w-full bg-slate-400 opacity-60"></span>
              </Link>
            ))}
          </div>
          <div className="group mt-3 flex cursor-pointer justify-between rounded-md border-[1px] border-slate-700 p-3 text-xl text-slate-200 transition duration-300 hover:bg-slate-700">
            <h1 className="text-[1rem] font-normal text-slate-200 opacity-80 transition duration-300 group-hover:opacity-100">
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
              styles={
                "w-7 h-7 text-slate-400 group-hover:text-slate-200 transition duration-300"
              }
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
