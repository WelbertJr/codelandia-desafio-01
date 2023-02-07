import styled from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${({ bgcolor }) => bgcolor};
  align-items: center;
  flex-direction: column;
  padding: 4.1rem 0;
`;
