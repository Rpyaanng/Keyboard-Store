import { useAppContext } from "../context/appContext";
import links from "../utils/links";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  const { setShowSidebar } = useAppContext();
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { id, text, icon, path } = link;

        return (
          <NavLink
            key={id}
            to={path}
            onClick={() => {
              setShowSidebar(false);
            }}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
