import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Jobbs from '../Jobbs/Jobbs';
const Home = () => {
    // const data = useLoaderData()
    // console.log(data);
    // const [carrers, setCarrers] = useState([])
    // const [show, setShow] = useState(4)
    // useEffect(() => {
    //     // fetch('jobs.json')
    //     //     .then(res => res.json())
    //     //     .then(data => setCarrers(data))
    //     setCarrers(data)
    // }, [])

    // console.log(carrers);
    // const handleAllShow = () => {
    //     setShow(carrers.length)
    // }
    return (
        <div>
            <div className='md:w-10/12 mx-auto w-full'>
                <Banner></Banner>
                <div>
                    <Categories></Categories>
                </div>
                <Jobbs></Jobbs>
                {/* <div className='grid md:grid-cols-2 gap-4'>
                    {
                        show === 4 ? carrers.slice(0, show).map(career => <Jobs carrer={career} handleAllShow={handleAllShow}></Jobs>) :
                            carrers.map(career => <Jobs carrer={career} handleAllShow={handleAllShow}></Jobs>)
                    }
                </div> */}
                {/* <div className='flex items-center justify-center my-5'>
                    <button onClick={() => handleAllShow()} className='btn bg-gradient-to-r text-xl text-white from-[#9873FF] to-[#9873FF]'>See All Jobs</button>
                </div> */}
            </div>
        </div>
    );
};

export default Home;