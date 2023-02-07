import styled from "styled-components";

export const Text = styled.p`
  font-size: ${({ fontSize }) => fontSize};
  font-size: ${({ secondTitleSize }) => secondTitleSize};
  font-size: ${({ thirdTitleSize }) => thirdTitleSize};
  color: ${({ color }) => color};
  color: ${({ secondTitleColor }) => secondTitleColor};
  color: ${({ thirdTitleColor }) => thirdTitleColor};
  margin: ${({ margin }) => margin};
  margin: ${({ secondTitleMargin }) => secondTitleMargin};
  margin: ${({ thirdTitleMargin }) => thirdTitleMargin};
`;
