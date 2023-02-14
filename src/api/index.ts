import { Host, Port } from '@/host';

export const getEng = async (offset?: string, repo?: string) => {
  const data = await (await fetch(`https://${Host}${repo}/${offset}`)).json();
  return data;
};
