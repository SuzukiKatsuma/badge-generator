import style from "./style.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <p>
        <a
          href="https://github.com/SuzukiKatsuma/badge-generator"
          rel="noopener noreferrer"
          target="_blank"
        >
          "Badge Generator"
        </a>{" "}
        made with React by{" "}
        <a
          href="https://github.com/SuzukiKatsuma"
          rel="noopener noreferrer"
          target="_blank"
        >
          @SuzukiKatsuma
        </a>
      </p>
    </footer>
  );
};

export default Footer;
