import React from "react";
import { bg1, one } from "../assets/images";

import { generateClassNames } from "../utils/storage";

import "./component.scss";

export type CardPokemon = {
  name: string;
  skill1?: string;
  skill2?: string;
  img?: string;
  color: string;
  skillColor: string;
  showSkill2?: boolean;
};

export const CardList = (props: CardPokemon) => {
  const { name, skill1, skill2, img, color, skillColor, showSkill2 } = props;

  const renderClassnames = () =>
    generateClassNames("cd__card", [`cd__card--${color}`]);

  const renderSKillsColor = () =>
    generateClassNames("cd__wrapper__skill", [
      `cd__wrapper__skill--${skillColor}`,
    ]);

  return (
    <div className="cd">
      <div className={renderClassnames()}>
        <div>
          <h1>{name}</h1>
          <div className="cd__wrapper">
            <p className={renderSKillsColor()}>{skill1}</p>
            {showSkill2 && <p className={renderSKillsColor()}>{skill2}</p>}
          </div>
        </div>
        <div className="cd__img1">
          <img src={bg1} />
        </div>
        <div className="cd__img">
          <img src={one} />
        </div>
      </div>
    </div>
  );
};
