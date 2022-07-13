import './style.css';
import { useState, useEffect } from 'react';
import PostInfo from '../../components/PostInfo';
import PostEditor from '../../components/PostEditor';
import PostPublish from '../../components/PostPublish';

const PostForm = () => {
  let [stepCounter, setStepCounter] = useState(0);

  useEffect(() => {
    if (localStorage.getItem('stepCounter') !== null) {
      setStepCounter(Number(localStorage.getItem('stepCounter')));
    }
  }, []);

  const handlePublish = () => {
    setStepCounter(0);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <PostInfo />;
      case 1:
        return <PostEditor />;
      case 2:
        return <PostPublish onPublish={handlePublish} />;
      default:
        break;
    }
  };

  const nextStep = () => {
    setStepCounter(stepCounter + 1);
    localStorage.setItem('stepCounter', stepCounter + 1);
  };

  const previousStep = () => {
    setStepCounter(stepCounter - 1);
    localStorage.setItem('stepCounter', stepCounter - 1);
  };

  return (
    <>
      <div className="post-form">
        <div className="post-form--steps">{getStepContent(stepCounter)}</div>
        <div className="post-form--controls">
          {stepCounter <= 2 && stepCounter > 0 ? (
            <button className="step-btn previous" onClick={previousStep}>
              Back
            </button>
          ) : null}
          {stepCounter >= 0 && stepCounter < 2 ? (
            <button className="step-btn next" onClick={nextStep}>
              Next
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default PostForm;
