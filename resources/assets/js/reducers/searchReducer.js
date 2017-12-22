var initialState = {
  loading: false,
  searched: false,
  list: [],
}
export default function reducer(state=initialState, action) {

  switch (action.type) {
    case "SEARCH_LOADING_START": {
      return {...state, loading: true, searched: true}
    }
    case "SEARCH_LOADING_STOP": {
      return {...state, loading: false}
    }
    case "SEARCH_GET_LIST": {
      return {...state, list: action.payload}
    }
  }

  return state
}
