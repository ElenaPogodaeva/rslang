import { StoreInterface } from "@store/*";
import React from "react";
import { useSelector } from "react-redux";
import GameSprint from "./sprint-components/game";
import SettingsSprint from "./sprint-components/settings";
import style from './sprint-components/sprint.scss';

const SprintPage = () => {
  const {start} = useSelector((state: StoreInterface) => state.sprint);;
  const finished = false;

  return (
    <div className={style.bgStyle}>
      <div className={style.sprintContainer}>
        {start ? <GameSprint /> : <SettingsSprint />}
      </div>
    </div>
  )
}

export default SprintPage;