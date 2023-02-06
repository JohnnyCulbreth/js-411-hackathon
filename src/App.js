import { Component } from 'react';
import axios from 'axios';
import './App.css';
import ListArticles from './component/ListArticles';
import acanews from './acanews.png';

class App extends Component {
  constructor() {
    super();
    this.state = {
      arrayOfStories: [],
      url: '',
    };
  }

  componentDidMount() {
    axios
      .get(
        'http://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=50'
      )
      .then((res) => {
        const arrayOfStories = res.data.hits;
        this.setState({ arrayOfStories });
      });
  }

  componentDidUpdate() {
    axios
      .get(
        `http://hn.algolia.com/api/v1/search?query=${this.state.url}&hitsPerPage=50`
      )
      .then((res) => {
        const arrayOfStories = res.data.hits;
        this.setState({ arrayOfStories });
      });
  }

  handleChange = (e) => {
    this.setState({
      url: e.target.value,
    });
  };

  render() {
    return (
      <div className='App'>
        <header className='Header'>
          <img src={acanews} />
          <form>
            <input
              name='url'
              type='text'
              value={this.state.url}
              onChange={(e) => {
                this.handleChange(e);
              }}
              placeholder='Search stories by title, url or author'
            ></input>
          </form>
        </header>
        <div className='Articles'>
          <ListArticles article={this.state.arrayOfStories} />
        </div>
      </div>
    );
  }
}

export default App;
