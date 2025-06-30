import React, { useRef, useState } from "react";
import NavigationBar from "./NavigationBar";
import HomeFigures from "./js/HomeFigures";
import bitCoinHeroImage from '../assets/images/bitCoinHeroImage.png';
import investmentIcon from '../assets/images/investmentIcon.svg';
import blockChainIcon from '../assets/images/blockChainIcon.svg';
import NexaServices from "./js/NexaServices";
import Card from "./Card";
import blockChainCompanies from "./js/blockChainCompanies";
import Footer from "./footer";
import Icons from "./Icons";
import SocialMediaIcons from "./js/socialMediaIcons";
import { div } from "framer-motion/client";

const Home = () => {
    const nexaOverviewRef = useRef(null);
    const nexaHomeRef = useRef(null);
    const nexaPortfolioRef = useRef(null);
    const nexaContactRef = useRef(null);
    const [isSelected, setIsSelected] = useState(0);
    const categories = [...new Set(blockChainCompanies.map(item => item.category))];
    const [togglefilter, setToggleFilter] = useState(() => {
    const firstCategory = categories[0];
    return blockChainCompanies.filter(company => company.category === firstCategory);
});

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState('');

    const refs = {
        Home: nexaHomeRef,
        Overview: nexaOverviewRef,
        Portfolio: nexaPortfolioRef,
        Contact: nexaContactRef,
    }

    const viewHomeSection = (refs) => {
        refs.current?.scrollIntoView({behavior: "smooth"});
    }

    const selectedCompany = (index, item) => {
        setIsSelected(index);
        const filterByCategory = blockChainCompanies.filter(company => company.category === item);
        setToggleFilter(filterByCategory);
    }

    const submitForm = (e) => {
        e.preventDefault();
        const throwError = {};

        if (!name.trim()){
            throwError.name = 'Name is required';
        }

        if (!subject.trim()){
            throwError.subject = 'Subject is required';
        }

        if (!message.trim()){
            throwError.message = 'You forgot to add a message';
        }

        if (!email){
            throwError.email = 'Email is required';
        }
        else if (!/\S+@\S+\.\S+/.test(email)) {
            throwError.email = 'Email is invalid.';
        }

        setErrors(throwError);

        if (Object.keys(throwError).length === 0){
            alert("form successfully submitted!");
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        }
        viewHomeSection(refs["Home"]);
        
    }

    return ( <div className="relative flex flex-col items-center w-full h-auto">
       <main className="relative w-full min-h-screen z-10 flex justify-center">
             <div ref={nexaHomeRef} className="relative grid grid-cols-12 gap-x-5 w-full h-auto md:w-[95%]">
                 <NavigationBar sectionRefs={refs}/>
                <div className="col-span-12 grid grid-cols-12 w-full bg-white/70 backdrop-blur-3xl">
                    <section className="relative col-span-12 md:col-span-7 w-full px-4 pt-28">
                        <p className="text-black font-Inter font-normal mb-2 text-lg md:text-xl">Smart Investment Strategies on the Blockchain</p>
                        <h1 className="font-Amiri font-bold text-black text-5xl max-w-[600px] break-words md:text-6xl">Empowering the <span className="text-customSkyBlue">Future</span> of Decentralized Finance</h1>
                        <p className="text-customLightGray text-lg font-Inter font-normal max-w-[600px] leading-snug md:text-xl md:pr-16">NexaFund is a next-gen DeFi fund leveraging blockchain innovation and AI-powered analytics to maximize returns for investors globally.</p>
                        <div className="flex flex-col gap-4 mt-4 md:flex-row">
                            <button className="blue-button text-lg">Explore Our Portfolio</button>
                            <button className="grayOutline-button text-lg">Get in Touch</button>
                        </div>
                        <div className="relative col-span-12 grid grid-cols-2 gap-4 place-items-center w-full mt-10 px-4 md:grid-cols-4 md:col-span-7 md:place-items-stretch md:mt-12">
                            {
                                HomeFigures.map(({figure, description}, index)=>(
                                    <div key={index} className="relative w-full flex items-center flex-col md:items-start">
                                        <h1 className="text-5xl font-bold font-Amiri md:text-4xl">{figure ? figure : "N/A"}</h1>
                                        <p className="text-sm font-normal text-center font-Inter text-customLightGray md:text-left">{description ? description : "N/A"}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </section>
                    <section className="col-span-12 md:col-span-5 w-full px-4 items-center pt-10 md:pt-28">
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

                

                <section ref={nexaOverviewRef} className="col-span-12 place-items-center pt-28">
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

                <section ref={nexaPortfolioRef} className="col-span-12 place-items-center pt-28">
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
                <section ref={nexaContactRef} className="col-span-12 place-items-center pt-28 px-4">
                    <h2 className="font-Amiri font-bold text-4xl text-black">Let's Build the Future Together</h2>
                    <p className="font-Inter text-customLightGray text-md">Have a project or idea? We'd love to hear from you. Reach out to our team to discuss potential investments or partnerships.</p>
                    <form onSubmit={submitForm} className="relative mt-10 items-center grid grid-cols-1 gap-6 w-full max-w-[1050px] h-[620px] rounded-3xl md:grid-cols-12">
                        <div className="bg-gray-100 h-full col-span-12 p-8 rounded-3xl md:col-span-7">
                            <h2 className="text-black font-Amiri text-4xl font-bold">Send Us a Message</h2>
                            <div className="flex flex-col justify-between gap-8 mt-6 md:flex-row">
                                <div className="flex flex-col flex-1 gap-2">
                                    <label htmlFor="" className="font-Inter">Your Name</label>
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="bg-white rounded-lg border-[1px] border-customGrayBorder px-3 py-2" placeholder="John Doe" />
                                    {
                                        errors.name && <p className="text-red-500 text-xs">{errors.name}</p>
                                    }
                                </div>
                                <div className="flex flex-1 flex-col gap-2">
                                    <label htmlFor="" className="font-Inter">Your Email</label>
                                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-white rounded-lg border-[1px] border-customGrayBorder px-3 py-2" placeholder="John@example.com" />
                                    {
                                        errors.email && <p className="text-red-500 text-xs">{errors.email}</p>
                                    }
                                </div>
                            </div>
                            <div className="flex flex-col flex-1 gap-2 mt-6">
                                <label htmlFor="" className="font-Inter">Subject</label>
                                <input value={subject} onChange={(e) => setSubject(e.target.value)} className="bg-white rounded-lg border-[1px] border-customGrayBorder px-3 py-2" type="text" placeholder="How can we help you?" />
                                    {
                                        errors.subject && <p className="text-red-500 text-xs">{errors.subject}</p>
                                    }
                            </div>
                            <div className="flex flex-col flex-1 gap-2 mt-6">
                                <label htmlFor="" className="font-Inter">Your Message</label>
                                <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="bg-white rounded-lg border-[1px] border-customGrayBorder px-3 py-2 min-h-[180px]" type="text" placeholder="Tell us about your project or inquiry..." />
                                    {
                                        errors.message && <p className="text-red-500 text-xs">{errors.message}</p>
                                    }
                            </div>
                            <button className="flex items-center justify-center gap-2 bg-customSkyBlue w-full py-2 text-white text-lg rounded-lg mt-6 cursor-pointer" onClick={submitForm}>{Icons.send}Send</button>
                        </div>
                        <div className="col-span-12 bg-customRoyalBlue place-items-center p-8 border h-full rounded-3xl md:col-span-5 md:place-items-start">
                            <h2 className="text-white font-Amiri text-4xl font-bold max-w-full md:max-w-[100px]">Contact Information</h2>
                            <div className="flex gap-2 w-full items-center mt-8 justify-center md:justify-start">
                                <div className="w-6 h-6 text-white [&>svg]:w-full [&>svg]:h-full">{Icons.email}</div>
                                <p className="text-white font-Inter text-lg font-normal">contact@nexafunds.com</p>
                            </div>

                            <div className="flex flex-col gap-2 w-full items-center mt-8 md:items-start">
                                <h2 className="font-Amiri text-white text-3xl font-semibold">Connect With Us</h2>
                                <div className="flex gap-4 items-center">
                                    {
                                        SocialMediaIcons.map(({icon}, index) => (
                                            <div className="text-white p-4 rounded-full border-2 border-white">{icon}</div>
                                        ))
                                    }
                                </div>
                            </div>
                            
                        </div>
                    </form>
                </section>
                <Footer/>
            </div>
        </main>
    </div> );
}
 
export default Home;