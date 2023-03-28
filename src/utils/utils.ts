const utils = () => {
  const API_BASE = 'http://164.92.135.103/api/v1/users';

  const getResource = async (url:string) => {
    let res = await fetch(url);
    if(!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  }

  const getUsers = ():Promise<[]> => {
    return getResource(`${API_BASE}`);
  }


  return {getUsers};
}

export default utils;