import './introduction.scss';
import { introductiontext, downloadbtn } from '../Zdata/data';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

const Dounyuutext = () => {
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.set('.introduction ul',{
      y: '100px',
      opacity: '0',
    })
    gsap.to('.introduction ul',{
      y: '0',
      opacity: '1',
      duration: '2',
      ease: 'Power4.easeOut', 
      scrollTrigger:{
        trigger: '.introduction ul',
        start: 'top 90%',
        end: '-10% center',
      }
    })
    gsap.set('.downloadbtn',{
      y: '100px',
      opacity: '0',
    })
    gsap.to('.downloadbtn',{
      y: '0',
      opacity: '1',
      duration: '2',
      delay: '0.5',
      ease: 'Power4.easeOut', 
      scrollTrigger:{
        trigger: '.introduction ul',
        start: '-10% center',
        end: '-10% center',
      }
    })
  })
  return (
    <>
      <section className="introduction">
        <ul>
          {introductiontext.map((data, index) => (
            <li key={index}>{data.text}</li>
          ))}
        </ul>
        <section className="downloadbtn">
          {downloadbtn.map((data, index) => (
            <a href={data.url} key={index}>
              <img id={data.id} src={data.link} alt={index} />
            </a>
          ))}
        </section>
      </section>
    </>
  );
};

export default Dounyuutext;
