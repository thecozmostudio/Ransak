import React from 'react'
import { SlArrowRightCircle, } from "react-icons/sl";
import { HiOutlineMail, HiOutlineUser } from "react-icons/hi";
import toast, { Toaster } from 'react-hot-toast';


const ContactUs = () => {


    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY ; 

    if (!ACCESS_KEY) {
    toast.error("Access key is not set. Check your .env");
    return;
}

    formData.append("access_key", ACCESS_KEY);

    try {
       const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
        });

        const data = await response.json();

        if (data.success) {
        toast.success("Thank you for your submission!");
        event.target.reset();
        } else {
        toast.error(data.message);
        } 
    } catch (error) {
        toast.error(error.message);
        console.log(error)
    }
    
  };

  return (
    <section id='contactus' className='container mx-auto flex flex-col md:flex-row justify-between
        pt-25 pb-6 px-10 sm:px-1 lg:px-8 relative w-full min-h-screen h-auto '>
            {/* left side  */}
            <div className='w-full h-full md:w-1/2 space-y-9 z-10'>
                <div class="w-full h-[400px] md:h-[500px] lg:h-[800px] rounded-lg overflow-hidden shadow-md">
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15841.217227330091!2d79.9797489!3d6.9733793!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb23e294bd4049c39!2sRansak%20packaging%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1624518104230!5m2!1sen!2slk" 
                    className=" w-full h-full " 
                    style={{border:0}} 
                    allowfullscreen="" 
                    loading="lazy"
                    title='Ransak Packaging Location'>
                    
                    </iframe>
                </div>
            </div>

            {/* right side  */}
            <div className='w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12' >
            <h1 className='font-bold lg:text-5xl md:text-4xl sm:text-3xl text-3xl pb-6'> Contact Us </h1>
            <form onSubmit={onSubmit} className='grid gap-3 sm:gap-5 max-w-2xl w-full'>
                <div className='pb-3'>
                    <p className='md-2 text-sm lg:text-xl font-medium text-left ' >Your Name</p>
                    <div className='flex pl-3 rounded-lg border items-center'>
                        <HiOutlineUser className='text-gray-400 text-xl mr-2' />
                        <input type='text' name='name' placeholder='Enter Your Name'
                        className='w-full p-3 text-sm lg:text-xl outline-none' required/>
                    </div>
                </div>

                <div className='pb-3'>
                    <p className='md-2 text-sm lg:text-xl font-medium text-left' >Email id</p>
                    <div className='flex pl-3 rounded-lg border items-center'>
                        <HiOutlineMail className='text-gray-400 text-xl mr-2' />
                        <input type='email' name='email' placeholder='Enter Your email'
                        className='w-full p-3 text-sm lg:text-xl outline-none' required/>
                    </div>
                </div>

                <div className='pb-3'>
                    <p className='md-2 text-sm lg:text-xl font-medium items-start text-left ' >Message</p>
                    <textarea rows={8} name='message' placeholder='Enter Your message'
                    className='w-full p-3 text-sm lg:text-xl outline-none rounded-lg border'/>
                </div>
                <div className='flex justify-center'> 
                <button type='submit' className='w-max flex gap-2 text-sm lg:text-xl px-10 py-3 bg-amber-400
                rounded-full cursor-pointer hover:scale-103 transition-all'>
                    Submit
                </button>
                </div>
            </form>
            </div>

        </section>
  )
}

export default ContactUs