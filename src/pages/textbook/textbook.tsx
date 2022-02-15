import { Pagination, Tab, Tabs, PaginationItem, CircularProgress } from "@mui/material";
import { Api } from "../../api/api";
import React, { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { WordCard } from "../../components/Word-card/word-card";
import style from './textbook.scss';
import { useAuth } from "../../hooks/use-auth";
import { useDispatch, useSelector } from "react-redux";
import { setTextbook } from "../../store/slices/textbookSlice";

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
    label: 'Сложные слова',
    visible: false,
  }
]

export interface WordsInterface {
  [key: string] : string | {difficulty: string} | number;
  audio: string;
  audioExample: string;
  audioMeaning: string;
  group: number;
  id: string;
  _id: string;
  image: string;
  page: number;
  textExample: string;
  textExampleTranslate: string;
  textMeaning: string;
  textMeaningTranslate: string;
  transcription: string;
  word: string;
  wordTranslate: string;
  userWord: {difficulty: string};
}

interface IUserWordsId {
  id: string;
  difficulty: string;
  wordId: string;
}

const TextbookPage = () => {
  const [isFetching, setFetching] = React.useState(false);
  const navigate = useNavigate();
  const { tab = 0, page = 1 } = useParams();
  const [value, setValue] = useState(Number(tab));

  const user = useSelector((state: any) => state.user);
  const {words} = useSelector((state: any) => state.textbook);

  const dispatch = useDispatch();

  const auth = useAuth();

  const fetchWords = React.useCallback(async () => {
    const response = await api.getWords(Number(page) - 1, value);
    dispatch(setTextbook({words: response}));
  }, [value, page]);

  const fetchUserWords = React.useCallback(async () => {
    setFetching(true)
    const [{ paginatedResults }] = await api.getUserAggregatedWords({
      page: Number(page) - 1,
      group: value,
      wordsPerPage: 20,
      filter: Number(value) === 6 ? {'$or':[{'userWord.difficulty':'normal'},{"userWord.difficulty":"hard"}]} : {},
    });

    if(Number(value) === 6) {
      const arrWords = [];
      for(let i = 0; i < 6; i++) {
        const [{ paginatedResults }] = await api.getUserAggregatedWords({
          page: 0,
          group: i,
          wordsPerPage: 20,
          filter: {'$or':[{'userWord.difficulty':'normal'},{"userWord.difficulty":"hard"}]},
        });
        arrWords.push(...paginatedResults)
      }

      dispatch(setTextbook({words: arrWords}));
      setFetching(false);
      return;
    }
    
    dispatch(setTextbook({words: paginatedResults}));
    setFetching(false);
  }, [value, page]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    navigate(`/textbook/${newValue}`);
  };

  React.useEffect(() => {
    if (user.id) {
      fetchUserWords();
    } else {
      fetchWords();
    }

  }, [tab, page]);

  return (
    <div className={style.MainContainer}>
      <h2 className={style.textbookTitle}>Учебник</h2>
      <Tabs 
        value={value}
        onChange={handleChange} 
        aria-label="basic tabs example"
        sx={{
          mb: 4,
          flexWrap: 'wrap',
          justifyContent: 'center',
          }}>
        {TABS.map(({label, id, visible}) => (auth.isAuth || visible)
          ? <Tab key={`simple-tab-${id}`} label={label} id={`simple-tab-${id}`} aria-controls={`simple-tabpanel-${id}`}/>
          : null)}
      </Tabs>
      <div className={style.paginationContainer}>
        <Pagination page={Number(page)} count={30} onChange={(e, pageNum) => navigate(`/textbook/${value}/${pageNum}`)} />
      </div>
      <div>
        <div className={style.progressCenter}>
          {isFetching && <CircularProgress size={80} sx={{position: "absolute"}} />}
        </div>
      
        {
          words.map((v: WordsInterface) => 
          <WordCard key={v.id || v._id} 
            imgSrc={v.image} 
            word={v.word} 
            trnscr={v.transcription} 
            trnslt={v.wordTranslate}
            txtMeaning={v.textMeaning}
            txtExample={v.textExample}
            txtMeaningTranslt = {v.textMeaningTranslate}
            txtExampleTrslt = {v.textExampleTranslate}
            audio={v.audio}
            audioExample={v.audioExample}
            audioMeaning={v.audioMeaning}
            id={v.id || v._id}
            userWord={v.userWord}
            tab={value}
            />
          )
        }
      </div>
     
    </div>
  )
}

export default TextbookPage