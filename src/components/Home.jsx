import React, { useRef, useState } from "react";
import NavigationBar from "./navigationBar";
import HomeFigures from "./js/HomeFigures";
import bitCoinHeroImage from '../assets/images/bitCoinHeroImage.png';
import investmentIcon from '../assets/images/investmentIcon.svg';
import blockChainIcon from '../assets/images/blockChainIcon.svg';
import NexaServices from "./js/NexaServices";
import Card from "./Card";
import blockChainCompanies from "./js/blockChainCompanies";

const Home = () => {
    const nexaOffersRef = useRef(null);
    const nexaHomeRef = useRef(null);
    const [isSelected, setIsSelected] = useState(0);
    const categories = [...new Set(blockChainCompanies.map(item => item.category))];
    const [togglefilter, setToggleFilter] = useState(() => {
    const firstCategory = categories[0];
    return blockChainCompanies.filter(company => company.category === firstCategory);
});

    const selectedCompany = (index, item) => {
        setIsSelected(index);
        const filterByCategory = blockChainCompanies.filter(company => company.category === item);
        setToggleFilter(filterByCategory);
    }

    return ( <div className="relative flex flex-col items-center w-full h-auto">
       <main className="relative w-full min-h-screen z-10 flex justify-center">
             <div ref={nexaHomeRef} className="relative grid grid-cols-12 gap-x-5 w-full h-auto md:w-[90%]">
                 <NavigationBar nexaHomeRef={nexaHomeRef}/>
                <div className="col-span-12 grid grid-cols-12 w-full bg-white/70 backdrop-blur-3xl">
                    <section className="relative col-span-12 md:col-span-7 w-full px-4 mt-28">
                        <p className="text-black font-Inter font-normal mb-2 text-lg md:text-xl">Smart Investment Strategies on the Blockchain</p>
                        <h1 className="font-Amiri font-bold text-black text-5xl max-w-[600px] break-words md:text-6xl">Empowering the <span className="text-customSkyBlue">Future</span> of Decentralized Finance</h1>
                        <p className="text-customLightGray text-lg font-Inter font-normal max-w-[600px] leading-snug md:text-xl md:pr-16">NexaFund is a next-gen DeFi fund leveraging blockchain innovation and AI-powered analytics to maximize returns for investors globally.</p>
                        <div className="flex flex-col gap-4 mt-4 md:flex-row">
                            <button className="blue-button text-lg">Explore Our Portfolio</button>
                            <button className="grayOutline-button text-lg">Get in Touch</button>
                        </div>
                    </section>
                    <section className="col-span-12 md:col-span-5 w-full mt-10 px-4 items-center md:mt-28">
                        <div className="bg-white shadow-lg shadow-customSkyBlueShadow/80 p-6 rounded-3xl">
                            <img src={bitCoinHeroImage} loading="lazy" className="rounded-3xl w-full" alt="bitCoinHeroImage" />
                        </div>
                        <div className="flex justify-between px-2 mt-8 md:gap-0">
                            <div className="flex gap-2 sm:gap-4">
                                <img src={blockChainIcon} alt="" />
                                <div className="flex flex-col items-start">
                                    <h3 className="font-bold font-Inter text-lg">55+ Funded</h3>
                                    <p className="font-normal font-Inter text-sm">Blockchain Projects</p>
                                </div>
                            </div>
                            <div className="flex gap-2 sm:gap-4">
                                <img src={investmentIcon} alt="" />
                                <div className="flex flex-col items-start">
                                    <h3 className="font-bold font-Inter text-lg">+30.2%</h3>
                                    <p className="font-normal font-Inter text-sm">Investment Growth</p>
                                </div>
                            </div>
                        </div>
                        
                    </section>
                </div>

                <section className="col-span-12 gap-4 grid grid-cols-2 place-items-center md:grid-cols-4 w-full mt-12 px-4 md:col-span-10 md:gap-0 md:place-items-start">
                    {
                        HomeFigures.map(({figure, description}, index)=>(
                            <div key={index} className="flex items-center flex-col md:items-start">
                                <h1 className="text-5xl font-bold font-Amiri md:text-6xl">{figure ? figure : "N/A"}</h1>
                                <p className="text-md font-normal text-center font-Inter text-customLightGray">{description ? description : "N/A"}</p>
                            </div>
                        ))
                    }
                </section>

                <section ref={nexaOffersRef} className="col-span-12 place-items-center mt-32">
                    <div className="flex flex-col gap-2 items-center w-full px-4">
                        <h2 className="text-black font-bold text-center font-Amiri text-4xl">What Nexa Fund Offers?</h2>
                        <p className="text-customLightGray text-center font-normal font-Inter text-md w-full max-w-full md:max-w-[850px]">At NexaFund, we're building a decentralized financial future. By combining blockchain security, automated strategies, and transparent, community-driven governance, we offer curated crypto portfolios in a sustainable, investor-first ecosystem.</p>
                    </div>

                    <div className="grid grid-cols-1 place-items-center w-full h-auto mt-10 mb-10 px-4 gap-8 md:grid-cols-3 md:gap-0">
                        {
                            NexaServices.map((serviceDetails, index)=>(
                                <Card key={index} {...serviceDetails} nexaHomeRef={nexaHomeRef}/>
                            ))
                        }
                    </div>
                </section>

                <section className="col-span-12 place-items-center mt-32">
                    <div className="flex flex-col gap-2 w-full items-center px-4">
                        <h2 className="font-Amiri font-bold text-4xl text-black">Shaping the Future of Web3 Finance</h2>
                        <p className="font-Inter text-customLightGray text-md">Explore how NexaFund's strategic investments empower blockchain innovation across sectors.</p>
                    </div>
                    <div className="flex flex-wrap gap-8 px-4 justify-evenly items-center w-full max-w-[800px] mt-8 mb-10 md:gap-0">
                        {
                            categories.map((item, index) =>(
                                <h4 key={index} className={`font-Inter font-semibold text-md cursor-pointer ${isSelected === index ? 'bg-customSkyBlue text-white px-6 py-2 rounded-full transition duration-300': 'text-black'}`} onClick={()=>selectedCompany(index, item)}>{item ? item : "N/A"}</h4>
                            ))
                        }
                    </div>

                    <div className="flex flex-col gap-4 w-full items-center justify-center px-4 md:flex-row">
                    {
                        togglefilter.map((companyDetail, index) => (
                            <Card key={index} {...companyDetail} />
                        ))
                    }
                    </div>
                </section>
            </div>
        </main>
    </div> );
}
 
export default Home;