import { LAST_GAME_RESULT } from "../../types";
import GameService from "../service/game.service";

export const updatePlayerGameRecord = (wpm, accuracy) => (dispatch) => {
  dispatch({
    type: LAST_GAME_RESULT,
    payload: {
      wpm,
      accuracy,
    },
  });
  return GameService.updatePlayerGameRecord(Number(wpm), Number(accuracy));
};
