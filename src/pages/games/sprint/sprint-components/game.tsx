import { Card } from "@mui/material";
import React from "react";
import style from './sprint.scss';

const GameSprint = () => {
  return (
    <>
      <h2 className={style.score}>
        <span>Очки: </span>
        <span>0</span>
      </h2>
      <div className={style.timeWrap}>
        <span>60</span>
      </div>
      <Card raised={true} sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '400px',
        height: '270px',
        backgroundColor: '#f0ffff3d',
        padding: '20px',
      }}>
        <div className={style.circleWrap}>
          <span className={style.circle}></span>
          <span className={style.circle}></span>
          <span className={style.circle}></span>
        </div>
        <div className={style.wordContainer}>
          <span className={style.word}>Word</span>
          <span className={style.translate}>Перевод</span>
        </div>
        <div className={style.btnsContainer}>
          <button className={`${style.btn} ${style.yes}`}>Верно</button>
          <button className={`${style.btn} ${style.no}`}>Неверно</button>
        </div>
      </Card>
    </>
  )
}

export default GameSprint