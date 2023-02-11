import { Host, Port } from '@/host';
import axios from 'axios';

export const getEng = async (offset: string) => {
  const data = await (await fetch(`https://${Host}/${offset}`)).json();
  return data;
};
