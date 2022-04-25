import icon from "./switch-icon.svg";
import styled from "styled-components";
const SwitchIcon = () => {
  return <Wrapper src={icon}></Wrapper>;
};
export default SwitchIcon;

const Wrapper = styled.img`
  width: 28px;
  height: 28px;
`;
