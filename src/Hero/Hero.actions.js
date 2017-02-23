const _URI = 'https://ce3rt0e0yl.execute-api.us-east-1.amazonaws.com/prod/abbHeros';
export const LIST = 'LIST_HERO';
export const SELECT = 'SELECT_HERO';

export function defaultHero() {
  return {
    'groups': [],
    'abilities': {
      'fightingSkills': 0,
      'strength': 0,
      'durability': 0,
      'energyProjection': 0,
      'speed': 0,
      'intelligence': 0
    },
    'realName': '',
    's3ImageUrl': '',
    'powers': '',
    'uuid': '',
    'heroName': '',
    'signedAccords': ''
  };
}

export function listHeroes() {
  return async (dispatch) => {
    const heroes = await _getHeroListAsync();

    dispatch(_listHero(heroes));
  }
}

export function selectHero(id = null) {
  return async (dispatch) => {
    if (!id) {
      dispatch(_selectHero(defaultHero()));
      return;
    }

    const heroes = await _getHeroListAsync();

    const hero = heroes.filter(h => h.uuid === id)[0];

    dispatch(_selectHero(hero));
  }
}

export function addHero(newHero) {
  return async (dispatch) => {
    if (!newHero.uuid) {
      newHero.uuid = newHero.heroName.toLowerCase().replace(' ', '');
    }

    const response = await _postAsync(_URI, newHero);
  }
}

async function _postAsync(uri, jsonObject) {
  return await fetch(uri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonObject)
  });
}

async function _getHeroListAsync() {
  const response = await fetch(_URI, { 'method': 'GET' });
  const result = await response.json();

  return result;
}

function _selectHero(payload) {
  return { type: SELECT, payload };
}

function _listHero(payload) {
  return { type: LIST, payload };
}
