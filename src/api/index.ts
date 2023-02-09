import { Host, Port } from '@/host';

export const getEng = async (offset: string) => {
  const data = await (await fetch(`http://${Host}:${Port}/${offset}`)).json();
  return data;
};
