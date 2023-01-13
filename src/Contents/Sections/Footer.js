import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import DataEN from "../Data/LanguageEN";

const Footer = () => {

    const Data = DataEN.Footer;

    const className = {
        container: "w-screen h-auto pt-28 px-10 p-0 lg:px-5 lg:py-10 xl:p-10 my-10 font-Poppins grid place-items-center space-y-20 border-t-2 lg:border-t-0 border-gray-400/40",
        innerContainer: "w-full h-auto grid grid-cols-1 lg:grid-cols-3 place-items-center gap-10 ",

        box1: "space-y-3 w-full flex flex-col items-center text-center lg:text-start",
        logo: "font-semibold text-4xl w-[250px]",
        subtitle: "w-[250px] font-medium text-[#919193] text-[13px]",

        box2: "flex items-center gap-20 lg:gap-0 justify-center lg:justify-between w-full",
        listContainer: "space-y-4",
        listTitle: 'font-bold text-lg',
        lists: "space-y-3 list-none text-gray-400 font-medium",

        box3: "space-y-5 w-full flex flex-col items-center text-center ",
        socmedButtons: "flex justify-evenly items-center gap-10 lg:gap-0 w-fit lg:w-full",
        socmedlink: "p-4 rounded-full shadow-lg block text-xl",
        appPromotion: "space-y-3",
        promotion: "font-medium text-gray-400 text-base lg:text-lg",
        appButtons: "inline-flex items-center gap-5",
        appbutton: "w-fit py-2 px-4 rounded-full bg-black text-white flex items-center gap-2",
        p1: "text-[9px]",
        p2: "font-extralight text-xs",
        icon: "text-base lg:text-xl",
        apptitle: "-space-y-1 flex flex-col justify-center",

        copyright: "text-gray-400 font-medium text-sm text-center"
    };

    return (
        <div className={ className.container }>
            <div className={ className.innerContainer }>
                <div className={ className.box1 }>
                    <h1 className={ className.logo }>
                        { Data.logo }
                    </h1>
                    <p className={ className.subtitle }>
                        { Data.subtitle }
                    </p>
                </div>
                <div className={ className.box2 }>
                    { Data.menus.map((data, index) => {
                        return <div className={ className.listContainer } key={ index }>
                            <h1 className={ className.listTitle }>
                                { data.title }
                            </h1>
                            <ul className={ className.lists }>
                                { data.list.map((data2, index) => {
                                    return <li key={ index }>
                                        <a href={ data2.link }>
                                            { data2.menu }
                                        </a>
                                    </li>;
                                }) }
                            </ul>
                        </div>;
                    }) }
                </div>
                <div className={ className.box3 }>
                    <ul className={className.socmedButtons}>
                        <li>
                            <a className={`${className.socmedlink} text-black`} href="https://facebook.com">
                                <FaFacebook/> 
                            </a>
                        </li>
                        <li>
                            <a className={`${className.socmedlink} text-white bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500`} href="https://instagram.com">
                                <FaInstagram />
                            </a>
                        </li>
                        <li>
                            <a className={`${className.socmedlink} text-black`} href="https://twitter.com">
                                <FaTwitter />
                            </a>
                        </li>
                    </ul>
                    <div className={ className.appPromotion }>
                        <h1 className={className.promotion}>
                            { Data.promotion }
                        </h1>
                        <div className={className.appButtons}>
                            { Data.downloadButton.map((data, index) => {
                                return <a href="" className={className.appbutton} key={index}>
                                    <p className={className.icon}>{ data.icon }</p> <h1 className={className.apptitle}>
                                        <strong className={className.p1}>{ data.p1 }</strong>
                                        <p className={ className.p2 }>
                                            { data.p2 }
                                        </p>
                                    </h1>
                                </a>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <p className={ className.copyright }>
                { Data.copyright }
            </p>
        </div>
    );
};

export default Footer;