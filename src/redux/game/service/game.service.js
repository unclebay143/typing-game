import axiosInstance from "../../../axios";
import {
  BASE_URL,
  UPDATE_GAME_RECORD,
} from "../../user/service/root-endpoints";

// Update player's game
const updatePlayerGameRecord = async (wpm, accuracy) => {
  const payload = {
    wpm,
    accuracy,
  };
  try {
    const response = await axiosInstance.put(
      BASE_URL + UPDATE_GAME_RECORD,
      payload
    );

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

const GameService = {
  updatePlayerGameRecord,
};

export default GameService;
