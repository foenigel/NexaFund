import React, { useState } from "react";
import nexaFundLogo from '../assets/images/nexaLogo.svg';
import Hamburger from "hamburger-react";
import NavigationLinkNames from "./js/NavigationLinkNames";
import Icons from "./Icons";
import { motion } from "framer-motion";

const NavigationBar = ({viewSections}) => {
    const [isOpen, setIsOpen] = useState(false);
    return ( 
    <div className="col-span-12 w-full fixed z-50 md:w-[95%]">
        <div className="px-4 h-[100px] bg-white w-full flex justify-between items-center font-Inter ">
            <div className="flex gap-4 items-center">
            <img src={nexaFundLogo} className="w-12 h-12" alt="" />
            <h2 className="text-black text-2xl font-semibold">Nexa Fund</h2>
            </div>

            <div className="hidden md:block">
                <ul className="flex gap-4 text-lg">
                    { 
                        NavigationLinkNames.map(({title}, index) => (
                            <li key={index} className="cursor-pointer transition-all duration-300 hover:text-customSkyBlue" onClick={() => viewSections(title)}>{title}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="block md:hidden">
                <Hamburger toggled={isOpen} toggle={setIsOpen}/>
            </div>
        </div>
        {
            isOpen && <motion.div initial={{opacity:0, y:-200}} animate={{opacity:1, y:0}} transition={{duration:0.3, ease:"easeInOut"}} className="bg-white min-h-[260px] w-full z-20 shadow-lg shadow-customSkyBlueShadow/50">
                
                <ul className="flex flex-col items-center justify-center gap-8 text-lg text-black z-20 px-10">
                    { 
                        NavigationLinkNames.map(({title}, index) => (
                            <div className="flex justify-between w-full cursor-pointer hover:text-customSkyBlue" onClick={()=>{viewSections(title); setIsOpen(false);}}>
                                <li key={index}>{title}</li>
                                <p>{Icons.arrowRight}</p>
                            </div>
                        ))
                    }  
                </ul>
                </motion.div>
        }
        

    </div> );
}
 
export default NavigationBar;