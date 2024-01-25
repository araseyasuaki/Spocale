import './worries.scss';
import { worriescatch, worriestext, textbox } from '../Zdata/data';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';


const Nayami = () => {
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.set('.worries h2',{
      y: '60px',
      opacity: '0',
    })
    gsap.to('.worries h2',{
      y: '0',
      opacity: '1',
      duration: '2',
      delay: '0',
      ease: 'Power4.easeOut',
      scrollTrigger:{
        trigger: '.worries h2',
        start: '-170% center',
        end: '-170% center',
      }
    })

    gsap.set('.wtextbox1',{
      y: '60px',
      opacity: '0',
    })
    gsap.to('.wtextbox1',{
      y: '0',
      opacity: '1',
      duration: '2',
      delay: '0.3',
      ease: 'Power4.easeOut',
      scrollTrigger:{
        trigger: '.worries h2',
        start: '-170% center',
        end: '-170% center',
      }
    })

    gsap.set('.wtextbox2',{
      y: '60px',
      opacity: '0',
    })
    gsap.to('.wtextbox2',{
      y: '0',
      opacity: '1',
      duration: '2',
      delay: '0.6',
      ease: 'Power4.easeOut',
      scrollTrigger:{
        trigger: '.worries h2',
        start: '-170% center',
        end: '-170% center',
      }
    })

    gsap.set('.wtextbox3',{
      y: '60px',
      opacity: '0',
    })
    gsap.to('.wtextbox3',{
      y: '0',
      opacity: '1',
      duration: '2',
      delay: '0.9',
      ease: 'Power4.easeOut',
      scrollTrigger:{
        trigger: '.worries h2',
        start: '-170% center',
        end: '-170% center',
      }
    })
  })
  return (
    <>
      <section className="worries">
        {worriescatch.map((data, index) => (
          <h2 key={index}>{data.text}</h2>
        ))}
        <section className="worriespanel">
          <ul>
            <li className='wtextbox1'>
              <h3>{worriestext[0].text}</h3>
              <img src={textbox[0].link}/>
            </li>
            <li className='wtextbox2'>
              <h3>{worriestext[1].text}</h3>
              <img src={textbox[0].link}/>
            </li>
            <li className='wtextbox3'>
              <h3>{worriestext[2].text}</h3>
              <img src={textbox[0].link}/>
            </li>
          </ul>
        </section>
      </section>
    </>
  );
};

export default Nayami;