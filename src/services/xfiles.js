export const fetchCharacterDetail = (name) => {
  return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters/${name}`)
    .then(res => res.json())
    .then(data => data[0]);
};

export const fetchCharacters = (page) => {
  return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters?category=Monster_of_the_Week&perPage=5&page=${page}`)
    .then(res => res.json())
    .then(data => data.results);
};
