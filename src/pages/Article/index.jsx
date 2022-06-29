import './style.css';
import Content from '../../components/Content';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../db';
import { doc, getDoc } from 'firebase/firestore';
import { getTimePosted } from '../../utils.js';

const Article = () => {
  const [article, setArticle] = useState(null);

  let params = useParams();

  useEffect(() => {
    const postsRef = doc(db, 'posts', params.postId);
    getDoc(postsRef)
      .then((doc) => {
        if (doc.exists) {
          setArticle(doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log('No such document!');
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error);
      });
  }, [params.postId]);

  return (
    <article className="article">
      {article !== null || undefined ? (
        <div className="article-container">
          <div className="article-header">
            <img src="../../img/logo.jpg" alt="Logo" className="article-logo" />
            <p className="article-author">{article.author}</p>
            <span className="round-divider"></span>
            <p className="article-posted">{getTimePosted(article.posted)}</p>
            <span className="round-divider"></span>
            <p className="readTime">{article.readTime} min read</p>
          </div>
          <div className="article-content">
            <h2>{article.heading}</h2>
            <p>{article.subheading}</p>
            {article.content.map((line, index) => (
              <Content line={line} key={index} />
            ))}
          </div>
          {/*           <div className="article-footer">
            <p className="article-views">{article.views} views</p>
            <p className="article-comments">{article.comments} comments</p>
          </div> */}
        </div>
      ) : null}
    </article>
  );
};

export default Article;
