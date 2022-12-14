const getIngredientsData = (url, state, setState) => {
  fetch(url, {
    method: 'GET',
    headers: {
      authorization: '',
      'Content-Type': 'application/json'
    }
  })
  .then((res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
  .then(dataFromServer => setState({data: dataFromServer.data, hasError: false}))
    .catch(e => {
      setState({...state, hasError: true})
      console.log(`Ошибка при загрузке данных: ${e}`);
    });
}

export { getIngredientsData };
