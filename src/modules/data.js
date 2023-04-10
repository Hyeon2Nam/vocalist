import { createAction, handleActions } from 'redux-actions';

const SET_CATEGORY = 'data/SET_CATEGORY';
const ALL_RANGE = 'data/ALL_RANGE';
const SET_CONTENT = 'data/SET_CONTENT';
const REMADE_CONTENT = 'data/REMADE_CONTENT';
const FIRST_COMPLETE = 'data/FIRST_COMPLETE';
const RESET = 'data/RESET';
const SET_MESSAGE = 'data/MESSAGE';

export const setCategory = createAction(SET_CATEGORY, (category) => category);
export const allRange = createAction(ALL_RANGE, ({ isAll, content }) => ({
  isAll,
  content,
}));
export const setContent = createAction(SET_CONTENT, (content) => content);
export const remadeContent = createAction(REMADE_CONTENT, (content) => content);
export const firstComplete = createAction(FIRST_COMPLETE);
export const reset = createAction(RESET);
export const setMessage = createAction(SET_MESSAGE, (message) => message);

const initialState = {
  category: '',
  isAll: false,
  content: null,
  remade: false,
  firstComplete: false,
  message: '',
};

const data = handleActions(
  {
    [SET_CATEGORY]: (state, { payload: category }) => ({
      ...state,
      category,
      content: null,
      remade: false,
      firstComplete: false,
    }),
    [ALL_RANGE]: (state, { payload: isAll, content }) => ({
      ...state,
      isAll,
      content,
      firstComplete: false,
    }),
    [SET_CONTENT]: (state, { payload: content }) => ({
      ...state,
      content,
      isAll: false,
      remade: false,
      firstComplete: false,
    }),
    [REMADE_CONTENT]: (state, { payload: content }) => ({
      ...state,
      content,
      remade: true,
      firstComplete: false,
    }),
    [FIRST_COMPLETE]: (state) => ({
      ...state,
      firstComplete: true,
    }),
    [RESET]: () => ({
      initialState,
    }),
    [SET_MESSAGE]: (state, { payload: message }) => ({
      ...state,
      message,
    }),
  },
  initialState,
);

export default data;
