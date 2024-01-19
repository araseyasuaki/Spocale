import './Logo.scss';
import { logotext, logoimg } from '../../Data/Data';

const Logo = () => {
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
