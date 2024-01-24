import './footer.scss'
import { footerlogo, footerdownloadbtn, footeroverview, supokaresns, footercopyright } from '../Zdata/data'
import React from 'react'

const footer = () => {
  return (
    <>
      <section className='footer'>
        <img id={footerlogo[0].id} src={footerlogo[0].link}/>
        <section className='footerdownloadbtn'>
          {footerdownloadbtn.map((data, index)=>(
            <a href={data.url} key={index}><img id={data.id} src={data.link}/></a>
          ))}
        </section>
        <div>
          <ul>
            <li className='listnone1'><a href={footeroverview[0].url}>{footeroverview[0].text}</a></li>
            <li><a href={footeroverview[1].url}>{footeroverview[1].text}</a></li>
          </ul>
          <ul>
            <li className='listnone2'><a href={footeroverview[2].url}>{footeroverview[2].text}</a></li>
            <li><a href={footeroverview[3].url}>{footeroverview[3].text}</a></li>
          </ul>
        </div>
        <section className='supokaresns'>
          {supokaresns.map((data, index)=>(
            <a href={data.url} key={index}><img id={data.id} src={data.link}/></a>
          ))}
        </section>
        <p>{footercopyright[0].text}</p>
      </section>
    </>
  )
}

export default footer










