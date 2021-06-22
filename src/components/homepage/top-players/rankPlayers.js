import axios from "axios";
import {
  BASE_URL,
  RANK_PLAYERS,
} from "../../../redux/user/service/root-endpoints";

export const rankPlayers = (descendingOrderOfPlayers) => {
  try {
    let rankingTempholder = [];
    // console.log(rankingTempHolder);

    // Rank the player based on their descending order position - set rank
    descendingOrderOfPlayers.forEach((player, index) => {
      // Index starts from 0, rank start from 1

      console.log(player, index);
      player.rank = index + 1;

      // Store the player in order of rank in the temp holder
      return rankingTempholder.push(player);
    });

    // Update the players rank in the database if there is a ranking
    if (rankingTempholder) {
      rankingTempholder?.forEach(({ id, rank }) => {
        //Update user record with the new rank
        const payload = {
          id: id,
          rank: rank,
        };
        // Update the player details
        axios.put(BASE_URL + RANK_PLAYERS, payload);
      });
    }
  } catch (error) {
    console.log(error);
  }
};
