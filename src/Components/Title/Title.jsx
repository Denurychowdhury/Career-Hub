

const Title = (title, paragraph) => {
    return (
        <div>
            <h1 className="text-2xl font-bold">{title}</h1>
            <p>{paragraph}</p>
        </div>
    );
};

export default Title;