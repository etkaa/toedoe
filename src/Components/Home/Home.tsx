import { useState } from "react";
import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";
import { SidebarIcon } from "../../UI/Icons";

const Home = () => {
  const { listId } = useParams();
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(true);

  return (
    <div className="flex h-full w-full">
      {!isSideBarOpen && (
        <div
          className="absolute left-5 top-6 cursor-pointer transition duration-300 hover:bg-slate-700"
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
