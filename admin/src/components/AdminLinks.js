import adminLinks from "../utils/adminLinks";
import { NavLink } from "react-router-dom";

const AdminLinks = () => {
  return (
    <div className="nav-links">
      {adminLinks.map((link) => {
        const { id, text, icon, path } = link;

        return (
          <NavLink
            key={id}
            to={path}
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
export default AdminLinks;
