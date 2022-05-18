import React,{useRef,useEffect,useState} from 'react'
import Nav from './Nav'
import Lottie from 'lottie-react'
import * as animationData from './profile.json'
import gsap from 'gsap'


let tl=new gsap.timeline()

const landAnimation=(complete)=>{
  tl.to('.profile',1.6,{
    ease:"expo.inOut",
    stagger:0.3,
    duration:0.5,
    delay:2,
    
  })
}

const Landing = () => {

  const [complete,setComplete]=useState(false)


  const completeHandler=()=>setComplete(true)
  const imageRef=useRef()
  const textRef=useRef()
  // const q= gsap.utils.selector(textRef);
  useEffect(()=>{

    landAnimation()

    // gsap.to(imageRef.current,{
    //   duration:3,
    //   rotate:360,
    //   ease:"expo.out",
    //   delay:0.2
    // })
    // gsap.to(textRef.current,{height:'max-content',ease:"expo.out",duration:1,delay:0.3})
  },[])
  
  return (
    <div className='overflow-hidden bg-awar'>
    {/* <Nav /> */}

    <div className='text-3xl   w-screen h-screen flex flex-col   justify-center'>
        <div ref={imageRef} className='sm:w-96 w-80 h-52 rounded-3xl self-center place-content-center bg-white overflow-hidden flex justify-center '>
        <div className="line w-1/3  h-full bg-amel"></div>
        <div className="line w-1/3 h-full bg-kayan"></div>
        <div className="line w-1/3 h-full bg-ani"></div>   
          <Lottie animationData={animationData} className="w-80 h-52 profile" autoplay={true} loop={true} />
        </div>
        <div ref={textRef}  className='self-center sm:w-96 h-0 w-80 mt-8 flex flex-col'>
          <h2 className='bg-white hi p-1 translate-y-0 px-2 rounded-lg inline self-start '>👋 Hi</h2>
          <h2 className='bg-white gugu p-1 px-2 rounded-lg mt-2 inline self-start '>I'm Da Gu Gu Gu</h2>
          <h2 className='bg-white developer p-1 px-2 rounded-lg mt-2 inline self-start '>Web Developer</h2>
        </div>
    </div>
    
    </div>
  
  )
}

export default Landing