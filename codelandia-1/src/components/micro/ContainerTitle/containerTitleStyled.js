import styled from "styled-components";

export const DivTitle = styled.div`
  display: flex;
  width: ${({ width }) => width};
  justify-content: space-between;
  align-items: flex-start;
  svg {
    cursor: pointer;
  }
  @media (max-width: 960px) {
    width: 90%;
  }
`;
