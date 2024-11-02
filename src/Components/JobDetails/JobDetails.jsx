import { useEffect, useState } from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { Link, useLoaderData, useParams } from "react-router-dom";
import JobContact from "../JobContact/JobContact";
import TItleBanner from "../TItleBanner/TItleBanner";
import { SaveJobapplication } from "../../Utils";


const JobDetails = () => {
    const { id } = useParams()
    console.log(id);
    const idint = parseInt(id)
    const data = useLoaderData()
    console.log(data);
    // const [details, setDetails] = useState([])
    const newAp = data.find(job => job.id === idint);
    // useEffect(() => {
    //     const newAp = data.find(job => job.id === idint);
    //     setDetails(newAp);
    // }, [])
    const { logo, job_title, job_responsibility, job_description, educational_requirements, experiences, company_name, location, salary, job_type, remote_or_onsite, category_name, contact_information } = newAp;
    console.log(contact_information.phone);

    const handleApplied = () => {
        SaveJobapplication(idint)
    }
    return (
        <div className="md:w-10/12 mx-auto w-full ">
            <div>
                <TItleBanner title={'JOb details'}></TItleBanner>
            </div>
            <div className=" flex my-7 flex-col justify-between">
                <div className="md:w-2/3 w-full space-y-6">
                    <p className="text-base"><span className="text-xl md:font-bold">Job Description:</span>{job_description}</p>
                    <p className="text-base"><span className="text-xl md:font-bold">Job Responsibility:</span>{job_responsibility}</p>
                    <div>
                        <h1 className="text-xl md:font-bold">Educational Requirements:</h1>
                        <p>{educational_requirements}</p>
                    </div>
                    <div>
                        <h1 className="text-xl md:font-bold">Experiences:</h1>
                        <p>{experiences}</p>
                    </div>
                </div>
                <div className="nd:w-1/3 w-full">
                    <div className="card bg-base-100  shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Job Details:</h2>
                            <div class="divider"></div>
                            <p className="flex items-center gap-2">Salary <AiOutlineDollarCircle /> {salary} per Month</p>
                            <h2 className="flex items-center"><FaCalendarAlt /> {job_title}</h2>

                            <h2 className="">Contact Information:</h2>
                            <div class="divider"></div>
                            <div>
                                {/* <JobContact contact={contact_information}></JobContact> */}
                                <p className="flex items-center gap-2"><span><FiPhone /></span>{contact_information.phone}</p>
                                <p className="flex items-center gap-2"><span><MdOutlineEmail /></span>{contact_information.email}</p>
                                <p className="flex items-center gap-2"><IoLocationOutline />{contact_information.address}</p>
                            </div>
                        </div>
                    </div>
                    {/* <Link to={`/applied/${id}`}> */}
                    <button onClick={handleApplied} className="w-full bg-gradient-to-l from-[#9873FF] to-[#7E90FE] py-4 rounded-lg text-2xl font-bold text-white">Apply Now</button>
                    {/* </Link> */}
                </div>
            </div >
        </div>
    );
};

export default JobDetails;