import './dlbtn.scss'
import { dldata, dlbc, dltext, dlbcdelete } from '../Zdata/data'
import React, { useState } from 'react'



const dlbtn = () => {
  const [bcde, setbcde] = useState(false);
  const bcbtn = () =>{
    setbcde(!bcde);
  }
  return (
    <>
      <section onClick={bcbtn} className='dlbtn'>
        <div>
          <img id={dldata[0].id} src={dldata[0].link}/>
        </div>
        <p>{dldata[1].text}</p>
      </section>
      
      <section id={`${bcde ? '' : 'bcdelete'}`} className='bcscreen'>
        <div className='bcbox'>
          <ul className='dlbarcode'>
            {dlbc.map((data, index)=>(
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