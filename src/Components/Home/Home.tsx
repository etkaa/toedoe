import { useState } from "react";
import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";
import { SidebarIcon } from "../../UI/Icons";
import Navbar from "./Navbar";
import List from "../List/List";

const Home = () => {
  const { listId } = useParams();
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(true);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="flex h-full w-full max-lg:flex-col">
      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        listId={listId}
      />
      <div className="flex">
        <Sidebar
          listId={listId}
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
        />
      </div>
      <div className="mx-auto flex h-full w-full justify-center px-4 [3560px]:scale-200">
        <List />
      </div>
      <div
        className={`absolute left-5 top-6 cursor-pointer rounded-lg text-slate-100 transition-all duration-200 ease-in-out max-lg:hidden ${
          !isSideBarOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => {
          setIsSideBarOpen(true);
        }}
      >
        <SidebarIcon styles={"w-7 h-7"} />
      </div>
    </div>
  );
};

export default Home;
