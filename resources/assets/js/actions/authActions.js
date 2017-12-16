export function getAuthUser(store) {
  axios.get('/api/auth')
  .then(function (response) {
    var user = response.data;
    store.dispatch({type: "AUTH_USER", payload: user});
  })
  .catch(function (error) {
    console.log(error);
  });
}

export function loaded() {
  return {
    type: "LOADED",
    payload: true,
  }
}
