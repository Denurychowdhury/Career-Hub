import user from '../../assets/user.png';
import Categories from '../Categories/Categories';
const Home = () => {
    return (
        <div className='md:w-10/12 mx-auto w-full'>
            <div className="hero bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                    <img
                        src={user}
                        className="max-w-sm rounded-lg shadow-2xl md:w-1/2 w-full" />
                    <div className="md:w-1/2 w-full">
                        <h1 className="text-5xl font-bold">One Step Closer To Your
                            <br />
                            <span className='text-4xl font-bold bg-gradient-to-r from-[#9873FF] to-[#9873FF] text-transparent bg-clip-text'>Dream Job</span>
                        </h1>
                        <p className="py-6">
                            Explore thousands of job opportunities with all the information you need. Its your future.
                            Come find it. Manage all your job application from start to finish.
                        </p>
                        <button className="btn bg-gradient-to-r text-xl text-white from-[#9873FF] to-[#9873FF]">Get Started</button>
                    </div>
                </div>
            </div>
            <div>
                <Categories></Categories>
            </div>
        </div>
    );
};

export default Home;