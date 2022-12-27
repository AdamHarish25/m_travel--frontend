import DataEN from "../Data/LanguageEN";
import TripBooking from '../../Attachments/Image/tripBooking.png';

const BookingTrip = () => {

    const Data = DataEN.TripBooking;

    const className = {
        container: "w-screen h-screen grid grid-cols-2 place-items-center gap-5 p-10",
        descriptionBox: "h-full w-full flex flex-col text-start items-center justify-center gap-4 px-0 lg:px-10",
        imgBox: "w-full h-full grid place-items-center",
        title: "font-Volkhov font-bold text-[#14183E] text-3xl xl:text-4xl",
        sectionTitle: "w-full text-start font-Poppins font-semibold text-[#5E6282] text-sm xl:text-base space-y-2",
        listBook: "space-y-5 list-none font-Poppins text-[#5E6282] w-full",
        list: "flex items-center gap-3 w-[450px] xl:w-[500px] text-xs xl:text-base",
        listTitle: "font-bold",
    };

    return (
        <div className={className.container}>
            <div className={className.descriptionBox}>
                <h1 className={className.sectionTitle}>
                    <p>
                        { Data.sectionTitle }
                    </p>
                    <p className={ className.title }>
                        { Data.title }
                    </p>
                </h1>

                <ul className={className.listBook}>
                    { Data.list.map((data, index) => {
                        return (
                            <li key={ index } className={className.list}>
                                <img src={ data.icon } alt={ data.title } />
                                <h1>
                                    <p className={className.listTitle}>
                                        { data.title }
                                    </p>
                                    { data.subtitle }
                                </h1>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div className={className.imgBox}>
                <img src={ TripBooking } alt="A Bunch of Booking Traveller Cards" />
            </div>
        </div>
    );
};

export default BookingTrip;
