import './Dounyuutext.scss';
import { dounyuutext, daunrodorinku } from '../Data/Data';

const Dounyuutext = () => {
  return (
    <>
      <section className="dounyuutext">
        <ul>
          {dounyuutext.map((data, index) => (
            <li key={index}>{data.text}</li>
          ))}
        </ul>
        <section className="daunrodorinku">
          {daunrodorinku.map((data, index) => (
            <a href={data.url} key={index}>
              <img id={data.id} src={data.link} alt={index} />
            </a>
          ))}
        </section>
        <section className="daunrodobtn"></section>
      </section>
    </>
  );
};

export default Dounyuutext;
45;
