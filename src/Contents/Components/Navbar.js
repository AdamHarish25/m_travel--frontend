import { useState } from "react";
import DataEN from "../Data/LanguageEN";
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

const Navbar = () => {

    const [ openDropdown, setOpenDropdown ] = useState(false);

    const Data = DataEN.Navbar;

    const className = {
        container: "w-screen p-10 font-Poppins",
        desktop: "w-full grid-cols-3 place-items-center gap-20 hidden xl:grid",
        tablet: "w-full",
        box1: "flex items-center justify-end",
        brandLogo: "py-2 px-3 border border-gray-600 font-bold text-2xl rounded-md",
        box2: "flex items-center justify-center",
        navigations: "font-medium inline-flex items-center gap-10 list-none",
        box3: "flex items-center gap-10 font-medium",
        b2: "py-2 px-5 border border-black rounded-lg",
        b3: "flex items-center gap-3",
    };

    return (
        <div className={ className.container }>
            <div className={ className.desktop }>
                <div className={ className.box1 }>
                    <h1 className={ className.brandLogo }>M TRAVEL</h1>
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
                    <button className={ className.b2 }>
                        { Data.button.b2 }
                    </button>
                    <button onClick={() => {setOpenDropdown(!openDropdown)}} className={ className.b3 }>
                        { Data.button.b3 } { openDropdown ? <HiChevronUp /> : <HiChevronDown /> }
                    </button>
                </div>
            </div>
                        
        </div>
    );
};

export default Navbar;
