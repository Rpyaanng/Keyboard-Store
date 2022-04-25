import { FaHome } from "react-icons/fa";
import { ImKeyboard } from "react-icons/im";
import { BsMouse2 } from "react-icons/bs";
import { BiRectangle } from "react-icons/bi";
import SwitchIcon from "../components/SwitchIcon";

const links = [
  {
    id: 1,
    text: "Home",
    icon: <FaHome />,
    path: "/",
  },
  {
    id: 2,
    text: "Keyboards",
    icon: <ImKeyboard />,
    path: "/search/keyboards",
  },
  {
    id: 3,
    text: "Switches",
    icon: <SwitchIcon />,
    path: "/search/switch",
  },
  {
    id: 4,
    text: "Deskmats",
    icon: <BiRectangle />,
    path: "/search/deskmats",
  },
  {
    id: 5,
    text: "Mice",
    icon: <BsMouse2 />,
    path: "/search/mice",
  },
];
export default links;
