// eslint-disable-next-line
import react from "react";
import DataEN from "../Data/LanguageEN";
import { HiChevronDown, HiChevronUp, HiMenu } from 'react-icons/hi';

const Navbar = () => {

    const [ isOpen, setIsOpen ] = react.useState(false);
    const [ openDropdown, setOpenDropdown ] = react.useState(false);

    const Data = DataEN.Navbar;

    const className = {
        container: `w-screen font-Poppins absolute top-0 inset-x-0`,
        desktop: "w-full grid-cols-3 place-items-center gap-20 hidden xl:grid p-10",
        mobile: `w-full flex items-center justify-between xl:hidden relative p-10 ${ isOpen ? "h-auto" : "h-32"}`,
        box1: "flex items-center justify-end",
        brandLogo: "py-2 px-3 border border-gray-600 font-bold text-2xl rounded-md",
        box2: "flex items-center justify-center",
        navigations: "font-medium inline-flex items-center gap-10 list-none",
        box3: "flex items-center gap-10 font-medium",
        b: "w-full py-2 px-5 border border-black rounded-lg",
        b3: "flex items-center gap-3",
        mobileButton: "w-fit h-fit text-xl text-black",
        mobileMenu: `py-10 w-full absolute top-28 inset-x-0 grid grid-cols-2 place-items-center gap-5 transition-opacity duration-300 ${ isOpen ? "h-auto opacity-100 visible backdrop-blur-sm bg-gray-200/40" : "h-0 opacity-0 invisible backdrop-blur-none bg-transparent"}`,
        mobileNavigation: "font-medium list-none space-y-10 text-start",
        buttonBox: "w-fit h-auto p-5 space-y-5 flex flex-col items-start font-medium",
    };

    return (
        <div className={ className.container }>
            <div className={ className.desktop }>
                <div className={ className.box1 }>
                    <a href="#" className={ className.brandLogo }>M TRAVEL</a>
                </div>

                <div className={ className.box2 }>
                    <ul className={ className.navigations }>
                        { Data.menus.map((data, index) => {
                            return <li key={ index }>
                                <a href={ data.url }>{ data.title }</a>
                            </li>;
                        }) }
                    </ul>
                </div>

                <div className={ className.box3 }>
                    <button>
                        { Data.button.b1 }
                    </button>
                    <button className={ className.b }>
                        { Data.button.b2 }
                    </button>
                    <button onClick={() => setOpenDropdown(!openDropdown)} className={ className.b3 }>
                        { Data.button.b3 } { openDropdown ? <HiChevronUp /> : <HiChevronDown /> }
                    </button>
                </div>
            </div>

            <div className={ className.mobile }>
                <a href="#" className={ className.brandLogo }>M TRAVEL</a>
                <button onClick={() => setIsOpen(!isOpen)} className={className.mobileButton}>
                    <HiMenu />
                </button>

                <div className={className.mobileMenu}>
                    <ul className={className.mobileNavigation}>
                        { Data.menus.map((data, index) => {
                            return <li key={ index }>
                                <a href={ data.url }>{ data.title }</a>
                            </li>;
                        }) }
                    </ul>
                    
                    <div className={ className.buttonBox }>
                        <button className={ className.b }>
                            { Data.button.b1 }
                        </button>
                        <button className={ className.b }>
                            { Data.button.b2 }
                        </button>
                        <button onClick={ () => setOpenDropdown(!openDropdown) } className={ className.b3 }>
                            { Data.button.b3 } { openDropdown ? <HiChevronUp /> : <HiChevronDown /> }
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;
