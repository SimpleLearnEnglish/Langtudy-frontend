export const getEng = async (offset: string = 'easy') => {
  const data = await (await fetch(`http://localhost:4000/db`)).json();
  return data;
};
