import './Haikei.scss';
import Data from '../../Data/Data';
import Kyatti from './Kyatti/Kyatti';
import Ugoki from './Ugoki/Ugoki';

const Haikei = () => {
  const { haikei } = Data();
  return (
    <>
      <section className="haikei">
        {haikei.map((data, index) => (
          <img id={data.id} src={data.link} key={index} alt={index} />
        ))}
        <Kyatti />
        <Ugoki />
      </section>
    </>
  );
};

export default Haikei;
