import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className=" min-h-[calc(100vh-70px)] bg-cover bg-center" style={{ backgroundImage: 'url(https://shorturl.at/afnAK)' }}>
                <div className="hero-overlay bg-black bg-opacity-50"></div>
                <div className="flex justify-between items-center max-w-7xl mx-auto">
                    <div className="md:w-3/6 mt-44 pl-4 text-center md:text-left">
                        
                        <h1 className="mb-5 text-5xl md:text-6xl lg:text-8xl text-white font-bold mt-5">Do it Today</h1>
                        <p><span className="bg-red-600 text-white text-xl md:text-2xl font-semibold px-4 py-2 inline-block mb-4">Create Your Future</span></p>
                        <Link to={'/dashboard'}><button className="bg-white bg-opacity-20 text-white text-lg font-bold px-5 py-3 rounded-md mr-5">Let’s Explore</button></Link>
                       
                    </div>
                    <div className="md:w-3/6"></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;