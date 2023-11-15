import React, { useEffect, useState } from "react";

const News = () => {
    const[articles, setNews] = useState(null);

    useEffect(() => {
        fetch('https://api.spaceflightnewsapi.net/v4/articles/')
            .then(response => response.json())
            .then(data => setNews(data.results));
    },[])

    console.log(articles);
    
    return(
        <>
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              <h2>{article.title}</h2>
              <p>{article.summary}</p>
              <a href={article.url}>Read more</a>
            </li>
          ))}
        </ul>
        </>
    )
}

export default News;