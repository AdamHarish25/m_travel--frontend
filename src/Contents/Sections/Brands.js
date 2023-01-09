import DataEN from "../Data/LanguageEN";

const Brands = () => {
    const data = DataEN.Brands;

    const className = {
        container: "h-auto w-screen p-10 mb-20 flex items-center justify-evenly",
        card: "w-auto h-auto p-5 hover:shadow-lg group transition-shadow duration-500 rounded-xl",
        img: "grayscale group-hover:grayscale-0 transform duration-500",
    };

    return (
        <div className={className.container}>
            { data.map((data, index) => {
                return (
                    <div className={ className.card } key={ index }>
                        <img src={ data.src } alt={ data.alt } className={ className.img } title={ data.alt } />
                    </div>
                )
            })}
        </div>
    )
};

export default Brands