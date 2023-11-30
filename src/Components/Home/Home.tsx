import { useState } from "react";
import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";
import { SidebarIcon } from "../../UI/Icons";
import Navbar from "./Navbar";

const Home = () => {
  const { listId } = useParams();
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(true);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="flex h-full w-full">
      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        listId={listId}
      />
      {!isSideBarOpen && (
        <div
          className="absolute left-5 top-6 cursor-pointer transition duration-300 hover:bg-slate-700 max-lg:hidden"
          onClick={() => {
            setIsSideBarOpen(true);
          }}
        >
          <SidebarIcon styles={"w-7 h-7"} />
        </div>
      )}
      <Sidebar
        listId={listId}
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
      <div className="flex flex-col">
        <div id="cover-image" className="w-full"></div>
      </div>
    </div>
  );
};

export default Home;
