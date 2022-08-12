import React from "react";
import carrousel from "assets/img/carrousel.png";
import * as S from "./styles";
import { CardComponent } from "components";

const Home = () => {
  return (
    <S.Home>
      <picture>
        <img src={carrousel} alt="Imagens principais" />
      </picture>
    </S.Home>
  );
};

export default Home;
