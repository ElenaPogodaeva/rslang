import { QuestionAnswer } from "@mui/icons-material";
import React, {useState, useEffect} from "react";
import { Word } from "types";
import style from './Questions.scss';

const url = 'https://rslang-team54.herokuapp.com';

export const Questions = ({words, answer, handleAnswer, isAnswered, nextRound}:  
  {words: Word[], answer: Word | null, handleAnswer: (wordId: string) => void,
  isAnswered: boolean, nextRound: () => void}) => {
  

  const [selected, setSelected] = useState('');

  const checkAnswer = (event: any) => {
    if (!isAnswered) {
      handleAnswer(event.target.value);
      setSelected(event.target.value);
    }
  }

  const playAudio = () => {
    const wordAudio = new Audio();
    wordAudio.src = `${url}/${answer?.audio}`;
    wordAudio.play();
  }

  useEffect(() => {
    if (answer) {
      playAudio();
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
        }
        break;
      case 'Digit2':
        if (!isAnswered) {
          handleAnswer(words[1].id);
          setSelected(words[1].id);
        }
        break;
      case 'Digit3':
        if (!isAnswered) {
          handleAnswer(words[2].id);
          setSelected(words[2].id);
        }
        break;
      case 'Digit4':
        if (!isAnswered) {
          handleAnswer(words[3].id);
          setSelected(words[3].id);
        }
        break;
      case 'Digit5':
        if (!isAnswered) {
          handleAnswer(words[4].id);
          setSelected(words[4].id);
        }
        break;
      case 'Enter':
        if (!isAnswered) {
          handleAnswer('');
          setSelected('');
        }
        else {
          nextRound();
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

      {isAnswered ? 
        <button className={style.button} onClick={nextRound}>
          Дальше
        </button> :
        <button className={style.button} value='' onClick={checkAnswer}>
          Не знаю
        </button>
      }

    </>
  )
}