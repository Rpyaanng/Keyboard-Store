import { IoIosAddCircle } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const adminLinks = [
  {
    id: 1,
    text: "Create Product",
    icon: <IoIosAddCircle />,
    path: "/admin/create-product",
  },
  {
    id: 2,
    text: "View Orders",
    icon: <FaClipboardList />,
    path: "/admin/orders",
  },
  {
    id: 3,
    text: "Set Featured",
    icon: <AiOutlineStar />,
    path: "/admin/products",
  },
];
export default adminLinks;
