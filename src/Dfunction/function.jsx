import './function.scss';
import { functionimg, functiontext, functionbackground } from '../Zdata/data';
import React from 'react';

const kinou = () => {
  return (
    <>
      <section className="function">
        <ul>
          {functionimg.map((data, index) => (
            <li key={index}>
              <img src={data.link} alt={index} />
            </li>
          ))}
          <li>
            <h2>{functiontext[0].text}</h2>
            <h2>{functiontext[1].text}</h2>
            <h3>{functiontext[2].text}</h3>
          </li>
        </ul>
        {functionbackground.map((data, index) => (
          <img id={data.id} src={data.link} key={index} alt={index} />
        ))}
      </section>
    </>
  );
};
export default kinou;
