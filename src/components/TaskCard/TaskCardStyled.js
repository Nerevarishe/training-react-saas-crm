import styled from "styled-components";
import { TaskCardEditBlock } from "./TaskCardEditBlock";

export const TaskCardStyled = styled.div`
  position: relative;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.08);
  margin-bottom: 24px;
  border-radius: 4px;
  padding: 16px;
  background: ${(props) => props.theme.colors.whiteColor};

  &:hover {
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.14);
    ${TaskCardEditBlock} {
      display: flex;
    }
  }
`;
