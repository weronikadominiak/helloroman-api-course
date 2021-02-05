import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Article, ArticleImage, Articles, Title, Wrapper } from 'components/SchoolNews/SchoolNews.styles';

const  DATO_TOKEN = "e4d2a225e52a023d1d722f2dd88c33"
const query =  ` {
  allArticles {
    title
    content
    image {
      url
      alt
    }
  }
}
`

const SchoolNews = () => {
  const [articles, setArticles] = useState();

  useEffect(() => {
    fetch('https://graphql.datocms.com', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer: ${DATO_TOKEN} `,
      },
      body: JSON.stringify({
        query
      })
    })
    .then(res => res.json())
    .then(({ data: { allArticles } }) => setArticles(allArticles))
    .catch(err => console.log(err))
  }, [])
  return (
    <Wrapper>
      <Title>Gazetka szkolna</Title>
      <Articles>
        {articles && articles.map(article => (
          <Article>
            <ArticleImage>
              <img src={article.image.url} />
            </ArticleImage>
            <div>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
            </div>
        </Article>
        ))}
      </Articles>
    </Wrapper>
)};

SchoolNews.propTypes = {};

export default SchoolNews;
