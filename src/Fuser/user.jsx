import './user.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { usercatch, card1, card2, card3 } from '../Zdata/data';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

export default function App() {
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    
    if (window.innerWidth >= 961) {
      gsap.set('.userh22',{
        y: '60px',
        opacity: '0',
      })
      gsap.to('.userh22',{
        y: '0',
        opacity: '1',
        duration: '2',
        delay: '0',
        ease: 'Power4.easeOut',
        scrollTrigger:{
          trigger: '.userh22',
          start: '-50% center',
          end: '-50% center',
        }
      })
      gsap.set('.pcard1',{
        y: '60px',
        opacity: '0',
        rotationY: '90',
      })
      gsap.to('.pcard1',{
        y: '0',
        opacity: '1',
        duration: '2',
        delay: '0.3',
        rotationY: '360',
        ease: 'Power4.easeOut',
        scrollTrigger:{
          trigger: '.userh22',
          start: '-50% center',
          end: '-50% center',
        }
      })
  
      gsap.set('.pcard2',{
        y: '60px',
        opacity: '0',
        rotationY: '90',
      })
      gsap.to('.pcard2',{
        y: '0',
        opacity: '1',
        duration: '2',
        delay: '0.6',
        rotationY: '360',
        ease: 'Power4.easeOut',
        scrollTrigger:{
          trigger: '.userh22',
          start: '-50% center',
          end: '-50% center',
        }
      })
  
      gsap.set('.pcard3',{
        y: '60px',
        opacity: '0',
        rotationY: '90',
      })
      gsap.to('.pcard3',{
        y: '0',
        opacity: '1',
        duration: '2',
        delay: '0.9',
        rotationY: '360',
        ease: 'Power4.easeOut',
        scrollTrigger:{
          trigger: '.userh22',
          start: '-50% center',
          end: '-50% center',
        }
      })
    }else{
      gsap.set('.userh21',{
        y: '60px',
        opacity: '0',
      })
      gsap.to('.userh21',{
        y: '0',
        opacity: '1',
        duration: '2',
        delay: '0',
        ease: 'Power4.easeOut',
        scrollTrigger:{
          trigger: '.userh21',
          start: '-50% center',
          end: '-50% center',
        }
      })
      gsap.set('.userpanel-mv',{
        y: '60px',
        opacity: '0',
        rotationY: '90',
      })
      gsap.to('.userpanel-mv',{
        y: '0',
        opacity: '1',
        duration: '2',
        delay: '0.3',
        rotationY: '360',
        ease: 'Power4.easeOut',
        scrollTrigger:{
          trigger: '.userh21',
          start: '-50% center',
          end: '-50% center',
        }
      })
    }
    
  })
  return (
    <>
    <div className='mvuserbg'>
    <h2 className='userh21'>{usercatch[0].text}</h2>
    <section className='userpanel-mv'>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide className='waon'>
          <ul>
            {card1.map((data, index)=>(
              <li key={index}>
                <img id={data.id1} src={data.link1} alt={index}/>
                <h3>{data.text1}</h3>
                <p>{data.text2}</p>
                <img id={data.id2} src={data.link2} alt={index}/>
              </li>
            ))}
          </ul>
          </SwiperSlide>
          <SwiperSlide className='waon'>
          <ul>
            {card2.map((data, index)=>(
              <li key={index}>
                <img id={data.id1} src={data.link1} alt={index}/>
                <h3>{data.text1}</h3>
                <p>{data.text2}</p>
                <img id={data.id2} src={data.link2} alt={index}/>
              </li>
            ))}
          </ul>
          </SwiperSlide>
          <SwiperSlide className='waon'>
          <ul>
            {card3.map((data, index)=>(
              <li key={index}>
                <img id={data.id1} src={data.link1} alt={index}/>
                <h3>{data.text1}</h3>
                <p>{data.text2}</p>
                <img id={data.id2} src={data.link2} alt={index}/>
              </li>
            ))}
          </ul>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>

      <section className='userpanel-pc'>
        <h2 className='userh22'>{usercatch[0].text}</h2>
            <section className='paneru2'>
              <ul className='pcard1'>
                {card1.map((data, index)=>(
                  <li key={index}>
                    <img id={data.id1} src={data.link1} alt={index}/>
                    <h3>{data.text1}</h3>
                    <p>{data.text2}</p>
                    <img id={data.id2} src={data.link2} alt={index}/>
                  </li>
                ))}
              </ul>
              <ul className='pcard2'>
                {card2.map((data, index)=>(
                  <li key={index}>
                    <img id={data.id1} src={data.link1} alt={index}/>
                    <h3>{data.text1}</h3>
                    <p>{data.text2}</p>
                    <img id={data.id2} src={data.link2} alt={index}/>
                  </li>
                ))}
              </ul>
              <ul className='pcard3'>
                {card3.map((data, index)=>(
                  <li key={index}>
                    <img id={data.id1} src={data.link1} alt={index}/>
                    <h3>{data.text1}</h3>
                    <p>{data.text2}</p>
                    <img id={data.id2} src={data.link2} alt={index}/>
                  </li>
                ))}
              </ul>
            </section>
      </section>
    </>
  );
}
