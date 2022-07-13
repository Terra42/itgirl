import './style.css';
import Content from '../../components/Content';

const PostPreview = ({ heading, subheading, content }) => {
  return (
    <div className="post-preview">
      <div className="post-preview--container">
        <div className="post-preview--content">
          <h2>{heading}</h2>
          <p>{subheading}</p>
          {content.map((line, index) => (
            <Content line={line} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
