import { combineReducers } from "redux";
import gameReducer from "./game/reducers/game.reducer";
import userReducer from "./user/reducers/user.reducers";

const rootReducer = combineReducers({
  user: userReducer,
  game: gameReducer,
});

export default rootReducer;
