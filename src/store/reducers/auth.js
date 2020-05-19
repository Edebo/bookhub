import { SET_AUTH } from "../actions/type";
const initialAuth = {
  auth: {}
};
function auth(state = initialAuth, action) {
  switch (action.type) {
    case SET_AUTH:
      return {
        auth: action.payload
      };
    default:
      return state;
  }
}

export default auth;
