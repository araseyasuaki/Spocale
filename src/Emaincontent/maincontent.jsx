import './maincontent.scss';
import { maintext, mainbackground, mainsection1, mainsection2, mainsection3,} from '../Zdata/data'

import React from 'react'

const main = () => {
  return (
    <>
      <section className='maincontent'>
        <div>
          <img id={mainbackground[0].id} src={mainbackground[0].link}/>
        </div>
        <ul>
          <li>
            <img id={mainsection1[0].id} src={mainsection1[0].link}/>
          </li>
          <li>
            <h2>{mainsection1[1].text}</h2>
            <h2>{mainsection1[2].text}</h2>
            <h3>{mainsection1[3].text}</h3>
          </li>
        </ul>
        {/* <ul>
          <li>
            <h2>{mainsection2[1].text}</h2>
            <h2>{mainsection2[2].text}</h2>
            <h3>{mainsection2[3].text}</h3>
          </li>
          <li>
          <img id={mainsection2[0].id} src={mainsection2[0].link}/>
          </li>
        </ul>
        <ul>
          <li>
          <img id={mainsection3[0].id} src={mainsection3[0].link}/>
          </li>
          <li>
            <h2>{mainsection3[1].text}</h2>
            <h2>{mainsection3[2].text}</h2>
            <h3>{mainsection3[3].text}</h3>
          </li>
        </ul> */}
      </section>
    </>
  )
}

export default main