import { StoreInterface } from "@store/*";
import React from "react";
import { useSelector } from "react-redux";
import { WordCard } from "./game";
import style from './sprint.scss';

export const ResultWords: React.FC<WordCard> = (props) => {
  return (
    <>
      <p className={style.wordTitle}>
        <span>{props.word}</span>
        <span> - </span>
        <span>{props.wordTranslate}</span>
      </p>
    </>
  ) 
}