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
    console.log(answer);
  }

  useEffect(() => {
    if (answer) {
      playAudio();
    }
  }, [answer]);

  return(
    <>
      {/* <div className={style.gameHeader}>
      {console.log(words)}
        {}
          <ul className={style.gameBar}>
            <li></li>
            <li></li>
            <li></li>
          </ul>
      </div> */}
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
      {console.log(selected, answer?.id)}
       {/* <div className={style.words}>
          <button className={`${style.word} ${words[0].id !== answerId && isSelect ? style.wrongWord : ''}`}
          key={words[0].id} value={words[0].id} onClick={checkAnswer}>1</button>
           <button className={`${style.word} ${words[1].id !== answerId && isSelect ? style.wrongWord : ''}`}
          key={words[1].id} value={words[1].id} onClick={checkAnswer}>1</button> 
          <div className={style.word}>2</div>
          <div className={style.word}>3</div>
          <div className={style.word}>4</div>
          <div className={style.word}>5</div>
      </div>  */}
      {isAnswered ? 
        <button className={style.button} onClick={nextRound}>
          Дальше
        </button> :
        <button className={style.button} value='' onClick={checkAnswer}>
          Не знаю
        </button>
      }
       {/* <button className={style.button} value='' onClick={() => {
        if (isAnswered) {
          nextRound();
        }
        else {
          
        }
      }}>
        {isAnswered ? 'Дальше' : 'Не знаю'}
      </button> */}
    </>
  )
}