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

  useEffect(() => {

    document.addEventListener('keypress', onKeypress);
  
    return () => {
      document.removeEventListener('keypress', onKeypress);
    };
  }, [answer,  handleAnswer]);

  const onKeypress = (e: any) => {
    switch (e.code) {
      case 'Digit1':
        if (!isAnswered) {
          handleAnswer(words[0].id);
          setSelected(words[0].id);
          setTimeout(() => nextRound(), 1000);
        }
        break;
      case 'Digit2':
        if (!isAnswered) {
          handleAnswer(words[1].id);
          setSelected(words[1].id);
          setTimeout(() => nextRound(), 1000);
        }
        break;
      case 'Digit3':
        if (!isAnswered) {
          handleAnswer(words[2].id);
          setSelected(words[2].id);
          setTimeout(() => nextRound(), 1000);
        }
        break;
      case 'Digit4':
        if (!isAnswered) {
          handleAnswer(words[3].id);
          setSelected(words[3].id);
          setTimeout(() => nextRound(), 1000);
        }
        break;
      case 'Digit5':
        if (!isAnswered) {
          handleAnswer(words[4].id);
          setSelected(words[4].id);
          setTimeout(() => nextRound(), 1000);
        }
        break;
      default:
        break;
    }
  };

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