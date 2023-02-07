import { InputStyle } from "./inputStyled";

export function Input({
  width,
  height,
  bgcolor,
  color,
  fontFamily,
  placeholder,
}) {
  return (
    <InputStyle
      width={width}
      height={height}
      bgcolor={bgcolor}
      color={color}
      fontFamily={fontFamily}
      placeholder={placeholder}
    />
  );
}
