import VerticalCarousel from "../Components/VerticalCarousel";
import DataEN from "../Data/LanguageEN";

const Testimonial = () => {
    const Data = DataEN.Testimonials
    const className = {
        container: "w-screen h-auto xl:h-screen grid grid-cols-1 xl:grid-cols-2 gap-5 p-10 xl:p-0",
        paragraphBox: "w-full h-full flex flex-col items-center xl:items-start justify-center gap-4 p-10 xl:p-20 text-center xl:text-start",
        carouselBox: "w-full h-full grid place-items-center 2xl:p-10",
        sectionTitle: "text-[#5E6282] font-Poppins text-sm font-semibold",
        title: "font-Volkhov text-[#14183E] font-medium text-5xl w-[400px]",
    };

    return (
        <div className={className.container}>
            <div className={className.paragraphBox}>
                <p className={className.sectionTitle}>
                    {Data.sectionTitle}
                </p>
                <h1 className={className.title}>
                    {Data.title}<span className="text-6xl">.</span>
                </h1>
            </div>
            <div className={className.carouselBox}>
                <VerticalCarousel data={ Data.carousel } />
            </div>
        </div>
    )
};


export default Testimonial