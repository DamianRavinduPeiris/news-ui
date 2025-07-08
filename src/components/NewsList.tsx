import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Category {
  categoryId: string;
  categoryName: string;
}

interface NewsItem {
  newsId: string;
  headLine: string;
  newsContent: string;
  newsCategories: Category[];
}

interface NewsListProps {
  category: Category;
  onSelect: (news: NewsItem) => void;
}

const NewsList: React.FC<NewsListProps> = ({ category, onSelect }) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!category) return;
    axios.get<NewsItem[]>('http://localhost:8080/api/news')
      .then(res => {
        // Filter news by selected category
        const filtered = res.data.filter(item =>
          item.newsCategories.some(cat => cat.categoryId === category.categoryId)
        );
        setNews(filtered);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch news.');
        setLoading(false);
      });
  }, [category]);

  if (loading) return <div>Loading news...</div>;
  if (error) return <div>{error}</div>;
  if (news.length === 0) return <div>No news found for this category.</div>;

  return (
    <div className="news-list">
      <h2 style={{marginBottom: '1.5rem', color: '#2d3a4b', fontWeight: 700, fontSize: '1.5rem'}}>News Headlines</h2>
      <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
        {news.map(item => (
          <li
            key={item.newsId}
            className="news-headline"
            onClick={() => onSelect(item)}
            style={{
              cursor: 'pointer',
              padding: '1.2rem 1rem',
              borderRadius: '10px',
              marginBottom: '1rem',
              background: '#f7faff',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              transition: 'background 0.2s, box-shadow 0.2s',
              border: '1px solid #e3eafc',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
            onMouseOver={e => (e.currentTarget.style.background = '#e3eafc')}
            onMouseOut={e => (e.currentTarget.style.background = '#f7faff')}
          >
            <div className="headline" style={{fontWeight: 600, fontSize: '1.15rem', color: '#1a2233'}}>{item.headLine}</div>
            <div className="categories" style={{marginTop: '0.2rem'}}>
              {item.newsCategories.map(cat => (
                <span
                  key={cat.categoryId}
                  className="category-chip"
                  style={{
                    display: 'inline-block',
                    background: '#d1e7ff',
                    color: '#1a2233',
                    borderRadius: '12px',
                    padding: '0.2rem 0.8rem',
                    fontSize: '0.92rem',
                    marginRight: '0.5rem',
                    marginBottom: '0.2rem',
                    fontWeight: 500,
                  }}
                >
                  {cat.categoryName}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
