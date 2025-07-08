import React from 'react';

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

interface NewsDetailProps {
  news: NewsItem | null;
  onBack: () => void;
}

const NewsDetail: React.FC<NewsDetailProps> = ({ news, onBack }) => {
  if (!news) return null;
  return (
    <div className="news-detail">
      <button onClick={onBack} className="back-btn">Back</button>
      <h2>{news.headLine}</h2>
      <div className="categories">
        {news.newsCategories.map(cat => (
          <span key={cat.categoryId} className="category-chip">{cat.categoryName}</span>
        ))}
      </div>
      <p className="news-content">{news.newsContent}</p>
    </div>
  );
};

export default NewsDetail;
