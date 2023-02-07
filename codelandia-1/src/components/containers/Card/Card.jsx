import React from "react";
import { DivTitleCard } from "./cardStyled";
import { ContainerCard } from "./cardStyled";
import { Title } from "../../micro/Title/Title";
import HeartIcon from "../../../assets/heartIcon";
import Aos from "aos";
import "aos/dist/aos.css";

export const Card = ({ secondTitle, thirdTitle, marginTop }) => {
  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <ContainerCard
      marginTop={marginTop}
      width={"90rem"}
      data-aos="flip-up"
      bgColor={"#ffffff"}
    >
      <DivTitleCard width={"100%"}>
        <Title
          title={"02 de jul, 2021"}
          color={"#717171"}
          margin={"0"}
          fontSize={"1.6rem"}
        />
        <HeartIcon defaultValue="false" />
      </DivTitleCard>
      <Title
        title={secondTitle}
        secondTitleColor={"#1A202C"}
        secondTitleSize={"2.6rem"}
        secondTitleMargin={"2.2rem 0 0.8rem 0"}
      />
      <Title
        title={thirdTitle}
        thirdTitleSize={"1.8rem"}
        thirdTitleColor={"#717171"}
        thirdTitleMargin={"0"}
      />
    </ContainerCard>
  );
};
