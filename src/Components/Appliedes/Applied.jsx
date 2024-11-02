import { useEffect, useState } from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";
import { getAppliedjobs } from "../../Utils";
import TItleBanner from "../TItleBanner/TItleBanner";


const Applied = () => {
    const data = useLoaderData()
    console.log(data);
    const [applied, setApplied] = useState([]);
    const [display, setDisplay] = useState([])

    const handleJobfilter = filter => {
        if (filter === 'All') {
            setDisplay(applied)
        }
        else if (filter === 'remote') {
            const remotejbs = applied.filter(job => job.remote_or_onsite === 'Remote')
            setDisplay(remotejbs)
            console.log(remotejbs);
        }
        else if (filter === 'onsite') {
            const onsitejob = applied.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplay(onsitejob);
        }
    }

    useEffect(() => {
        const storedJobs = getAppliedjobs()
        if (data.length > 0) {
            const newarray = []
            for (const id of storedJobs) {
                const job = data.find(job => job.id === id)
                console.log(job);
                if (job) {
                    newarray.push(job)
                }
                setApplied(newarray)
                setDisplay(newarray)
            }
        }
    }, [data])

    console.log(applied);
    return (
        <div className="md:w-11/12 w-full mx-auto">
            <TItleBanner title={'Applied jobs'}></TItleBanner>
            <h2 className="text-2xl">Jobs I applied: {applied.length}</h2>
            <details className="dropdown">
                <summary className="btn m-1">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobfilter('All')}><a>All</a></li>
                    <li onClick={() => handleJobfilter('remote')}><a>remote</a></li>
                    <li onClick={() => handleJobfilter('onsite')}><a>onsite</a></li>
                </ul>
            </details>
            <div className="">
                {
                    display.map(job =>
                        <div className="my-10" key={job.id}>
                            <div className="flex md:flex-row flex-col justify-between">
                                <div className="bg-gray-200 w-40 rounded-lg">
                                    <img
                                        className="w-full"
                                        src={job.logo}
                                        alt="Shoes" />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <h2 className="card-title">{job.job_title}</h2>
                                        <p>{job.company_name}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <button className=" md:px-10 px-3 py-2 rounded-lg border border-purple-400 text-2xl text-purple-500">{job.remote_or_onsite}</button>
                                        <button className=" md:px-10 px-3 py-2 rounded-lg border border-purple-400 text-2xl text-purple-500">{job.job_type}</button>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="flex items-center gap-2"><IoLocationOutline />{job.location}</p>
                                        <p className="flex items-center gap-2"><AiOutlineDollarCircle /> {job.salary}</p>
                                    </div>
                                </div>
                                <div>
                                    <Link to={`details/${job.id}`}>
                                        <button className='btn bg-gradient-to-r text-xl text-white from-[#9873FF] to-[#9873FF]'>
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Applied;