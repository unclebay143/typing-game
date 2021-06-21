import { SET_SCREEN_MESSAGE } from "../redux/types";

export const comingSoon = (feature) => (dispatch) => {
  dispatch({
    type: SET_SCREEN_MESSAGE,
    payload: {
      type: "success",
      message: `${feature} Coming soon 🚀`,
    },
  });
};
