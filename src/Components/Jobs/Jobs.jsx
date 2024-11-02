import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Jobs = ({ carrer }) => {
    // console.log(carrer);
    const { id, logo, job_title, company_name, location, salary, job_type, remote_or_onsite, category_name } = carrer;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <div>
                    <img
                        src={logo}
                        alt="Shoes" />
                </div>
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className="flex justify-between">
                    <button className=" md:px-10 px-3 py-2 rounded-lg border border-purple-400 text-2xl text-purple-500">{remote_or_onsite}</button>
                    <button className=" md:px-10 px-3 py-2 rounded-lg border border-purple-400 text-2xl text-purple-500">{job_type}</button>
                </div>
                <div className="flex justify-between">
                    <p className="flex items-center gap-2"><IoLocationOutline />{location}</p>
                    <p className="flex items-center gap-2"><AiOutlineDollarCircle /> {salary}</p>
                </div>
                <div className="card-actions">
                    <Link to={`details/${id}`}>
                        <button className='btn bg-gradient-to-r text-xl text-white from-[#9873FF] to-[#9873FF]'>
                            View Details
                        </button></Link>
                </div>
            </div>
        </div>
    );
};

export default Jobs;