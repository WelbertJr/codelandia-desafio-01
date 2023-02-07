import styled from "styled-components";
import iconSearch from "../../../assets/iconSearch.svg";

export const InputStyle = styled.input`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;
  align-items: center;
  padding: 0 0 0 5.28rem;
  background: ${({ bgcolor }) => bgcolor};
  color: ${({ color }) => color};
  font-family: "Inter";
  font-size: 1.8rem;
  background-image: url(${iconSearch});
  background-repeat: no-repeat;
  background-position: 1em;
  margin-top: 7.3rem;
  background-size: contain;
  border-radius: 0.5rem;
  border: none;
  ::placeholder {
    color: white;
    opacity: 0.5;
  }
  svg {
    width: 1rem;
    height: 1rem;
  }
  @media (max-width: 960px) {
    width: 90%;
  }
`;
