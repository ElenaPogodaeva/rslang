import { Tab, Tabs, Typography } from "@mui/material";
import { Api } from "../../api/api";
import React, { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { WordCard } from "../../components/Word-card/word-card";
import style from './textbook.scss';

const api = new Api();

const TABS = [
  {
    id: 1,
    label: 'Раздел 1',
    visible: true,
  },
  {
    id: 2,
    label: 'Раздел 2',
    visible: true,
  },
  {
    id: 3,
    label: 'Раздел 3',
    visible: true,
  },
  {
    id: 4,
    label: 'Раздел 4',
    visible: true,
  },
  {
    id: 5,
    label: 'Раздел 5',
    visible: true,
  },
  {
    id: 6,
    label: 'Раздел 6',
    visible: true,
  },
  {
    id: 7,
    label: 'Раздел 7',
    visible: false,
  }
]

interface WordsInterface {
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

const TextbookPage = () => {
  const navigate = useNavigate();
  const { tab } = useParams();
  const [value, setValue] = useState(Number(tab) || 0);
  const [words, setWords] = useState([]);

  const fetchWords = React.useCallback(async () => {
    const response = await api.getWords(0, value);
    setWords(response);
  }, [value]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    navigate(`/textbook/${newValue}`);
  };

  React.useEffect(() => {
    fetchWords();
  }, [tab]);
 
  return (
    <div className={style.MainContainer}>
      <h2 className={style.textbookTitle}>Учебник</h2>
      <Tabs 
        value={value} 
        onChange={handleChange} 
        aria-label="basic tabs example"
        sx={{
          mb: 5,
          flexWrap: 'wrap',
          justifyContent: 'center',
          }}>
        {TABS.map(({label, id}) => <Tab key={`simple-tab-${id}`} label={label} id={`simple-tab-${id}`} aria-controls={`simple-tabpanel-${id}`}/>)}
      </Tabs>
      <div>
        {
          words.map((v: WordsInterface) => 
          <WordCard key={v.id} 
            imgSrc={v.image} 
            word={v.word} 
            trnscr={v.transcription} 
            trnslt={v.wordTranslate}
            txtMeaning={v.textMeaning}
            txtExample={v.textExample}
            txtMeaningTranslt = {v.textMeaningTranslate}
            txtExampleTrslt = {v.textExampleTranslate}
            />
          )
        }
      </div>
     
    </div>
  )
}

export default TextbookPage