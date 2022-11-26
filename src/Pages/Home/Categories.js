import React, { useEffect, useState } from 'react';
import {GiRunningShoe} from "react-icons/gi";

const Categories = () => {
    const [categories,setCategories] = useState([]);
    // -------------------------------------------------------


    const cats = [
        {
          id: 1,
          title: "Sandal",
          img: "https://cdn.shopify.com/s/files/1/0583/9971/9619/products/02_2c9589f8-11fb-4001-85e0-5e6cd4054468.jpg?v=1669197415",
          ads: []
        },
        {
          id: 2,
          title: "Loafer",
          img: "https://cdn.shopify.com/s/files/1/0583/9971/9619/products/02_1182264b-f11c-4c60-bc39-884b68d77e6f.jpg?v=1660761618",
          ads: []
        },
        {
          id: 3,
          title: "Formal Shoe",
          img: "https://cdn.shopify.com/s/files/1/0583/9971/9619/products/02_9bf3ac80-c00b-40b8-ac8c-60051e273f00.jpg?v=1667637863",
          ads: []
        },
        {
          id: 4,
          title: "Ladies Sandal",
          img: "https://cdn.shopify.com/s/files/1/0583/9971/9619/products/17_f9a4face-ad3e-446c-99fd-96e680231e76.jpg?v=1665304424",
          ads: []
        },
        {
          id: 4,
          title: "Ladies Sandal",
          img: "https://cdn.shopify.com/s/files/1/0583/9971/9619/products/17_f9a4face-ad3e-446c-99fd-96e680231e76.jpg?v=1665304424",
          ads: []
        },
        {
          id: 4,
          title: "Ladies Sandal",
          img: "https://cdn.shopify.com/s/files/1/0583/9971/9619/products/17_f9a4face-ad3e-446c-99fd-96e680231e76.jpg?v=1665304424",
          ads: []
        },
        {
          id: 4,
          title: "Ladies Sandal",
          img: "https://cdn.shopify.com/s/files/1/0583/9971/9619/products/17_f9a4face-ad3e-446c-99fd-96e680231e76.jpg?v=1665304424",
          ads: []
        },
        {
          id: 4,
          title: "Ladies Sandal",
          img: "https://cdn.shopify.com/s/files/1/0583/9971/9619/products/17_f9a4face-ad3e-446c-99fd-96e680231e76.jpg?v=1665304424",
          ads: []
        },
        {
          id: 4,
          title: "Half Shoe",
          img: "https://cdn.shopify.com/s/files/1/0583/9971/9619/products/2_12d1ccca-dbec-4db2-861f-fd59f69c4fed.jpg?v=1650761673",
          ads: []
        }
      ]




    return (
        <div className='container m-auto md:mt-20'>
            <p className="text-lg font-bold m-3">Browse by Categories</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 ">
                {
                    cats.map(category=>{
                        return <div key={category.id} className='m-auto flex justify-start items-center w-44 p-2 mb-2 h-auto rounded-lg border '>
                            <img className='w-12' src={category.img} alt="" />
                            <div>
                            <p className='text-lg font-light'>{category.title}</p>
                            <p className="text-sm font-thin">
                                {category.ads.length} Ads
                            </p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Categories;