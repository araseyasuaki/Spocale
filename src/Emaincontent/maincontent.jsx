import './maincontent.scss';
import React, { useEffect } from 'react';
import Rellax from 'rellax';
import Mainbgtext from './mainbgtext/mainbgtext';
import { mainbackground, mainsection1, mainsection2, mainsection3,} from '../Zdata/data';



const main = () => {


  useEffect(() => {
    if (window.innerWidth >= 961) {
      const rellaxh1 = new Rellax('.rellaxh1', {
        speed: 4,
        center: true,
      });
      const rellaxh2 = new Rellax('.rellaxh2', {
        speed: 6,
        center: true,
      });
      return () => {
        rellaxh1.destroy();
        rellaxh2.destroy();
      };
    }else{
      const rellaxh3 = new Rellax('.mvsection', {
        speed: 3,
        center: true,
      });
      return () => {
        rellaxh3.destroy();
      };
    }
  }, []);
  
  return (
    <>
      <section className='maincontent'>
        <div>
          <img id={mainbackground[0].id} src={mainbackground[0].link}/>
        </div>
        <Mainbgtext/>
        <ul className='mainsection1'>
          <li>
            <img id={mainsection1[0].id} src={mainsection1[0].link}/>
          </li>
          <li className='mvsection'>
            <h2 className='rellaxh1'>{mainsection1[1].text}</h2>
            <h2 className='rellaxh1'>{mainsection1[2].text}</h2>
            <h3 className='rellaxh2'>{mainsection1[3].text}</h3>
          </li>
        </ul>
        <ul className='mainsection2'>
          <li>
            <h2 className='rellaxh1'>{mainsection2[1].text}</h2>
            <h2 className='rellaxh1'>{mainsection2[2].text}</h2>
            <h3 className='rellaxh2'>{mainsection2[3].text}</h3>
          </li>
          <li className='mvsection'>
            <img id={mainsection2[0].id} src={mainsection2[0].link}/>
          </li>
        </ul>
        <ul className='mainsection3'>
          <li>
            <img id={mainsection3[0].id} src={mainsection3[0].link}/>
          </li>
          <li className='mvsection'>
            <h2 className='rellaxh1'>{mainsection3[1].text}</h2>
            <h2 className='rellaxh1'>{mainsection3[2].text}</h2>
            <h3 className='rellaxh2'>{mainsection3[3].text}</h3>
          </li>
        </ul>
      </section>
    </>
  )
}

export default main