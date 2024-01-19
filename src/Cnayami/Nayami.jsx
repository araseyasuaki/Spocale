import './Nayami.scss'
import Data from '../Data/Data';

import React from 'react'

const Nayami = () => {
    const { nayamikyatti, nayamitext, masume } = Data();
    return (
    <>
        <section className='nayami'>
            {nayamikyatti.map((data, index)=>(
                <h2>{data.text}</h2>
            ))}
            <section className='nayamipaneru'>
                <ul>
                    {nayamitext.map((data) => (
                        <li>
                            <h3>{data.text}</h3>
                            {masume.map((data, index)=>(
                                <img src={data.link}/>
                            ))}
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    </>
    )
}

export default Nayami