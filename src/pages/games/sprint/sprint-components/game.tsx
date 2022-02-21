import { Card, FormControlState } from "@mui/material";
import { StoreInterface } from "@store/*";
import React from "react";
import { KeyboardEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
  deleteWordsGame, setAnswer, setAnswerWords, 
  setCardWordGame, setCountTrueAnswer, setEnd, 
  setScore, setStart, setTrueAnswerWords 
} from "../../../../store/slices/sprintSlice";
import { BuiletCircle } from "./builetCircle";
import { getRandom } from "./settings";
import style from './sprint.scss';

export interface WordCard {
  audio: string;
  audioExample: string;
  audioMeaning: string;
  group: number;
  id: string;
  image: string;
  page: number;
  textExample: string;
  textExampleTranslate: string;
  textMeaning: string;
  textMeaningTranslate: string;
  transcription: string;
  word: string;
  wordTranslate: string;
}

let num = 20;
let coef = 1;
let cardWord: WordCard[] = [];
let arrTrueAnswers: WordCard[] = [];
let arrFalseAnswers: WordCard[] = [];

const GameSprint = () => {
  const dispatch = useDispatch();
  const [time, setTime] = React.useState(60);

  const {
    words,
    answerTranslate,
    translate,
    score,
    countTrueAnswer,
    word
  } = useSelector((state: StoreInterface) => state.sprint);

  const generateCard = () => {
    num -= 1;
    const mainNum = getRandom(0, num);
    const secondNum = getRandom(0, num);
    const cardsNum = getRandom(0, 2);

    const mainCard: WordCard = words[mainNum] || {};
    const secondCard: WordCard = words[secondNum];
    const cards = [mainCard, secondCard];

    const word = mainCard.word;
    const answerTranslate = mainCard.wordTranslate;
    const translate = cards[cardsNum].wordTranslate;

    dispatch(setCardWordGame({word: word, answerTranslate: answerTranslate, translate: translate}));
    
    cardWord = words.filter((card: WordCard) => card.word === word);

    dispatch(deleteWordsGame({id: mainCard.id}));
  }


  const onAnswerClick = (answer: boolean) => {
    if(answer) {
      arrTrueAnswers.push(...cardWord);
    } else {
      arrFalseAnswers.push(...cardWord)
    }

    //dispatch(setAnswerWords({trueAnswerWords: arrTrueAnswers, falseAnswerWords: arrFalseAnswers}));

    generateCard();

    let countTrueAnswerLocal = countTrueAnswer;
    let scoreLocal = score;

    if(answer) {
      countTrueAnswerLocal === 3 ? coef += 1 : coef += 0;

      countTrueAnswerLocal < 3 ? countTrueAnswerLocal += 1 : countTrueAnswerLocal = 0;

      scoreLocal += 10 * coef;
    } else {
      countTrueAnswerLocal = 0;
      coef = 1;
    }

    dispatch(setCountTrueAnswer({countTrueAnswer: countTrueAnswerLocal}));
    dispatch(setAnswer({answer: answer}));
    dispatch(setScore({score: scoreLocal}));
  }

  const trueAnswer = () => {
    const answer = translate === answerTranslate;

    arrTrueAnswers
    arrFalseAnswers

    onAnswerClick(answer);
  }

  const falseAnswer = () => {
    const answer = translate !== answerTranslate;

    onAnswerClick(answer);
  }

  const answerKeyPress = (e: any) => {
    if(e.code === 'ArrowLeft') {
      const answer = translate === answerTranslate;
    
      onAnswerClick(answer);
    }

    if(e.code === 'ArrowRight') {
      const answer = translate !== answerTranslate;
    
      onAnswerClick(answer);
    }
  }


  React.useEffect(() => {
    generateCard();
    window.addEventListener('keydown', answerKeyPress);
    //const timer = setInterval(() => setTime(time => time - 1), 1000);

    return () => {
      window.removeEventListener('keydown', answerKeyPress);
      //clearInterval(timer);
    }
  }, []);

  React.useEffect(() => {
    if(!words.length || !time) {
      dispatch(setStart({start: false}))
      dispatch(setEnd({end: true}))
    }

  }, [words, time]);

  return (
    <>
      <h2 className={style.score}>
        <span>Очки: </span>
        <span>{score}</span>
        <span className={style.scoreItem}>+10</span>
      </h2>
      <div className={style.timeWrap}>
        <span>{time}</span>
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
          {
            [1, 2, 3].map(id => <BuiletCircle key={id} id={id} />)
          }
        </div>
        <div className={style.wordContainer}>
          <span className={style.word}>{word}</span>
        <span className={style.translate}>{translate}</span>
        </div>
        <div className={style.btnsContainer}>
          <button onClick={trueAnswer} className={`${style.btn} ${style.yes}`}>Верно</button>
          <button onClick={falseAnswer} className={`${style.btn} ${style.no}`}>Неверно</button>
        </div>
      </Card>
    </>
  )
}

export default GameSprint