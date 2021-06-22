import { LAST_GAME_RESULT } from "../../types";

// Last Game Record
const INITIAL_STATE = {
  wpm: null,
  accuracy: null,
};

// redux reducer function
const gameReducer = (state = INITIAL_STATE, action) => {
  // Destructure type and payload from action
  const { type, payload } = action;

  switch (type) {
    case LAST_GAME_RESULT:
      return {
        ...state,
        wpm: payload.wpm,
        accuracy: payload.accuracy,
      };

    default:
      // return the state by default else react will shout
      return state;
  }
};

export default gameReducer;
