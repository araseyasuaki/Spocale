import './worries.scss';
import { worriescatch, worriestext, textbox } from '../Zdata/data';

import React from 'react';

const Nayami = () => {
  return (
    <>
      <section className="worries">
        {worriescatch.map((data, index) => (
          <h2>{data.text}</h2>
        ))}
        <section className="worriespanel">
          <ul>
            {worriestext.map((data) => (
              <li>
                <h3>{data.text}</h3>
                {textbox.map((data, index) => (
                  <img src={data.link} />
                ))}
              </li>
            ))}
          </ul>
        </section>
      </section>
    </>
  );
};

export default Nayami;
