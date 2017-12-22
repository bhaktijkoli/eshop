import { combineReducers } from "redux"

import auth from "./authReducer"
import category from "./categoryReducer"
import search from "./searchReducer"

export default combineReducers({
  auth,
  category,
  search,
})
