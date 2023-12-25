import axios from "axios";

const publicAxios = axios.create({
    baseURL: 'https://server-neon-ten.vercel.app',
  });
const usePublicAxios = () => {
    return publicAxios ;
};

export default usePublicAxios;