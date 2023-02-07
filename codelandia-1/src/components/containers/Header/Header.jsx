import { ContainerHeader } from "./headerStyled";
import { ContainerTitle } from "../../micro/ContainerTitle/ContainerTitle";
import { Input } from "../../micro/Input/Input";
import { Title } from "../../micro/Title/Title";

export function Header() {
  return (
    <ContainerHeader
      width={"100%"}
      height={"25rem"}
      bgcolor={"linear-gradient(88.27deg, #574AE8 0%, #3EA1DB 100%)"}
    >
      <ContainerTitle width={"90rem"}>
        <Title
          title="Codelândia"
          fontSize={"2.4rem"}
          color={"#ffffff"}
          margin={"0"}
        />
        <Title
          title="blog"
          fontSize={"2.4rem"}
          color={"#ffffff"}
          margin={"0"}
        />
      </ContainerTitle>
      <Input
        width={"90rem"}
        height={"6.5rem"}
        placeholder={"Pesquisar no blog"}
        type="text"
        bgcolor={"rgba(255, 255, 255, 0.2)"}
        color={"#FFFFFF"}
        fontSize={"1.8rem"}
      />
    </ContainerHeader>
  );
}
