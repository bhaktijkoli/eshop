var initialState = {
  categories: []
}
export default function reducer(state=initialState, action) {

  switch (action.type) {
    case "GET_CATEGORIES": {
      return {...state, categories: action.payload}
    }
  }

  return state
}
