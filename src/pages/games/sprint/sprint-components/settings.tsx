import { Button } from "@mui/material";
import React from "react";
import style from './sprint.scss';

const SettingsSprint = () => {
  return (
        <>
          <div className={style.innerContainer}>
            <h2 className={style.sprintTitle}>Спринт</h2>
            <p className={style.sprintSubttl}>
              Угадай максимальное количество слов за 1 минуту
            </p>
          </div>
          <div>
            <div className={style.btnsWrap}>
              <span className={style.sprintSubttl}>Сложность:</span>
              <div className={style.mt}>
                <button className={style.settingsBtn}>1</button>
                <button className={style.settingsBtn}>2</button>
                <button className={style.settingsBtn}>3</button>
                <button className={style.settingsBtn}>4</button>
                <button className={style.settingsBtn}>5</button>
                <button className={style.settingsBtn}>6</button>
              </div>
              <button className={style.startBtn}>Старт</button>
            </div>
            <div className={style.sbttlWrap}>
              <span className={style.sprintSubttl}>Чтобы выбрать, используйте:</span>
              <p className={style.choiceWrap}>
                <i className={`${style.icon} ${style.mouseIcon}`}></i>
                <span>Мышь</span>
              </p>
              <p className={style.choiceWrap}>
                <i className={`${style.icon} ${style.arrowIcon}`}></i>
                <span>Клавиши влево и вправо</span>
              </p>
            </div>
          </div>
        </>
  )
}

export default SettingsSprint