import * as actionTypes from './actionTypes';

export const actionFactory = (dispatch) => {
  return {
    increase: () => dispatch({ type: actionTypes.INCREASE }),
  };
};
