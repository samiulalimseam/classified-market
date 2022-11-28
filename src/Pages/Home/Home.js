import React, { useEffect, useState } from 'react';
import { BsSearch } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { useNavigate } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import About from './About';
import Categories from './Categories';
import LatestAds from './LatestAds';
import MidSection from './MidSection';
const Home = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
  const [locations, setLocations] = useState([]);


  
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err))
  }, [])
  useEffect(() => {
    fetch('http://localhost:5000/locations')
      .then(res => res.json())
      .then(data => setLocations(data))
      .catch(err => console.error(err))
  }, [])

    const handleSearch = (e) =>{
        const value = document.getElementById('searchInput').value; 
        navigate(`/search/${value}`)
    }
    document.title = 'Home';
    return (
        <div className='w-full'>
            <div className="hero w-full  min-h-[92px] md:min-h-[186px] bg-accent flex justify-center" >
                
                <div className="hero-content text-center text-neutral-content ">
                    <div className="max-w-md flex justify-center flex-col items-center">

                        
                        <p className="mb-5 flex justify-between items-center text-white bg-accent-focus pl-2 pr-2 rounded-full "><ImLocation></ImLocation> All of Bangladesh</p>
                        <div className=" flex justify-between bg-white w-80 md:w-[600px]    rounded-full ">
                            <input type="text" id='searchInput' name='searchInput' placeholder="What are you looking for?" className="p-3 rounded-full w-full outline-none text-black" />
                            <button onClick={handleSearch} className='btn btn-primary btn-circle'><BsSearch></BsSearch></button>
                        </div>
                    </div>
                </div>
            </div>
            <Categories></Categories>
            
            <MidSection></MidSection>
            <LatestAds products={products}></LatestAds>
            <div className="divider"><span className='text-2xl font-thin'>About Saveyou </span></div>
            <About></About>
           
        </div>
    );
};

export default Home;