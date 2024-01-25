import './dlbtn.scss'
import { qtbtn, dlbc, dltext, dlbcdelete } from '../Zdata/data'
import React, { useState } from 'react'



const dlbtn = () => {
  const [bcde, setbcde] = useState(false);
  const bcbtn = () =>{
    setbcde(!bcde);
  }
  return (
    <>
      <section className='dlbtn'>
        <div onClick={bcbtn}>
          <img id={qtbtn[0].id} src={qtbtn[0].link}/>
        </div>
        <div>
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