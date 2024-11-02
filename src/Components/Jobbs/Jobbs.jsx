import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Jobs from "../Jobs/Jobs";

const Jobbs = () => {

    const data = useLoaderData()
    const [carrers, setCarrers] = useState([])
    const [show, setShow] = useState(4);
    useEffect(() => {
        // // fetch('jobs.json')
        // //     .then(res => res.json())
        // //     .then(data => setCarrers(data))
        // if (id) {
        //     const filterbycategory = [...data].filter(job => job.id == id)
        //     setCarrers(filterbycategory)
        //     console.log('tomuk');
        //     console.log(filterbycategory);
        // }
        // else {
        //     setCarrers(data)
        // }
        setCarrers(data)
    }, [])

    console.log(carrers);
    const handleAllShow = () => {
        setShow(carrers.length)
    }
    return (
        <div className='grid md:grid-cols-2 gap-4'>
            {
                show === 4 ? carrers.slice(0, show).map(career => <Jobs key={career.id} carrer={career} handleAllShow={handleAllShow}></Jobs>) :
                    carrers.map(career => <Jobs key={career.id} carrer={career} handleAllShow={handleAllShow}></Jobs>)
            }
            {/* {
                carrers.map(career => <Jobs carrer={career}></Jobs>)
            } */}
            <div className='flex items-center justify-center my-5'>
                <button onClick={() => handleAllShow()} className='btn bg-gradient-to-r text-xl text-white from-[#9873FF] to-[#9873FF]'>See All Jobs</button>
            </div>
        </div>
    );
};

export default Jobbs;