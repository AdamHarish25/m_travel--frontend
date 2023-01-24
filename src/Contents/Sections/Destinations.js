/* eslint-disable */

import DataEN from "../Data/LanguageEN";
import { FaLocationArrow } from 'react-icons/fa'
import HorizontalCarousel from "../Components/HorizontalCarousel/HorizontalCarousel";

const Destinations = () => {

    const Data = DataEN.Destination

    const className = {
        container: "w-screen h-auto mt-32 p-10 space-y-10",
        title: "font-Volkhov font-bold text-4xl text-center",
        sectionTitle: "font-Poppins font-semibold text-sm text-gray-500",
        cardOuterBox: "flex items-center justify-center",
        cardBox: "w-full h-full p-0 xl:p-9",
        card: "w-full h-full rounded-3xl hover:shadow-2xl shadow-md bg-white flex flex-col justify-center items-center gap-5 pb-10 group transform duration-300 cursor-pointer",
        background: "absolute right-0 bottom-10 -z-30",
        img: "h-full w-full rounded-t-3xl",
        description: "w-full h-auto px-6 xl:px-10 font-Poppins space-y-5 text-sm xl:text-base",
        titleDescription: "w-full flex items-center justify-between text-gray-500 font-medium",
        tripDuration: "flex items-center gap-4 text-gray-500",
    }

    return (
        <div className={ className.container }>
            <h1 className={className.title}>
                <p className={className.sectionTitle}>
                    {Data.sectionTitle}
                </p>
                { Data.title }
            </h1>

            <HorizontalCarousel show={3}>
                { Data.cards.map(({img, place, price, tripDuration}, index) => {
                    return (
                        <div key={ index } className={className.cardOuterBox}>
                            <div className={ className.cardBox }>
                                <div className={ className.card }>
                                    <img src={ img } alt={ `A photo of ${ place }` } className={ className.img } />

                                    <div className={ className.description }>
                                        <h2 className={ className.titleDescription }>
                                            <p className="group-hover:underline">
                                                { place }
                                            </p>
                                            <p>
                                                ${ price }
                                            </p>
                                        </h2>
                                        <h3 className={ className.tripDuration }>
                                            <FaLocationArrow className="text-black" /> { tripDuration }
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }) }
            </HorizontalCarousel>
        </div>
    )
};

export default Destinations