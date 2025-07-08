import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Category {
  categoryId: string;
  categoryName: string;
}

interface CategoriesProps {
  onSelect: (category: Category) => void;
}

const Categories: React.FC<CategoriesProps> = ({ onSelect }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get<Category[]>('http://localhost:8080/api/categories')
      .then(res => {
        setCategories(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch categories.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading categories...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="categories-list" style={{width: '100%', background: '#fff', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: '1.5rem 1rem', marginBottom: '2rem'}}>
      <h3 style={{margin: 0, marginBottom: '1rem', color: '#2d3a4b', fontWeight: 700, fontSize: '1.2rem'}}>Categories</h3>
      <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '0.7rem'}}>
        {categories.map(cat => (
          <li
            key={cat.categoryId}
            style={{
              background: '#e3eafc',
              color: '#1a2233',
              borderRadius: '12px',
              padding: '0.3rem 1.1rem',
              fontSize: '1rem',
              fontWeight: 500,
              boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
              cursor: 'pointer'
            }}
            onClick={() => onSelect(cat)}
          >
            {cat.categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
