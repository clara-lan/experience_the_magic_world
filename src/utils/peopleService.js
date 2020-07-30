export function getPeople(){
  const endpoint="https://www.potterapi.com/v1/characters";
  return fetch(endpoint).then((res)=>res.json());
}