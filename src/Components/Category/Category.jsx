import { Link } from "react-router-dom";


const Category = ({ category }) => {
    // console.log(category);
    const { id, category_name, logo, availability } = category;
    return (
        <div className="">
            <div className="bg-[#f9f8ff] pl-5 py-5 space-y-3 rounded-xl">
                {/* <Link to={`jobbs/${id}`}> */}
                <img className="bg-[#efecff] p-3 rounded-xl" src={logo} alt="" />
                <h1 className="text-xl font-bold">{category_name}</h1>
                <p>{availability}</p>
                {/* </Link> */}
            </div>
        </div>
    );
};

export default Category;