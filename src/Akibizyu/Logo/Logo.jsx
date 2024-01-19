import './Logo.scss';
import Data from '../../Data/Data';

const Logo = () => {
  const { logotext, logoimg } = Data();
  return (
    <>
      <section className="logo">
        <p>{logotext[0].text}</p>
        {logoimg.map((data, index) => (
          <img id={data.id} src={data.link} key={index} alt={index} />
        ))}
      </section>
    </>
  );
};

export default Logo;
