import axios from 'axios';

let Axios = axios.create();

export const resetAxios = () => {
  Axios = axios.create();
};

export const getAxios = () => {
  return Axios;
};

export default getAxios();
