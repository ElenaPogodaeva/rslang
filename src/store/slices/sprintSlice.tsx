import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  words: [],
  start: false,
  end: false,
  word: '',
  translate: '',
  answer: false,
  difficulty: null,
};

export interface ISprintState {
  words: [],
  start: boolean,
  end: boolean,
  word: string,
  answer: boolean;
  translate: string,
  difficulty: number | null,
}

const sprintSlice = createSlice({
  name: 'sprint',
  initialState,
  reducers: {
    setWordsGame(state, action) {
      state.words = action.payload.words;
    },
    setDifficulty(state, action) {
      state.difficulty = action.payload.difficulty;
    },
    setStart(state, action) {
      state.start = action.payload.start;
    }
  },
});

export const {setWordsGame, setDifficulty, setStart} = sprintSlice.actions;

export default sprintSlice.reducer;