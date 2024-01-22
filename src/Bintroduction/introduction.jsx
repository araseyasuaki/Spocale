import './introduction.scss';
import { introductiontext, downloadbtn } from '../Zdata/data';

const Dounyuutext = () => {
  return (
    <>
      <section className="introduction">
        <ul>
          {introductiontext.map((data, index) => (
            <li key={index}>{data.text}</li>
          ))}
        </ul>
        <section className="downloadbtn">
          {downloadbtn.map((data, index) => (
            <a href={data.url} key={index}>
              <img id={data.id} src={data.link} alt={index} />
            </a>
          ))}
        </section>
      </section>
    </>
  );
};

export default Dounyuutext;
