import './kanimation.scss';
import { kanimation } from '../../../Zdata/data';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Opanimation from './opanimation/opanimation';

const Ugoki = () => {
  useEffect(() => {
    gsap.set('#mvimg1', { y: '78%', opacity: '0' });
    gsap.to(
      '#mvimg1',
      { y: '0', duration: 0.7, opacity: '1', ease: 'power2.out' },
      '4'
    );

    gsap.set('#kimg1', { y: '165%', x: '250%', opacity: '0', scale: '0.3' });
    gsap.to(
      '#kimg1',
      {
        y: '0',
        x: '0',
        duration: 3,
        opacity: '1',
        scale: '1',
        ease: 'power4.out',
      },
      '5.1'
    );

    gsap.set('#kimg2', { y: '210%', x: '70%', opacity: '0', scale: '0.3' });
    gsap.to(
      '#kimg2',
      {
        y: '0',
        x: '0',
        duration: 3,
        opacity: '1',
        scale: '1',
        ease: 'power4.out',
      },
      '5.7'
    );

    gsap.set('#kimg3', { y: '85%', x: '435%', opacity: '0', scale: '0.3' });
    gsap.to(
      '#kimg3',
      {
        y: '0',
        x: '0',
        duration: 2.7,
        opacity: '1',
        scale: '1',
        ease: 'power4.out',
      },
      '4.5'
    );

    function kimg1() {
      gsap
        .timeline({ repeat: -1, repeatDelay: 0 })
        .to(
          '#kimg1',
          { x: '-15px', y: '15px', duration: 2, ease: 'linear' },
          '0'
        )
        .to('#kimg1', { x: '-25px', y: '0', duration: 2, ease: 'linear' }, '2')
        .to(
          '#kimg1',
          { x: '-15px', y: '-15px', duration: 2, ease: 'linear' },
          '4'
        )
        .to('#kimg1', { x: '0', y: '0', duration: 2, ease: 'linear' }, '6')
        .to(
          '#kimg1',
          { x: '15px', y: '-15px', duration: 2, ease: 'linear' },
          '8'
        )
        .to('#kimg1', { x: '25px', y: '0', duration: 2, ease: 'linear' }, '10')
        .to(
          '#kimg1',
          { x: '15px', y: '15px', duration: 2, ease: 'linear' },
          '12'
        )
        .to('#kimg1', { x: '0', y: '0', duration: 2, ease: 'linear' }, '14');
    }
    setTimeout(kimg1, 8100);
    function kimg2() {
      gsap
        .timeline({ repeat: -1, repeatDelay: 0 })
        .to(
          '#kimg2',
          { x: '15px', y: '15px', duration: 1.5, ease: 'linear' },
          '0'
        )
        .to(
          '#kimg2',
          { x: '25px', y: '0', duration: 1.5, ease: 'linear' },
          '1.5'
        )
        .to(
          '#kimg2',
          { x: '15px', y: '-15px', duration: 1.5, ease: 'linear' },
          '3'
        )
        .to('#kimg2', { x: '0', y: '0', duration: 1.5, ease: 'linear' }, '4.5')
        .to(
          '#kimg2',
          { x: '-15px', y: '-15px', duration: 1.5, ease: 'linear' },
          '6'
        )
        .to(
          '#kimg2',
          { x: '-25px', y: '0', duration: 1.5, ease: 'linear' },
          '7.5'
        )
        .to(
          '#kimg2',
          { x: '-15px', y: '15px', duration: 1.5, ease: 'linear' },
          '9'
        )
        .to(
          '#kimg2',
          { x: '0', y: '0', duration: 1.5, ease: 'linear' },
          '10.5'
        );
    }
    setTimeout(kimg2, 8700);
    function kimg3() {
      gsap
        .timeline({ repeat: -1, repeatDelay: 0 })
        .to(
          '#kimg3',
          { x: '20px', y: '15px', duration: 2, ease: 'linear' },
          '0'
        )
        .to(
          '#kimg3',
          { x: '10px', y: '25px', duration: 1.5, ease: 'linear' },
          '2'
        )
        .to(
          '#kimg3',
          { x: '-10px', y: '0', duration: 2.5, ease: 'linear' },
          '3.5'
        )
        .to(
          '#kimg3',
          { x: '-30px', y: '-5px', duration: 2, ease: 'linear' },
          '6'
        )
        .to(
          '#kimg3',
          { x: '-10px', y: '-20px', duration: 2, ease: 'linear' },
          '8'
        )
        .to(
          '#kimg3',
          { x: '15px', y: '-10px', duration: 2, ease: 'linear' },
          '10'
        )
        .to('#kimg3', { x: '0', y: '0', duration: 2, ease: 'linear' }, '12');
    }
    setTimeout(kimg3, 7200);
  }, []);

  return (
    <>
      <Opanimation/>
      <section className="kanimation">
        <ul>
          {kanimation.map((data, index) => (
            <li key={index}>
              <img id={data.id} src={data.link} alt={index} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Ugoki;
