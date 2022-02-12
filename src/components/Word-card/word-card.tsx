import { Card, CardMedia, IconButton } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import React, { useState } from "react";
import { FC } from "react";
import style from './word-card.scss';

interface WordCardProps {
  imgSrc: string;
  word: string;
  trnscr: string;
  trnslt: string;
  txtMeaning: string;
  txtMeaningTranslt: string;
  txtExample: string;
  txtExampleTrslt: string;
}

const audio = new Audio();

export const WordCard: FC<WordCardProps> = ({
  imgSrc, word, trnscr, trnslt, txtMeaning, txtExample, txtExampleTrslt, txtMeaningTranslt
}) => {

  const [isPlay, setIsPlay] = useState(false);

  const playAudio = () => {
    const arrSrc = [
      'https://rslang-team54.herokuapp.com/files/01_0002_example.mp3',
      'https://rslang-team54.herokuapp.com/files/01_0002_example.mp3',
      'https://rslang-team54.herokuapp.com/files/01_0002_meaning.mp3'
    ]
    audio.onended
    audio.src = 'https://rslang-team54.herokuapp.com/files/01_0002_example.mp3';
    
    if(!isPlay) {
      setIsPlay(true);
      return audio.play();
    }
    if(isPlay) {
      setIsPlay(false);
      return audio.pause();
    }
  }

  return (
    <Card sx={
      {
        mb: 5,
        display: "flex"
      }
      }>
      <CardMedia
        component="img"
        sx={{ width: 230, height: 180 }}
        image={`https://rslang-team54.herokuapp.com/${imgSrc}`}
        alt="image"
      />
      <div className={style.innerContainer}>
        <div className={style.df}>
          <div>
            <h3 className={style.wordCardTitle}>{word} - {trnscr}</h3>
            <span className={style.wordCardSubtitle}>{trnslt}</span>
          </div>     
          <IconButton onClick={playAudio} onEnded={playAudio} aria-label="play/pause">
            {
            isPlay ? 
            <PauseIcon sx={{ height: 38, width: 38 }} /> : <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            }
              
          </IconButton>
        </div>
        
        <div className={style.subttlContainer}>
          <p className={style.wordCardSubtitle} dangerouslySetInnerHTML={{__html: txtMeaning}}></p>
          <p className={style.wordCardSubtitle__min} dangerouslySetInnerHTML={{__html: txtMeaningTranslt}}></p>
        </div>

        <div className={style.subttlContainer}>
          <p className={style.wordCardSubtitle} dangerouslySetInnerHTML={{__html: txtExample}}></p>
          <p className={style.wordCardSubtitle__min} dangerouslySetInnerHTML={{__html: txtExampleTrslt}}></p>
        </div>       
      </div>
    </Card>
  )
}