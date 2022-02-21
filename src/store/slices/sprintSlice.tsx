import { createSlice } from "@reduxjs/toolkit";
import { WordCard } from "pages/games/sprint/sprint-components/game";

const initialState = {
  words: [],
  start: false,
  end: false,
  word: '',
  translate: '',
  answerTranslate: '',
  answer: false,
  trueAnswerWords: [],
  falseAnswerWords: [],
  score: 0,
  countTrueAnswer: 0,
  difficulty: null,
};

export interface ISprintState {
  words: [];
  start: boolean;
  end: boolean;
  word: string;
  answer: boolean;
  trueAnswerWords: [];
  falseAnswerWords: [];
  translate: string;
  answerTranslate: string;
  score: number;
  countTrueAnswer: number;
  difficulty: number | null;
}

const sprintSlice = createSlice({
  name: 'sprint',
  initialState,
  reducers: {
    setWordsGame(state, action) {
      state.words = action.payload.words;
    },
    deleteWordsGame(state, action) {
      state.words = state.words.filter((word: WordCard) => word.id !== action.payload.id);
    },
    setDifficulty(state, action) {
      state.difficulty = action.payload.difficulty;
    },
    setStart(state, action) {
      state.start = action.payload.start;
    },
    setEnd(state, action) {
      state.end = action.payload.end;
    },
    setCardWordGame(state, action) {
      state.word = action.payload.word;
      state.translate = action.payload.translate;
      state.answerTranslate = action.payload.answerTranslate;
    },
    setAnswer(state, action) {
      state.answer = action.payload.answer;
    },
    setScore(state, action) {
      state.score = action.payload.score;
    },
    setTrueAnswerWords(state, action) {
      state.trueAnswerWords = action.payload.trueAnswerWords;
    },
    setAnswerWords(state, action) {
      state.trueAnswerWords = action.payload.trueAnswerWords;
      state.falseAnswerWords = action.payload.falseAnswerWords;
    },
    setCountTrueAnswer(state, action) {
      state.countTrueAnswer = action.payload.countTrueAnswer;
    }
  },
});

export const {
  setWordsGame, setDifficulty, setStart, setCardWordGame, 
  setAnswer, setScore, deleteWordsGame, setTrueAnswerWords, 
  setAnswerWords, setCountTrueAnswer, setEnd
} = sprintSlice.actions;

export default sprintSlice.reducer;