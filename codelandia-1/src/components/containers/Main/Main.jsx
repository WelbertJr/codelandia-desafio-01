import { Card } from "../Card/Card";
import { ContainerMain } from "./mainStyled";

export function Main() {
  return (
    <ContainerMain>
      <Card
        secondTitle={"Agora é oficial: o Windows 11 está vindo"}
        thirdTitle={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis."
        }
      />
      <Card
        marginTop={"5rem"}
        secondTitle={"Tim Berners-Lee vai leiloar código-fonte da web"}
        thirdTitle={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero."
        }
      />
      <Card
        marginTop={"5rem"}
        secondTitle={"Tem Firefox novo no pedaço e você vai querer migrar"}
        thirdTitle={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est."
        }
      />
      <Card
        marginTop={"5rem"}
        secondTitle={"John McAfee, criador do antivírus McAfee, morre"}
        thirdTitle={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero."
        }
      />
    </ContainerMain>
  );
}
