import { QuestionAnswer } from "@mui/icons-material";
import React, {useState, useEffect} from "react";
import { Word } from "types";
import style from './Questions.scss';

const url = 'https://rslang-team54.herokuapp.com';

export const Questions = ({words, answer, handleAnswer, handleWrongAnswer, isAnswered, nextRound}:  
  {words: Word[], answer: Word | null, handleAnswer: (wordId: string) => void,
    handleWrongAnswer: () => void,
    isAnswered: boolean, nextRound: () => void}) => {
  

  const [selected, setSelected] = useState('');

  const checkAnswer = (event: any) => {
   if (!isAnswered) {

      handleAnswer(event.target.value);
      setSelected(event.target.value);
      setTimeout(() => nextRound(), 1000);
    }
   }


  useEffect(() => {
    let timerNext: ReturnType<typeof setTimeout>;
     const timer = setInterval(() => {
       if (answer) {
        handleWrongAnswer();
        timerNext = setTimeout(() => nextRound(), 1000);
       }
      
     }, 4000);
    
    return () => {
      clearInterval(timer);
      clearTimeout(timerNext);
    }
  }, [answer]);

  return(
    <>
      <div className={style.words}>
        {words && words.map((word, index) => (
          <button className={`${style.word} 
            ${(word.id !== answer?.id) && isAnswered ? style.wrongAnswers : ''}
            ${(word.id === answer?.id) && isAnswered ? style.correctAnswer : ''}
            ${(word.id === selected) && (word.id !== answer?.id) && isAnswered ? style.wrongAnswer : ''}
            `}
            key={word.id} value={word.id} onClick={checkAnswer}>
              <span className={style.wordIndex}>{index + 1}</span>
              {word.wordTranslate}

          </button>
        
        ))}
      </div>
    </>
  )
}