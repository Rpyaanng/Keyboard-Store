import { ReactComponent as Switch } from "./switch-icon.svg";
import styled from "styled-components";
const SwitchIcon = () => {
  return (
    <Wrapper>
      <Switch />
    </Wrapper>
  );
};
export default SwitchIcon;

const Wrapper = styled.span`
  svg {
    width: 24px;
    height: 24px;
  }
`;
