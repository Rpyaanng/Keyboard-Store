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
    path: "/category/keyboards",
  },
  {
    id: 3,
    text: "Switches",
    icon: <SwitchIcon />,
    path: "/category/switches",
  },
  {
    id: 4,
    text: "Deskmats",
    icon: <BiRectangle />,
    path: "/category/deskmats",
  },
  {
    id: 5,
    text: "Mice",
    icon: <BsMouse2 />,
    path: "/category/mice",
  },
];
export default links;
