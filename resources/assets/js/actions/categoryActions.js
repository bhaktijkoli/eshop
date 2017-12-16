export function getCategories(store) {
  axios.get('/api/get/categories')
  .then(function (response) {
    var categories = response.data
    store.dispatch({type: "GET_CATEGORIES", payload: categories});
  })
  .catch(function (error) {
    console.log(error);
  });
}
