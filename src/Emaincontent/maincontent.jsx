import './maincontent.scss';
import React, { useEffect } from 'react';
import Rellax from 'rellax';
import { maintext, mainbackground, mainsection1, mainsection2, mainsection3,} from '../Zdata/data'

const main = () => {


  useEffect(() => {
    const rellaximg = new Rellax('.rellaximg', {
      speed: -2,
      center: true,
    });
    const rellaxh2 = new Rellax('.rellaxh2', {
      speed: 2,
      center: true,
    });
    const rellaxh3 = new Rellax('.rellaxh3', {
      speed: 3,
      center: true,
    });
    return () => {
      rellaximg.destroy();
      rellaxh2.destroy();
      rellaxh3.destroy();
    };
  }, []);


  return (
    <>
      <section className='maincontent'>
        <div>
          <img id={mainbackground[0].id} src={mainbackground[0].link}/>
        </div>
        <ul className='mainsection1'>
          <li className='rellaximg'>
            <img id={mainsection1[0].id} src={mainsection1[0].link}/>
          </li>
          <li>
            <h2 className='rellaxh2'>{mainsection1[1].text}</h2>
            <h2 className='rellaxh2'>{mainsection1[2].text}</h2>
            <h3 className='rellaxh3'>{mainsection1[3].text}</h3>
          </li>
        </ul>
        <ul className='mainsection2'>
          <li>
            <h2 className='rellaxh2'>{mainsection2[1].text}</h2>
            <h2 className='rellaxh2'>{mainsection2[2].text}</h2>
            <h3 className='rellaxh3'>{mainsection2[3].text}</h3>
          </li>
          <li className='rellaximg'>
            <img id={mainsection2[0].id} src={mainsection2[0].link}/>
          </li>
        </ul>
        <ul className='mainsection3'>
          <li className='rellaximg'>
            <img id={mainsection3[0].id} src={mainsection3[0].link}/>
          </li>
          <li>
            <h2 className='rellaxh2'>{mainsection3[1].text}</h2>
            <h2 className='rellaxh2'>{mainsection3[2].text}</h2>
            <h3 className='rellaxh3'>{mainsection3[3].text}</h3>
          </li>
        </ul>
      </section>
    </>
  )
}

export default main