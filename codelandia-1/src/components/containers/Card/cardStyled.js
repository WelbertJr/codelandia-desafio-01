import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  width: ${({ width }) => width};
  height: max-content;
  flex-direction: column;
  background: ${({ bgColor }) => bgColor};
  padding: 2.5rem 2.65rem 2.5rem 2.4rem;
  border-radius: 1rem;
  margin-top: ${({ marginTop }) => marginTop};
  @media (max-width: 960px) {
    width: 90%;
  }
`;

export const DivTitleCard = styled.div`
  display: flex;
  width: ${({ width }) => width};
  justify-content: space-between;
  align-items: flex-start;
  svg {
    cursor: pointer;
  }
  @media (max-width: 960px) {
    width: 100%;
  }
`;
