import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { AuthContext } from "../../Providers/Authprovider";

const SignUp = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const {googleSignin, signUp} = useContext(AuthContext);

        //signup with email and password
        const handelSignUp = e =>{
            e.preventDefault();
            const form = new FormData(e.currentTarget);
            const name = form.get("name");
            const image = form.get("image");
            const email = form.get("email");
            const password = form.get("password");

            if (password.length < 6) {
                toast.warn("Password should be at least 6 characters or longer!");
                return;
            }
            else if (!/[A-Z]/.test(password)) {
                toast.warn('Your password should have at least one upper case characters!');
                return;
            }
            else if (!/(?=.*[@$!%*#?&])/.test(password)) {
                toast.warn('Your password should have at least one special characters.');
                return;
            }
            else{
                toast.success("Successfuly Sign Up");
            }

            signUp(email, password)
                .then(result => {
                    // user proflie update
                    updateProfile(result.user, {
                        displayName: name,
                         photoURL: image
                    }).then(() => {
    
                        console.log("Profile updated!");
                    }).catch((error) => {
                        console.error(error);
                    });

                    
                 //navigat after login
                navigate(location?.state ? location.state : '/');
            })
            .catch(error =>{
                console.error(error);
            })
        }

    // Login with google

    const handelGoogle = () =>{
        googleSignin()
        .then(result =>{
            console.log(result);
            //navigat after login
            navigate(location?.state ? location.state : '/');
        })
        .catch(error =>{
            console.error(error);
        })
    }
    return (
        <div>
            <div className="max-w-lg mx-auto">
                <div className="">
                    <h3 className="text-6xl text-black font-bold text-center py-8">Register</h3>
                    <p className="text-xl text-black font-semibold text-center">Create new account today.</p>
                </div>
                <form onSubmit={handelSignUp} className="card-body 2">

                    <input type="text" name="name" placeholder="Name" className="border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" required />

                    <input type="tex" name="image" placeholder="Image URL" className="border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" required />

                    <input type="email" name="email" placeholder="Email" className="border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" required />


                    <input type="password" name="password" placeholder="Password" className="border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" required />

                    <div className="form-control mt-6">

                        <button className="bg-black w-full text-white text-md font-bold px-4 py-2 rounded-md">Register</button>

                    </div>
                    <p className="text-md">Have an account? <Link to={"/login"} className="text-red-600 font-bold">Login</Link></p>
                    <hr className="mt-5 bg-red" />
                    <div className="mx-20 flex items-center justify-around">
                        <h3 className="text-black text-xl font-medium">Continue with :</h3>
                        <button onClick={handelGoogle} className=" border-2 border-red-600 text-black text-md font-bold px-4 py-2 rounded-md flex items-center justify-center">
                            <svg viewBox="0 0 48 48" className="w-5 mr-2">
                                <title>Google Logo</title>
                                <clipPath id="g">
                                    <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
                                </clipPath>
                                <g className="colors" clipPath="url(#g)">
                                    <path fill="#FBBC05" d="M0 37V11l17 13z" />
                                    <path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
                                    <path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
                                    <path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
                                </g>
                            </svg>
                            Google</button>

                    </div>
                </form>

            </div>
        </div>
    );
};

export default SignUp;