export function getList(store, formdata) {
  store.dispatch({type: "SEARCH_LOADING_START"});
  axios.get('/api/items/get?'+formdata)
  .then(function (response) {
    var list = response.data;
    store.dispatch({type: "SEARCH_GET_LIST", payload: list});
    store.dispatch({type: "SEARCH_LOADING_STOP"});
  })
  .catch(function (error) {
    console.log(error);
  });
}
