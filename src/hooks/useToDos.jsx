import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";

const useToDos = () => {
    const publicAxios = usePublicAxios();

    const {isPending: loading, data: task = [],  refetch} = useQuery({
        queryKey: ['todos'], 
        queryFn: async() =>{
            const res = await publicAxios.get('/task');
            return res.data;
        }
    })
    return [task, loading, refetch]
};

export default useToDos;