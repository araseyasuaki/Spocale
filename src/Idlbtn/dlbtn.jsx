import './dlbtn.scss'
import { qtbtn, dlbc, dltext, dlbcdelete, footerdownloadbtn } from '../Zdata/data'
import React, { useState, useEffect } from 'react'
import gsap from 'gsap';



const dlbtn = () => {
  const [bcde, setbcde] = useState(false);
  const bcbtn = () =>{
    setbcde(!bcde);
  }


  useEffect(() => {
    gsap.to('.qrbtn', {
      y: 12,
      duration: 1,
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
    });
  }, []);
  return (
    <>
      <section className='dlbtn'>
        <div className='qrbtn' onClick={bcbtn}>
          <img id={qtbtn[0].id} src={qtbtn[0].link}/>
        </div>
        <div className='topbtn'>
          <a href=''><img id={qtbtn[1].id} src={qtbtn[1].link}/></a>
        </div>
      </section>
      <section id={`${bcde ? '' : 'bcdelete'}`} className='bcscreen'>
        <div className='bcbox'>
          <ul className='dlbarcode'>
            {dlbc.map((data, index)=>(
              <li key={index}><img id={data.id} src={data.link}/></li>
            ))}
          </ul>
          <ul className='downloadbtn'>
            {footerdownloadbtn.map((data, index)=>(
              <li key={index}><img id={data.id} src={data.link}/></li>
            ))}
          </ul>
          <ul className='dltext'>
            {dltext.map((data, index)=>(
              <li key={index}>{data.text}</li>
            ))}
          </ul>
        </div>
        <p>{dlbcdelete[0].text}</p>
        <div  onClick={bcbtn} className='dlbackground'/>
      </section>
    </>
  )
}

export default dlbtn