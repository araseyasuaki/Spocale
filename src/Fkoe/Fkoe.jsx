// import './Fkoe.scss'
// import Data from '../Data/Data'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
// import 'swiper/components/navigation/navigation.min.css';
// import SwiperCore, { Navigation } from 'swiper/core';

// SwiperCore.use([Navigation]); 

// const Fkoe = () => {
//     const { paneru1, paneru2, paneru3 } = Data()
//     return (
//     <>
//         <section className='koe1'>
//             <h2></h2>
//             <section className='paneru1'>
//                 <Swiper
//                     effect='coverflow'
//                     speed={1000}
//                     loop={true}
//                     slidesPerView={1}
//                     spaceBetween={0}
//                     centeredSlides={true}
//                     navigation={{
//                         nextEl: '.swiper-button-next',
//                         prevEl: '.swiper-button-prev',
//                     }}
//                     effect={'cards'}
//         grabCursor={true}
//         modules={[EffectCards]}
//         className="mySwiper"
//                 >
//                 <SwiperSlide>
//                 <ul>
//                     {paneru1.map((data, index)=>(
//                         <li key={index}>
//                             <img id={data.id1} src={data.link1} alt={index}/>
//                             <h3>{data.text1}</h3>
//                             <p>{data.text2}</p>
//                             <img id={data.id2} src={data.link2} alt={index}/>
//                         </li>
//                     ))}
//                 </ul>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                 <ul>
//                     {paneru2.map((data, index)=>(
//                         <li key={index}>
//                             <img id={data.id1} src={data.link1} alt={index}/>
//                             <h3>{data.text1}</h3>
//                             <p>{data.text2}</p>
//                             <img id={data.id2} src={data.link2} alt={index}/>
//                         </li>
//                     ))}
//                 </ul>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                 <ul>
//                     {paneru3.map((data, index)=>(
//                         <li key={index}>
//                             <img id={data.id1} src={data.link1} alt={index}/>
//                             <h3>{data.text1}</h3>
//                             <p>{data.text2}</p>
//                             <img id={data.id2} src={data.link2} alt={index}/>
//                         </li>
//                     ))}
//                 </ul>
//                 </SwiperSlide>
//                 </Swiper>
//                 <div className="swiper-button-next"></div>
//                 <div className="swiper-button-prev"></div>
//             </section>
//         </section>


//         <section className='koe2'>
//             <h2></h2>
//             <section className='paneru2'>
//                 <ul>
//                     {paneru1.map((data, index)=>(
//                         <li key={index}>
//                             <img id={data.id1} src={data.link1} alt={index}/>
//                             <h3>{data.text1}</h3>
//                             <p>{data.text2}</p>
//                             <img id={data.id2} src={data.link2} alt={index}/>
//                         </li>
//                     ))}
//                 </ul>
//                 <ul>
//                     {paneru2.map((data, index)=>(
//                         <li key={index}>
//                             <img id={data.id1} src={data.link1} alt={index}/>
//                             <h3>{data.text1}</h3>
//                             <p>{data.text2}</p>
//                             <img id={data.id2} src={data.link2} alt={index}/>
//                         </li>
//                     ))}
//                 </ul>
//                 <ul>
//                     {paneru3.map((data, index)=>(
//                         <li key={index}>
//                             <img id={data.id1} src={data.link1} alt={index}/>
//                             <h3>{data.text1}</h3>
//                             <p>{data.text2}</p>
//                             <img id={data.id2} src={data.link2} alt={index}/>
//                         </li>
//                     ))}
//                 </ul>
//             </section>
//         </section>
//     </>
//     )
// }

// export default Fkoe
import './Fkoe.scss'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide className='waon'><img src="./img/sumaho1.png" alt="" /></SwiperSlide>
        <SwiperSlide className='waon'><img src="./img/sumaho1.png" alt="" /></SwiperSlide>
        <SwiperSlide className='waon'><img src="./img/sumaho1.png" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
