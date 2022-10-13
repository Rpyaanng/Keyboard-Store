import { useAppContext } from "../context/appContext";
import NavLinks from "./NavLinks";
import Logo from "../components/Logo";
import Wrapper from "../assets/wrappers/BigSidebar";
import { MdFormatAlignLeft } from "react-icons/md";
import { FaSun, FaMoon } from "react-icons/fa";

const BigSideBar = () => {
  const { setShowSidebar, showSidebar, isLightMode, toggleLightMode } =
    useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <div className="top">
            <header>
              <button
                className="toggle-btn"
                onClick={() => {
                  setShowSidebar(!showSidebar);
                }}
              >
                <MdFormatAlignLeft></MdFormatAlignLeft>
              </button>
            </header>
          </div>
          <div className="middle">
            <NavLinks />
          </div>
          <div className="bottom">
            <button className="theme btn" onClick={() => toggleLightMode()}>
              <div
                className={
                  isLightMode ? "rot-anim moon-anim" : "rot-anim sun-anim"
                }
              >
                <FaMoon className="moon" />
                <FaSun className="sun" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default BigSideBar;
