import React from "react";
import style from './team.scss';

const TeamPage = () => {
  return (
    <section className={style.team}>
          <div className={style.container}>
            <h2 className={style.title}>О команде</h2>
            <div className={style.teamItems}>
              <div className={style.teamCard}>
                <div className={`${style.teamImg} ${style.teamImg1}`}></div>
                <span className={style.teamTitle}>Алексей Абрамов</span>
                <a className={style.github} href="https://github.com/Al-Abramov" target="_blank">Al-Abramov</a>
                <p className={style.teamSubtitle}>Team Lead, Разработчик</p>
                <p className={style.teamText}>
                  <ol>
                    <li>Авторизация</li>
                    <li>Электронный учебник</li>
                    <li>Cписок слов</li>
                    <li>Игра "Спринт"</li>
                  </ol>
                </p>
              </div>
              <div className={style.teamCard}>
                <div className={`${style.teamImg} ${style.teamImg2}`}></div>
                <span className={style.teamTitle}>Елена Погодаева</span>
                <a className={style.github} href="https://github.com/ElenaPogodaeva" target="_blank">ElenaPogodaeva</a>
                <p className={style.teamSubtitle}>Разработчик</p>
                <p className={style.teamText}>
                  <ol>
                    <li>Главная страница</li>
                    <li>Игра «Аудиовызов»</li>
                    <li>Игра «Саванна»</li>
                  </ol>
                </p>
              </div>
            </div>
          </div>
        </section>
  )
}

export default TeamPage