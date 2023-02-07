import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import ListArticles from './component/ListArticles';
import acanews from './acanews.png';

const App = () => {
  const [arrayOfStories, setArrayOfStories] = useState([]);
  const [url, setUrl] = useState('');

  useEffect(() => {
    axios
      .get(
        'http://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=50'
      )
      .then((res) => {
        setArrayOfStories(res.data.hits);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://hn.algolia.com/api/v1/search?query=${url}&hitsPerPage=50`)
      .then((res) => {
        setArrayOfStories(res.data.hits);
      });
  }, [url]);

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div className='App'>
      <header className='Header'>
        <img src={acanews} />
        <form>
          <input
            name='url'
            type='text'
            value={url}
            onChange={handleChange}
            placeholder='Search stories by title, url or author'
          />
        </form>
      </header>
      <div className='Articles'>
        <ListArticles article={arrayOfStories} />
      </div>
    </div>
  );
};

export default App;
