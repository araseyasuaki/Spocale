import './kinou.scss';
import { kinouimg, kinoutext, kinouhaikei } from '../Data/Data';
import React from 'react';

const kinou = () => {
  const { kinouimg, kinoutext, kinouhaikei } = Data();
  return (
    <>
      <section className="kinou">
        <ul>
          {kinouimg.map((data, index) => (
            <li key={index}>
              <img src={data.link} alt={index} />
            </li>
          ))}
          <li>
            {kinoutext.map((data) => (
              <p>{data.text}</p>
            ))}
          </li>
        </ul>
        {kinouhaikei.map((data, index) => (
          <img id={data.id} src={data.link} key={index} alt={index} />
        ))}
      </section>
    </>
  );
};
export default kinou;
