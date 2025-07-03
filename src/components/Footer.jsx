import React from "react";
import FooterInfo from "./js/FooterInfo";
import Icons from "./Icons";

const Footer = ({viewHomeSection}) => {
    return ( <div className="relative bg-white mt-20 col-span-12 grid grid-cols-2 h-auto place-items-start gap-6 px-4 border-t-2 border-customSkyBlueShadow pt-8 mb-8 md:grid-cols-4 md:px-0 md:mb-28">
        {
            FooterInfo.map(({title, links}, index) => (
                <div className="relative flex flex-col gap-1 w-full h-full justify-start px-0 md:px-20">
                    <h2 key={index} className="text-black w-full font-Inter font-semibold text-md mb-1 px-4">{title}</h2>
                    <div className="relative flex flex-col w-full gap-2 items-start md:items-start">
                    {
                        links.map((link, index) => (
                            <div className="flex gap-2 items-center cursor-pointer">
                                <div className="text-customSkyBlue">{Icons.arrowRight}</div>
                                <p key={index} className="text-black font-Inter font-normal transition-all duration-300 text-sm hover:text-customSkyBlue" onClick={viewHomeSection}>{link}</p>
                            </div>
                        ))
                    }
                    </div>
                </div>
            ))
        }
        
    </div> );
}
 
export default Footer;