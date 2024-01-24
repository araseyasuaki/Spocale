import './logo.scss';
import { logotext, logoimg } from '../../Zdata/data';

const Logo = () => {
  return (
    <>
      <section className="logo">
        <a href=''>
        <p>{logotext[0].text}</p>
        <img
          id={logoimg[0].id}
          src={logoimg[0].link}
          alt="スポカレロゴ"
        />
        </a>
      </section>
    </>
  );
};

export default Logo;
