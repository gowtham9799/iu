import React from 'react'
import {Link} from 'react-router-dom'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  laptop: {
    breakpoint: { max: 1024, min: 768 },
    items: 1
  },
  tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1
    },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const product = [
{
product_name:"Zivame Bunny Rolls Knit Cotton Pyjama",
image:"https://sslimages.shoppersstop.com/sys-master/images/h69/h22/16505733316638/200319685_BLACK_alt1.jpg_2000Wx3000H",
price:"$599",
old_price:"₹499",
},
 
]



function Card1() {
  return (
    <div className='flex flex-wrap justify-start lg:ml-72 px-1 '>

 {product.map((pro) => ( 
  
<div className="bg-gray-300 w-[9rem] grow md:grow-0 md:w-[16.5rem]  overflow-y-hidden lg:w-[16rem] xl:w-[21rem] md:h-[35rem] rounded-lg shadow-md dark:bg-gray-900 mt-5 hover:scale-100 hover:shadow-lg hover:shadow-gray-500 duration-200 mx-2 lg:mx-3 ">
<Link to={""} className="">
   
<Carousel responsive={responsive}   autoPlay={ true } infinite={true} 
    autoPlaySpeed={2000} transitionDuration={700} removeArrowOnDeviceType={[ "desktop"]} className=" ">
<div className='flex'>



        <img className='px-2 py-2 ' src={pro.image}/>
        <img className='px-2 py-2' src={pro.image}/>
        <img className='px-2 py-2' src={pro.image}/>
        <img className='px-2 py-2' src={pro.image}/>
        </div>
        </Carousel>
    <div className=" xl:hover:-translate-y-12 duration-300 ease-in-out   ">
        <div className='flex justify-start     bg-gray-300 border-t-3 '>
            <p className="text-sm  text-gray-900 font-medium pt-3 pl-3">{pro.product_name} </p>
        </div>
        
        <div className="text-start  pb-2 flex bg-gray-300 pl-3">
            <del className="text-xl  text-black dark:text-white">{pro.price}</del>  
            <p className='text-red-500 pl-5 text-xl '>{pro.old_price}</p>     
        </div>
        <div className='flex justify-between flex-wrap px-2'>
        <div class="flex  mt-2">
            <svg aria-hidden="true" className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5  h-6 ">5.0</span>
        </div>
        <div className=' '>
        <button  className= "hover:scale-105  text-white mb-3 justify-start bg-cyan-500 hover:bg-gray-600 shadow-md shadow-gray-500 white:bg-gray-800 font-medium rounded-lg text-sm px-3 py-2   flex capitalize"> <HiOutlineShoppingCart className='w-5 h-5 mr-1'/>Add to cart </button>
        </div>
        </div>
    </div>
    </Link>
</div>

))}   




    </div>
  )
}

export default Card1