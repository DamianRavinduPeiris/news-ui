import React, { useState } from 'react';
import NewsList from './components/NewsList';
import NewsDetail from './components/NewsDetail';
import Categories from './components/Categories';

import './App.css';

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

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  return (
    <div className="app-container">
      <h1>News Portal</h1>
      <div className="layout">
        <aside className="sidebar">
          <Categories onSelect={cat => {
            setSelectedCategory(cat);
            setSelectedNews(null);
          }} />
        </aside>
        <main className="content">
          {!selectedCategory ? (
            <div style={{textAlign: 'center', color: '#888', fontSize: '1.2rem', marginTop: '2rem'}}>Select a category to view news.</div>
          ) : !selectedNews ? (
            <NewsList category={selectedCategory} onSelect={setSelectedNews} />
          ) : (
            <NewsDetail news={selectedNews} onBack={() => setSelectedNews(null)} />
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
