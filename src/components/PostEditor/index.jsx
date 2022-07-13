import './style.css';
import { useState, useEffect } from 'react';
import Content from '../../components/Content/index.jsx';

const PostEditor = () => {
  const [content, setContent] = useState([]);

  const [type, setType] = useState('p');
  const [text, setText] = useState('');

  useEffect(() => {
    if (localStorage.getItem('postContent') !== null) {
      const postContent = JSON.parse(localStorage.getItem('postContent'));
      setContent(postContent);
    }
  }, []);

  const addContent = () => {
    content.push({ type, text });
    setContent(content);
    setType('p');
    setText('');
    localStorage.setItem('postContent', JSON.stringify(content));
  };

  const deleteContent = () => {
    localStorage.removeItem('postContent');
    setContent([]);
  };

  return (
    <>
      <div className="post-editor">
        <h3>2. Add Post content</h3>
        <div className="post-editor--content">
          <div className="post-editor--inputs container">
            <h4>Choose type of text:</h4>
            <div className="radio-input">
              <input
                type="radio"
                name="type"
                id="h2"
                value="h2"
                onChange={(e) => setType(e.target.value)}
              />
              <label htmlFor="h2">Main title</label>
            </div>
            <div className="radio-input">
              <input
                type="radio"
                name="type"
                id="h3"
                value="h3"
                onChange={(e) => setType(e.target.value)}
              />
              <label htmlFor="h3">Smaller title</label>
            </div>
            <div className="radio-input">
              <input
                type="radio"
                name="type"
                id="p"
                value="p"
                onChange={(e) => setType(e.target.value)}
                checked
              />
              <label htmlFor="p">Standard text</label>
            </div>
            <div className="text">
              <h4>Here comes your text:</h4>
              <textarea
                name="text"
                id="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="container" id="preview">
            <h4>Text preview:</h4>
            <div className="post-editor--preview">
              {content.length > 0
                ? content.map((line, index) => (
                    <Content line={line} key={index} />
                  ))
                : null}
              <Content line={{ type, text }} />
            </div>
          </div>
        </div>
        <div className="controls post-editor--controls">
          <button className="action-btn" onClick={addContent}>
            Add content
          </button>
          <button className="action-btn delete" onClick={deleteContent}>
            Delete content
          </button>
        </div>
      </div>
    </>
  );
};

export default PostEditor;
