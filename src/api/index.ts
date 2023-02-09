import { Host, Port } from '@/host';

export const getEng = async (offset: string) => {
  const data = await (await fetch(`https://${Host}/${offset}`)).json();
  return data;
};
