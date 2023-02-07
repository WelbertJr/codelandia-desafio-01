import { Text } from "./titleStyled";

export function Title({
  color,
  secondTitleColor,
  thirdTitleColor,
  fontSize,
  secondTitleSize,
  thirdTitleSize,
  title,
  margin,
  secondTitleMargin,
  thirdTitleMargin,
}) {
  return (
    <Text
      color={color}
      secondTitleColor={secondTitleColor}
      thirdTitleColor={thirdTitleColor}
      fontSize={fontSize}
      secondTitleSize={secondTitleSize}
      thirdTitleSize={thirdTitleSize}
      margin={margin}
      secondTitleMargin={secondTitleMargin}
      thirdTitleMargin={thirdTitleMargin}
    >
      {title}
    </Text>
  );
}
