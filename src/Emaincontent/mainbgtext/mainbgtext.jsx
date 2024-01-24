import './mainbgtext.scss'
import React, { useEffect } from 'react';
import { maintextfirst, maintextlast } from '../../Zdata/data'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


const mainbgtext = () => {
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.set('span',{
      y: '30px',
      filter: 'blur(3px)',
      opacity: '0.0',
    })
    gsap.to('span',{
      filter: 'none',
      ease: 'power4.out',
      y: '0',
      opacity: '1',
      stagger:{
        amount: '0.8',
        from: 'random',
      },
      scrollTrigger:{
        trigger: '.mainbgtext',
        start: '-300% center',
        end: 'bottom center',
      }
    })
  })
  return (
    <>
      <section className='mainbgtext'>
        <div className='mainbgtextf'>
          {maintextfirst.map((data, index)=>(
            <span key={index}>{data.text}</span>
          ))}
        </div>
        <div className='mainbgtextl'>
          {maintextlast.map((data, index)=>(
            <span key={index}>{data.text}</span>
          ))}
        </div>
        
      </section>
    </>
  )
}

export default mainbgtext