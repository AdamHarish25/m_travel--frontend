import DataEN from "../Data/LanguageEN";
import Swirl from '../../Attachments/Image/Swirl.png';
import { FaLocationArrow } from 'react-icons/fa'

const Destinations = () => {

    const Data = DataEN.Destination

    const className = {
        container: "w-screen h-auto mt-32 p-10",
        title: "font-Volkhov font-bold text-4xl text-center",
        sectionTitle: "font-Poppins font-semibold text-sm text-gray-500",
        cardDeck: "w-full h-auto grid grid-cols-3 gap-10 place-items-center relative",
        cardBox: "w-full h-full p-7 xl:p-10",
        card: "w-full h-full rounded-3xl hover:shadow-xl shadow-md bg-white flex flex-col justify-center items-center gap-5 pb-10 group",
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

            <div className={className.cardDeck}>
                { Data.cards.map((data, index) => {
                    return (
                        <div key={ index } className={ className.cardBox }>
                            <div className={ className.card }>
                                <img src={ data.img } alt={ `A photo of ${ data.place }` } className={ className.img } />
                                
                                <div className={ className.description }>
                                    <h2 className={className.titleDescription}>
                                        <p className="group-hover:underline">
                                            { data.place }
                                        </p>
                                        <p>
                                            ${ data.price }
                                        </p>
                                    </h2>
                                    <h3 className={className.tripDuration}>
                                        <FaLocationArrow className="text-black"/> { data.tripDuration }
                                    </h3>
                                </div>
                            </div>
                        </div>
                    )
                }) }
                <img src={ Swirl } alt="A Swirling Background" className={ className.background } />
            </div>
        </div>
    )
};

export default Destinations