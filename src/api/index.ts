import axios from 'axios';

export const getEng = async (offset: string = 'easy') => {
  const { data } = await axios.get(
    `https://my-json-server.typicode.com/alpha0212/LangtudyAPI/db`
  );
  return data;
};
