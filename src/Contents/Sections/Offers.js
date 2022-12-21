import pluses from '../../Attachments/Image/pluses.png';
import DataEN from '../Data/LanguageEN';

const Offers = () => {

    const Data = DataEN.Offers;

    const className = {
        container: "w-screen h-auto xl:h-screen mt-40 p-10 relative",
        title: "font-Volkhov font-bold text-4xl text-center",
        sectionTitle: "font-Poppins font-semibold text-sm text-gray-500",
        plusesImg: "absolute right-16 top-10",
        cardDeck: "w-full h-auto grid grid-cols-2 gap-10 xl:grid-cols-4 xl:gap-5 place-items-center",
        cardBox: "p-10 w-full h-full relative group",
        card: "h-full w-full rounded-xl group-hover:shadow-xl shadow-none bg-white flex flex-col gap-5 items-center justify-center text-center p-10",
        hoverImg: "absolute left-0 bottom-0 group-hover:visible invisible group-hover:opacity-100 opacity-0 transform duration-200 -z-20",
        cardTitle: "font-OpenSans font-semibold text-[#1E1D4C] text-lg",
        cardSubtitle: "font-Poppins text-[#5E6282] font-medium text-sm 2xl:text-base",
    };

    return (
        <div className={ className.container }>
            <img src={ pluses } alt="A ton of pluses in a vector background" className={ className.plusesImg } />
            <h1 className={ className.title }>
                <p className={ className.sectionTitle }>
                    { Data.sectionTitle }
                </p>
                { Data.title }
            </h1>

            <div className={ className.cardDeck }>
                {
                    Data.cards.map(({ img, rectangle, subtitle, title }, index) => {
                        return (
                            <div key={ index } className={ className.cardBox }>
                                <div className={ className.card }>
                                    <img draggable={ false } src={ img } alt={ title } />
                                    <h1 className={ className.cardTitle }>
                                        { title }
                                    </h1>
                                    <p className={ className.cardSubtitle }>
                                        { subtitle }
                                    </p>
                                </div>
                                <img src={ rectangle } alt="Rectangle hover visible only" className={ className.hoverImg } />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Offers;