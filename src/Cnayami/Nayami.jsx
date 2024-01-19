import './Nayami.scss';
import { nayamikyatti, nayamitext, masume } from '../Data/Data';

import React from 'react';

const Nayami = () => {
  return (
    <>
      <section className="nayami">
        {nayamikyatti.map((data, index) => (
          <h2>{data.text}</h2>
        ))}
        <section className="nayamipaneru">
          <ul>
            {nayamitext.map((data) => (
              <li>
                <h3>{data.text}</h3>
                {masume.map((data, index) => (
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
