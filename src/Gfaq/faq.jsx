import './faq.scss'
import { faqcatch,faqqtext, faqatext } from '../Zdata/data'
import React, { useState } from 'react'

const faq = () => {
  const [faq1, setfaq1] = useState(false);
  const faqbtn1 = () =>{
    setfaq1(!faq1);
  } 
  const [faq2, setfaq2] = useState(false);
  const faqbtn2 = () =>{
    setfaq2(!faq2);
  } 
  const [faq3, setfaq3] = useState(false);
  const faqbtn3 = () =>{
    setfaq3(!faq3);
  } 
  return (
    <>
    <section className='faqbackground'>
      <section className='faq'>
        <h2>{faqcatch[0].text}</h2>

        <ul onClick={faqbtn1}>
          <li>
            <p>{faqqtext[0].text}</p>
            <h3>{faqqtext[1].text}</h3>
            <div className='btnlefttable' id={`${faq1 ? 'btnleftback' : ''}`}></div>
            <div className='btnrighttable' id={`${faq1 ? 'btnrightback' : ''}`}></div>
          </li>
          <li id={`${faq1 ? '' : 'faqtable1'}`}>
            <p className='acolor'>{faqatext[0].text}</p>
            <h3>{faqatext[1].text}</h3>
          </li>
        </ul>

        <ul onClick={faqbtn2}>
          <li>
            <p>{faqqtext[0].text}</p>
            <h3>{faqqtext[2].text}</h3>
            <div className='btnlefttable' id={`${faq2 ? 'btnleftback' : ''}`}></div>
            <div className='btnrighttable' id={`${faq2 ? 'btnrightback' : ''}`}></div>
          </li>
          <li id={`${faq2 ? '' : 'faqtable2'}`}>
            <p>{faqatext[0].text}</p>
            <h3>{faqatext[2].text}</h3>
          </li>
        </ul>

        <ul onClick={faqbtn3}>
          <li>
            <p>{faqqtext[0].text}</p>
            <h3>{faqqtext[3].text}</h3>
            <div className='btnlefttable' id={`${faq3 ? 'btnleftback' : ''}`}></div>
            <div className='btnrighttable' id={`${faq3 ? 'btnrightback' : ''}`}></div>
          </li>
          <li id={`${faq3 ? '' : 'faqtable3'}`}>
            <p>{faqatext[0].text}</p>
            <h3>{faqatext[3].text}</h3>
          </li>
        </ul>

      </section>
    </section>
    </>
  )
}

export default faq