import React,{useEffect,useState} from 'react'
import gsap from 'gsap'
import {HiOutlineMail} from 'react-icons/hi'
import {BsGithub,BsLinkedin} from 'react-icons/bs'

const tl=gsap.timeline()

const open=()=>{
  tl.to('.menu-wrap',{
   display:'block',
  })
  .to('.nav',{
    background:"#F75656",

    ease: "expo.inOut",
  })
  .fromTo('.menu-bg',{
    height:0,
    display:'none',
  },{
    display:'block',
      height:"100%",
      ease: "expo.inOut",
      duration: 1,
      stagger: {
        amount:0.1,
      }
  })
}

const close=()=>{
  tl.fromTo('.menu-bg',{
    height:"100%",
    display:'block'
  },{
      height:0,
      display:'none',
      ease: "expo.inOut",
      duration: 1,
      stagger: {
        amount:-0.3,
      }
  })
  .to('.nav',{
    background:"transparent",
    ease: "expo.inOut",
  })
  .to('.menu-wrap',{
    display:'none'
  })

}

const Nav = () => {

  const [start,setStart]=useState(true)
  const [menuOpen,setMenuOpen]=useState(false)

  useEffect(()=>{

    if(menuOpen===true && start===false){
      open()
    }
    if(menuOpen===false && start===false){
      close()
    }
    setStart(false)

  },[menuOpen])

  return (
    <div className=' fixed top-0  left-0 z-10 flex flex-col'>
      <div className="line-horizontal w-0 h-0.5 bg-black "></div>
    
    <div className=' w-screen h-[50px] nav  bg-transparent  flex  item-center justify-center'>
        <div className='lg:w-1/2 md:w-3/4 w-screen   flex items-center  bg-transparent'>
          <div className='w-0.5  line-vertical bg-black'></div>
          <div className="logo font-bold   inline-block h-[50px] leading-[50px] px-5 ">
            D
          </div>
          <div className='w-0.5  line-vertical bg-black'></div>
          <div className="logo font-bold grow text-center   inline-block h-[50px] leading-[50px] px-5 ">
            Welcome 
          </div>
          <div className='w-0.5  line-vertical bg-black'></div>
          <div onClick={()=>setMenuOpen(!menuOpen)} className="logo font-bold  text-center    h-[50px] flex flex-col items-center justify-center px-5 ">
            <div className="line1 w-6 h-[3px] mb-1 bg-black"></div> 
            <div className="line1 w-6 h-[3px] mb-1 bg-black"></div> 
            <div className="line1 w-6 h-[3px] bg-black"></div> 
          </div>
          <div className='w-0.5 line-vertical bg-black'></div>
        </div>
      
    </div>

    <div className="line-horizontal w-0 h-0.5 bg-black "></div>


    <div className='menu-wrap h-screen hidden  relative'>
    <div className='bg-amel menu-bg z-20 absolute w-screen hidden'></div>
    <div className='bg-kayan menu-bg z-20 absolute w-screen hidden'></div>
    <div className='bg-ani menu-bg z-30 absolute w-screen hidden '>
    <div className='lg:w-1/2 md:w-3/4  h-full m-auto  flex   '>   
      <div className=' w-0.5 h-full bg-black'></div>
      <div className='h-full grow bg-kayan'>
        <div className='h-1/5 bg-awar'></div>
        <div className='h-1/5 bg-awar'></div>
        <div className='h-1/5 bg-awar'></div>
        <div className='h-1/5 bg-awar'></div>
        <div className='h-1/5 bg-white  '>
          <div className='mx-auto w-4/5 pt-3 flex justify-between'>
         

          < BsLinkedin className='align-text-center text-[40px]' />
          <BsGithub className='align-text-center text-[40px]' />
          <HiOutlineMail className='align-text-center text-[43px]' />
          </div>
        </div>
      </div>
      <div className=' w-0.5 h-full bg-black'></div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Nav