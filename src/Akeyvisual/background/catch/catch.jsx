import './catch.scss';
import { catchfirst, catchlast } from '../../../Zdata/data';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Kyatti = () => {
  useEffect(() => {
    gsap.set('.first', { y: '200px', opacity: '0' });
    gsap.to(
      '.first',
      { y: '0', direction: '1.5', opacity: '1', ease: 'Power2.easeOut' },
      '2.7'
    );

    gsap.set('.last', { y: '200px', opacity: '0' });
    gsap.to(
      '.last',
      { y: '0', direction: '1.5', opacity: '1', ease: 'Power2.easeOut' },
      '3.2'
    );

    gsap.to('#maskfirst', { scaleX: '0', direction: '1.5' }, '3.2');
    gsap.to('#masklast', { scaleX: '0', direction: '1.5' }, '3.7');
  }, []);
  return (
    <>
      <section className="catch">
        <ul className="first">
          {catchfirst.map((data, index) => (
            <li id={data.id} key={index}>
              {data.text}
            </li>
          ))}
          <div id="maskfirst" />
        </ul>
        <ul className="last">
          {catchlast.map((data, index) => (
            <li id={data.id} key={index}>
              {data.text}
            </li>
          ))}
          <div id="masklast" />
        </ul>
      </section>
    </>
  );
};

export default Kyatti;
