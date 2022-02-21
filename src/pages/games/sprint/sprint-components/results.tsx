import { Card } from "@mui/material";
import { StoreInterface } from "@store/*";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ResultWords } from "./resultWords";
import style from './sprint.scss';

const ResultsSprint = () => {
  const {
    trueAnswerWords,
    falseAnswerWords,
  } = useSelector((state: StoreInterface) => state.sprint);
  return (
    <>
      <Card raised={true} sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '400px',
        height: '500px',
        backgroundColor: '#fff',
        padding: '20px',
        overflow: 'auto'
      }}>
        <h2>Результат</h2>
        <div className={style.wordsContainer}>
          <h3 className={style.studiedTitle}>
            <span>Выучено: </span>
            <span>10</span>
          </h3>
          
          {
            trueAnswerWords.map(word => <ResultWords {...word} key={word.id}/>)
          }
        </div>
        <div className={style.wordsContainer}>
          <h3 className={style.wrongTitle}>
            <span>Ошибки: </span>
            <span>10</span>
          </h3>
          
          <p className={style.wordTitle}>
            <span>word</span>
            <span> - </span>
            <span>перевод</span>
          </p>
          <p className={style.wordTitle}>
            <span>word</span>
            <span> - </span>
            <span>перевод</span>
          </p>
          <p className={style.wordTitle}>
            <span>word</span>
            <span> - </span>
            <span>перевод</span>
          </p>
          <p className={style.wordTitle}>
            <span>word</span>
            <span> - </span>
            <span>перевод</span>
          </p>
          <p className={style.wordTitle}>
            <span>word</span>
            <span> - </span>
            <span>перевод</span>
          </p>
          <p className={style.wordTitle}>
            <span>word</span>
            <span> - </span>
            <span>перевод</span>
          </p>
          <p className={style.wordTitle}>
            <span>word</span>
            <span> - </span>
            <span>перевод</span>
          </p>
          <p className={style.wordTitle}>
            <span>word</span>
            <span> - </span>
            <span>перевод</span>
          </p>
        </div>
      </Card>
    </>
  )
}

export default ResultsSprint