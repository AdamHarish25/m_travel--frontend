import DataEN from '../Data/LanguageEN';
import { BsPlayFill } from 'react-icons/bs'

const Home = () => {


    const Data = DataEN.header

    const className = {
        container: "w-screen h-auto xl:h-screen bg-HomeBG bg-right-top bg-contain bg-no-repeat grid grid-cols-2 gap-5 font-Poppins place-items-stretch lg:place-items-center py-36 px-10",
        motto: "font-bold text-[#DF6951] text-base xl:text-lg",
        box1: "space-y-5 xl:space-y-8 flex flex-col justify-center items-start",
        box2: "p-0 xl:p-5",
        title: "w-auto font-Volkhov font-bold text-[#181E4B] text-5xl xl:text-6xl",
        underlinedWord: "w-[400px] h-auto bg-Underline bg-center-down-84 bg-no-repeat bg-contain",
        underline: "absolute inset-x-0 top-12 xl:top-16 w-full",
        paragraph: "font-medium text-gray-400 w-[30rem] text-sm xl:text-base",
        buttonBox: "grid grid-cols-2 gap-4",
        button: "w-fit py-3 px-4 rounded-xl bg-[#F1A501] text-white font-medium hover:shadow-lg transform duration-200",
        playButtonBox: "w-fit flex items-center gap-5 font-medium text-gray-500 group",
        playButton: "w-14 h-14 grid place-items-center text-xl text-white bg-[#DF6951] rounded-full group-hover:shadow-lg transform duration-200",
    }

    return (
        <div className={className.container}>
            <div className={ className.box1 }>
                <p className={ className.motto }>
                    { Data.motto }
                </p>

                <h1 className={className.title}>
                    { Data.title[ '1st' ] }, 
                    {" "}
                    <span className={className.underlinedWord}>
                        { Data.title[ '2nd' ] }
                    </span>
                    <br />
                    { Data.title[ '3rd' ] }
                    <br />
                    { Data.title[ '4th' ] }
                </h1>

                <p className={className.paragraph}>
                    { Data.paragraph }
                </p>

                <div className={className.buttonBox}>
                    <button className={className.button}>
                        { Data.button }
                    </button>
                    <button className={ className.playButtonBox }>
                        <div className={ className.playButton }>
                            <BsPlayFill/>
                        </div>
                        { Data.playButton }
                    </button>
                </div>

            </div>
            <div className={ className.box2 }>
                <img src={ Data.img } alt="A Happy Traveller" />
            </div>
        </div>
    )
};

export default Home;