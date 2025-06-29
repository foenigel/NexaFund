import React, { useState } from "react";
import nexaFundLogo from '../assets/images/nexaLogo.svg';
import Hamburger from "hamburger-react";
import NavigationLinkNames from "./js/NavigationLinkNames";
import Icons from "./Icons";

const NavigationBar = ({nexaHomeRef}) => {
    const [isOpen, setIsOpen] = useState(false);
    const viewHomeSection = () => {
        nexaHomeRef.current?.scrollIntoView({behavior: "smooth"});
    }
    return ( 
    <div className="col-span-12 w-full fixed z-50 bg-white md:w-[90%]">
        <div className="px-4 h-[100px] w-full flex justify-between items-center font-Inter ">
            <div className="flex gap-4 items-center">
            <img src={nexaFundLogo} className="w-12 h-12" alt="" />
            <h2 className="text-black text-2xl font-semibold">Nexa Fund</h2>
            </div>

            <div className="hidden md:block">
                <ul className="flex gap-4 text-lg">
                    { 
                        NavigationLinkNames.map(({title}, index) => (
                            <li key={index} className="cursor-pointer hover:text-customSkyBlue">{title}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="block md:hidden">
                <Hamburger toggled={isOpen} toggle={setIsOpen}/>
            </div>
        </div>
        {
            isOpen && <div className="bg-white min-h-[300px] w-full z-20 shadow-lg shadow-customSkyBlueShadow/50">
                
                <ul className="flex flex-col items-center justify-center gap-8 text-lg text-black z-20 px-10">
                    { 
                        NavigationLinkNames.map(({title}, index) => (
                            <div className="flex justify-between w-full cursor-pointer hover:text-customSkyBlue" onClick={viewHomeSection}>
                                <li key={index}>{title}</li>
                                <p>{Icons.arrowRight}</p>
                            </div>
                        ))
                    }  
                </ul>
                </div>
        }
        

    </div> );
}
 
export default NavigationBar;