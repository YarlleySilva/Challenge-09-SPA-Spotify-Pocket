import { TYPES_USER } from '../actions';

const initialValue = {
  email: "react17@gmail.com",
  errorMessage: "",
  name: "",
  status: "",
  thumb: "https://66.media.tumblr.com/79ea3953c2449e34f0ff1898d3ed1518/231ef0ccce6291d1-5d/s640x960/c2b04e521e30e38f14b185cfdbd8dc7fb4f12b26.jpg"
}

const user = (state = initialValue, action) => {
  switch (action.type) {
    case TYPES_USER.UPDATE_USER:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
}
export default user;