import { useContext } from "react";
import { AuthContext } from "../../../Providers/Authprovider";
import useToDos from "../../../hooks/useToDos";
import { ToastContainer, toast } from "react-toastify";


const MyProfile = () => {
    const { user } = useContext(AuthContext);
    const [task, loading, refetch] = useToDos();
    const tasks = task.filter(item => item.email === user.email)
    if (loading) {
        refetch
    }

    const handelDelete = (id) => {
        fetch(`https://server-neon-ten.vercel.app/task/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged == true) {
                    toast.success("Delete successfully");
                }
                refetch()
            }
            )

    }

    return (
        <div>
            <h2 className="text-center font-bold text-3xl py-4">My Tasks</h2>
            <div className=" grid grid-cols-1 xl:grid-cols-3 gap-4">
                <div className="">
                    <h2 className="bg-[#888888] p-4 text-center font-bold text-2xl text-white">To Do</h2>
                    {
                        tasks.map(item => <div key={item._id} className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                {item.title}
                            </div>
                            <div className="collapse-content">
                                <div className="space-y-4">
                                    <p><span className=" font-bold">Description: </span>{item.description}</p>
                                    <p className=" border-y border-stone-400 py-2"><span className=" font-bold">Priority: </span>{item.priority}</p>
                                    <p><span className=" font-bold">Deadlines: </span>{item.deadlines}</p>
                                    <button onClick={() => handelDelete(item._id)} className="bg-red-600 hover:bg-red-700 px-2 md:px-5 py-2 text-white font-semibold text-md lg:text-md rounded-md">Delete</button>
                                </div>
                            </div>
                        </div>)
                    }

                </div>
                <div className="">
                    <h2 className="bg-[#dd2da8] p-4 text-center font-bold text-2xl text-white">Ongoing</h2>


                </div>
                <div className="">
                    <h2 className="bg-[#4ac82b] p-4 text-center font-bold text-2xl text-white">Completed</h2>


                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MyProfile;
