import React, { useState } from "react";
import PropTypes from "prop-types";
import {FaChevronDown as Next, FaChevronUp as Prev} from 'react-icons/fa'
import "./Carousel.css";

const VerticalCarousel = ({ data }) => {
    const [ currentIndex, setCurrentIndex ] = useState(0);

    const className = {
        carouselContainer: "flex gap-5 items-center justify-center xl:justify-start w-full",
        itemsContainer: "flex flex-col items-center",
        carouselItem: "p-0 m-0 transition-all w-full duration-700",
        card: {
            container: "w-[550px] 2xl:w-[600px] rounded-2xl shadow-xl space-y-7 font-Poppins text-black",
            footer: "flex flex-col gap-1",
        },
        buttonContainer: "w-fit h-full gap flex flex-col items-center justify-center gap-3",
        prevButtons: `w-10 h-10 rounded-full grid place-items-center shadow-md ${ currentIndex === 0 ? "text-gray-300" : "text-black" }`,
        nextButtons: `w-10 h-10 rounded-full grid place-items-center shadow-md ${ currentIndex === data.length - 1 ? "text-gray-300" : "text-black" }`
    };

    const handlePrevClick = () => {
        setCurrentIndex(currentIndex - 1);
    };

    const handleNextClick = () => {
        setCurrentIndex(currentIndex + 1);
    };

    


    return (
        <div className={className.carouselContainer}>
            <div className={className.itemsContainer}>
                { data.map((item, index) => {
                    const isCurrent = index === currentIndex;
                    return (
                        <div
                            key={ index }
                            className={ `${ className.carouselItem } ${ isCurrent ? "opacity-100 visible" : "opacity-0 invisible" }` }
                            style={ { transform: `translateY(-${currentIndex}%)` }}
                        >
                            <div className={`${className.card.container} ${isCurrent ? "h-fit p-12 opacity-100" : "h-0 p-0 opacity-0"}`}>
                                <p>
                                    {
                                        item.comment
                                    }
                                </p>

                                <p className={className.card.footer}>
                                    <strong>
                                        {item.user}
                                    </strong>
                                    {item.location}
                                </p>
                            </div>
                        </div>
                    );
                }) }
            </div>
            <div className={className.buttonContainer}>
                <button onClick={ handlePrevClick } className={className.prevButtons} disabled={ currentIndex === 0 }>
                    <Prev />
                </button>
                <button onClick={ handleNextClick } className={className.nextButtons} disabled={ currentIndex === data.length - 1 }>
                    <Next />
                </button>
            </div>
        </div>
    );
};

VerticalCarousel.propTypes = {
    data: PropTypes.array.isRequired,
};


export default VerticalCarousel;