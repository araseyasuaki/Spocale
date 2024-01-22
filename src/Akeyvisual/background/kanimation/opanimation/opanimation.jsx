import './opanimation.scss';
import { supokare } from '../../../../Zdata/data';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

function Opugoki() {
  useEffect(() => {
    const deletebtn = () => {
      const supokare = document.querySelectorAll('.opanimation');
      supokare.forEach((contentoff) => {
        contentoff.parentNode.removeChild(contentoff);
      });
    };
    gsap.to('.opanimation', {
      backgroundImage: 'linear-gradient(to left, #dF0000, #bF0000)',
      duration: 2,
      ease: 'power1.inOut',
    });
    gsap.to('.opanimation', { y: '-100%', duration: 0.7, opacity: 0 }, '2');
    gsap.set('#su', { x: '-300px', y: '-200px', opacity: 0 });
    gsap.to('#su', { x: '0px', y: '0px', opacity: 1, duration: 0.6 }, '0.1');
    gsap.to('#su', { duration: 0.7, opacity: 0 }, '2');
    gsap.set('#po', { x: '-270px', y: '220px', opacity: 0 });
    gsap.to('#po', { x: '0px', y: '0px', opacity: 1, duration: 0.6 }, '0.4');
    gsap.to('#po', { duration: 0.7, opacity: 0 }, '2');
    gsap.set('#ka', { x: '180px', y: '-250px', opacity: 0 });
    gsap.to('#ka', { x: '0px', y: '0px', opacity: 1, duration: 0.6 }, '0.7');
    gsap.to('#ka', { duration: 0.7, opacity: 0 }, '2');
    gsap.set('#re', { x: '230px', y: '120px', opacity: 0 });
    gsap.to('#re', { x: '0px', y: '0px', opacity: 1, duration: 0.6 }, '1');
    gsap.to('#re', { duration: 0.7, opacity: 0, onComplete: deletebtn }, '2');
  }, []);
  return (
    <>
      <section className="opanimation">
        <ul>
          {supokare.map((data, index) => (
            <li key={index}>
              <img id={data.id} src={data.link} alt={index} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Opugoki;
