import './Kyatti.scss';
import { kyattizenhan, kyattikouhan } from '../../../Data/Data';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Kyatti = () => {
  useEffect(() => {
    gsap.set('.zenhan', { y: '200px', opacity: '0' });
    gsap.to(
      '.zenhan',
      { y: '0', direction: '1.5', opacity: '1', ease: 'Power2.easeOut' },
      '2.7'
    );

    gsap.set('.kouhan', { y: '200px', opacity: '0' });
    gsap.to(
      '.kouhan',
      { y: '0', direction: '1.5', opacity: '1', ease: 'Power2.easeOut' },
      '3.2'
    );

    gsap.to('#masuku1', { scaleX: '0', direction: '1.5' }, '3.2');
    gsap.to('#masuku2', { scaleX: '0', direction: '1.5' }, '3.7');
  }, []);
  return (
    <>
      <section className="kyatti">
        <ul className="zenhan">
          {kyattizenhan.map((data, index) => (
            <li id={data.id} key={index}>
              {data.text}
            </li>
          ))}
          <div id="masuku1" />
        </ul>
        <ul className="kouhan">
          {kyattikouhan.map((data, index) => (
            <li id={data.id} key={index}>
              {data.text}
            </li>
          ))}
          <div id="masuku2" />
        </ul>
      </section>
    </>
  );
};

export default Kyatti;
