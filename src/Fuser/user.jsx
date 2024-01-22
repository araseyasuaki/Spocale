import './user.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { card1, card2, card3 } from '../Zdata/data';

export default function App() {
  return (
    <>
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

      <section className='userpanel-pc'>
            <section className='paneru2'>
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
            </section>
      </section>
    </>
  );
}
