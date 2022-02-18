import React from "react";
import GameSprint from "./sprint-components/game";
import SettingsSprint from "./sprint-components/settings";
import style from './sprint-components/sprint.scss';

const SprintPage = () => {
  const started = false;
  const finished = false;

  return (
    <div className={style.bgStyle}>
      <div className={style.sprintContainer}>
        <GameSprint />
      </div>
    </div>
  )
}

export default SprintPage;