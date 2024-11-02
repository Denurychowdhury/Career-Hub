import { useEffect, useState } from "react";
import Category from "../Category/Category";


const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('./categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    // console.log(categories);
    return (
        <div className="md:my-10 my-4 md:w-10/12 mx-auto w-full">
            <div className="text-center my-4">
                <h1 className="text-2xl font-bold">Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 ">
                {
                    categories.map((category => <Category key={category.id} category={category}></Category>))
                }
            </div>
        </div>
    );
};

export default Categories;