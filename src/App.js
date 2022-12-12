import { useEffect, useState } from 'react';
import './App.css';
import News from './components/News/News';

function App() {
  const [article,setArticle] = useState([]);
  useEffect( () =>{
    const url = 'https://newsapi.org/v2/everything?q=tesla&from=2022-10-27&sortBy=publishedAt&apiKey=13003a8ff37a4f158736a25c94bb549f';
    fetch(url)
     .then(res => res.json())
     .then(data => setArticle(data.articles))
  },[])
  return (
    <div className="App">
      <h2>Use Of MUI</h2>

      {
        article.map(news =><News key= {news.url} article= {news}></News>)
      }
    </div>
  );
}

export default App;
