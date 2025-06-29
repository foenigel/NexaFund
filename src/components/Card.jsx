import React from "react";

const Card = ({image, title, description, nexaHomeRef, year, category}) => {
        const viewHomeSection = () => {
        nexaHomeRef.current?.scrollIntoView({behavior: "smooth"});
    }
    return ( 
    <div className="relative bg-white w-full max-w-[430px] h-fit max-h-[500px] rounded-3xl shadow-lg shadow-customSkyBlueShadow overflow-hidden">
        <div className="w-full h-full bg-black max-h-[220px] overflow-hidden">
            <img src={image} loading="lazy" className="w-full h-auto object-cover hover:scale-110 transition ease-in-out duration-1000" alt={`${title} image`} />
        </div>
        <div className="w-full h-full px-4 py-6">
            <h3 className="font-Inter font-bold text-lg">{title ? title : "N/A"}</h3>
            <p className="font-Inter font-normal text-customLightGray text-sm max-w-[360px] mt-2">{description ? description : "N/A"}</p>
            <p className="font-Inter text-customSkyBlue underline mt-2 text-sm cursor-pointer" onClick={viewHomeSection}>{`${nexaHomeRef ? 'Learn More': ''}`}</p>
            <p className={`${category ? 'bg-customLighSkyBlue px-4 py-2 w-fit h-fit rounded-lg text-customSkyBlue font-semibold': ''}`}>{category ? category : ''}</p>
        </div>
    </div> );
}
 
export default Card;