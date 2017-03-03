import { IHero } from '../constants/hero.constants';

export function addHero(heroToAdd: IHero): Promise<Response> {
  if (!heroToAdd.uuid) {
    heroToAdd.uuid = heroToAdd.heroName.toLowerCase().replace(' ', '');
  }

  return _post(_URI, heroToAdd);
}

export function getHeroes(): Promise<IHero[]> {
  return fetch(_URI).then((response) => response.text())
    .then((jsonHeroes) => JSON.parse(jsonHeroes));
}

const _URI = 'https://ce3rt0e0yl.execute-api.us-east-1.amazonaws.com/prod/abbHeros';
function _post<T>(uri: string, jsonObject: T): Promise<Response> {
  return fetch(uri, {
    body: JSON.stringify(jsonObject),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
}
