import './Logo.scss';
import { logotext, logoimg } from '../../Zdata/data';

const Logo = () => {
  return (
    <>
      <section className="logo">
        <p>{logotext[0].text}</p>
        <img
          id={logoimg[0].id}
          src={logoimg[0].link}
          alt="スポカレロゴ"
        />
      </section>
    </>
  );
};

export default Logo;
