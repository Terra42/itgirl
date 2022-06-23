import './style.css';

const Content = ({ line }) => {
  const CustomTag = `${line.type}`;

  return <CustomTag className={line.type}>{line.text}</CustomTag>;
};

export default Content;
