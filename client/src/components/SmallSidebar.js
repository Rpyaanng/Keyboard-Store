import Wrapper from "../assets/wrappers/SmallSidebar";
import { useAppContext } from "../context/appContext";
import { FaTimes } from "react-icons/fa";
import NavLinks from "./NavLinks";
import Logo from "./Logo";

const SmallSidebar = () => {
  const { showSidebar, setShowSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <header>
            <Logo />
            <button
              className="close-btn"
              onClick={() => {
                setShowSidebar(false);
              }}
            >
              <FaTimes />
            </button>
          </header>
          <div className="links">
            <NavLinks />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default SmallSidebar;
