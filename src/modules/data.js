import { createAction, handleActions } from 'redux-actions';

const SET_CATEGORY = 'data/SET_CATEGORY';
const ALL_RANGE = 'data/ALL_RANGE';
const SET_CONTENT = 'data/SET_CONTENT';
const RESET = 'data/RESET';

export const setCategory = createAction(SET_CATEGORY, (category) => category);
export const allRange = createAction(ALL_RANGE, ({ isAll, content }) => ({
  isAll,
  content,
}));
export const setContent = createAction(SET_CONTENT, (content) => content);
export const reset = createAction(RESET);

const initialState = {
  category: '',
  isAll: false,
  content: null,
};

const data = handleActions(
  {
    [SET_CATEGORY]: (state, { payload: category }) => ({
      ...state,
      category,
      content: null,
    }),
    [ALL_RANGE]: (state, { payload: isAll, content }) => ({
      ...state,
      isAll,
      content,
    }),
    [SET_CONTENT]: (state, { payload: content }) => ({
      ...state,
      content,
      isAll: false,
    }),
    [RESET]: () => ({
      initialState,
    }),
  },
  initialState,
);

export default data;
