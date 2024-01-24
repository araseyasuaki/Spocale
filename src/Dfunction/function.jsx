import './function.scss';
import { functionimg, functiontext, functionbackground } from '../Zdata/data';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

const kinou = () => {
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.set('#bgimg-pc',{
      x: '100%',
      opacity: '0.5',
    })
    gsap.to('#bgimg-pc',{
      x: '0',
      y: '-50%',
      opacity: '1',
      duration: '1.5',
      delay: '0',
      ease: 'Power4.easeOut',
      scrollTrigger:{
        trigger: '#bgimg-pc',
        start: '-40% center',
        end: '-40% center',
      }
    })

    gsap.set('.function ul',{
      y: '100px',
      opacity: '0',
    })
    gsap.to('.function ul',{
      y: '0',
      opacity: '1',
      duration: '2.5',
      delay: '0.5',
      ease: 'Power4.easeOut',
      scrollTrigger:{
        trigger: '#bgimg-pc',
        start: '-40% center',
        end: '-40% center',
      }
    })

    gsap.set('#supokaretext',{
      y: '100px',
      opacity: '0',
    })
    gsap.to('#supokaretext',{
      y: '0',
      opacity: '1',
      duration: '2.5',
      delay: '0.5',
      rotationY: '360',
      ease: 'Power4.easeOut',
      scrollTrigger:{
        trigger: '#bgimg-pc',
        start: '-40% center',
        end: '-40% center',
      }
    })
  })
  return (
    <>
      <section className="function">
        <ul>
          {functionimg.map((data, index) => (
            <li key={index}>
              <img src={data.link} alt={index} />
            </li>
          ))}
          <li>
            <h2>{functiontext[0].text}</h2>
            <h2>{functiontext[1].text}</h2>
            <h3>{functiontext[2].text}</h3>
          </li>
        </ul>
        {functionbackground.map((data, index) => (
          <img id={data.id} src={data.link} key={index} alt={index} />
        ))}
      </section>
    </>
  );
};
export default kinou;
