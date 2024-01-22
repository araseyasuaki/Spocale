import './background.scss';
import { background } from '../../Zdata/data';
import Kanimation from './kanimation/kanimation';
import Catch from './catch/catch';

const Haikei = () => {
  return (
    <>
      <section className="background">
        {background.map((data, index) => (
          <img id={data.id} src={data.link} key={index} alt={index} />
        ))}
        <Kanimation />
        <Catch />
      </section>
    </>
  );
};

export default Haikei;
