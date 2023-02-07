import styled from "styled-components";

export const ContainerMain = styled.main`
  display: flex;
  width: 100%;
  min-height: 100%;
  flex-direction: column;
  background-color: #f3f5f7;
  align-items: center;
  padding: 10rem 0;
  @media (max-width: 416px) {
    padding: 5rem 0;
  }
`;
