import React from 'react';
import { BsSearch } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import About from './About';
import Categories from './Categories';
import LatestAds from './LatestAds';
import MidSection from './MidSection';
const Home = () => {
    document.title = 'Home';
    return (
        <div>
            <div className="hero min-h-[92px] md:min-h-[186px] bg-accent flex justify-center" >
                <div className=""></div>
                <div className="hero-content text-center text-neutral-content ">
                    <div className="max-w-md flex justify-center flex-col items-center">

                        
                        <p className="mb-5 flex justify-between items-center text-white bg-accent-focus pl-2 pr-2 rounded-full "><ImLocation></ImLocation> All of Bangladesh</p>
                        <div className=" flex justify-between bg-white w-96 md:w-[600px]    rounded-full ">
                            <input type="text" placeholder="What are you looking for?" className="p-3 rounded-full w-full outline-none text-black" />
                            <button className='btn btn-primary btn-circle'><BsSearch></BsSearch></button>
                        </div>
                    </div>
                </div>
            </div>
            <Categories></Categories>
            
            <MidSection></MidSection>
            <LatestAds></LatestAds>
            <div className="divider"><span className='text-2xl font-thin'>About Saveyou </span></div>
            <About></About>
        </div>
    );
};

export default Home;