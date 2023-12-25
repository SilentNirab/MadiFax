
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../../Providers/Authprovider";


// eslint-disable-next-line react/prop-types, no-unused-vars
const CreateTask = () => {
    const {user} = useContext(AuthContext);
    console.log(user.email);
    const handelSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const title = form.get("title");
        const deadlines = form.get("deadlines");
        const description = form.get("description");
        const priority = form.get("priority");
        const email = user.email;

        const todo = {title, deadlines, description, priority, email};

        // send data to the server

        fetch('https://server-neon-ten.vercel.app/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                
                if (data.acknowledged == true) {
                    toast.success("Task added successfully");
                }
            })
    }
    return (
        <div>
            <h2 className="text-center text-3xl font-bold mt-4">Add Your TODO</h2>
            <form onSubmit={handelSubmit} className="card-body 2 max-w-md mx-auto">

                <input type="text" name="title" placeholder="Title" className="border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" required />
                <input type="text" name="description" placeholder="Description" className="border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" required />
                <input type="datetime-local" name="deadlines" className="border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" required/>
                <select name="priority" className="border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" defaultValue={"default"} required>
                    <option disabled value="default">Priority</option>
                    <option>Low</option>
                    <option>Moderate</option>
                    <option>High</option>
                </select>

                <div className="form-control mt-6">

                    <button className="bg-black w-full text-white text-md font-bold px-4 py-2 rounded-md">Add TODO</button>
                    <ToastContainer></ToastContainer>
                </div>
            </form >
        </div >
    );
};

export default CreateTask;