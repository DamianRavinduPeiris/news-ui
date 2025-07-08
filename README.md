# News UI

A modern, responsive React application for browsing news by category.

## Features
- Browse news categories in a sidebar
- Click a category to view news headlines for that category
- Click a headline to view the full news content
- Clean, modern, and responsive UI
- Axios for API requests

  ![{58D640D0-4AD7-48B2-A91A-DD13D36B240D}](https://github.com/user-attachments/assets/f8077e26-78d4-4ad3-b3fa-b5217e62081e)

  ![{D5CB0B7E-0140-42AD-B233-567DD47A8C18}](https://github.com/user-attachments/assets/7fd20648-f5c9-45e4-8980-62a742191bcd)


  ![{DD841A83-659A-4310-9D65-64029A313D2A}](https://github.com/user-attachments/assets/b30848b3-c630-4956-a573-9e35796baff3)



## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm
- Backend API running at `http://localhost:8080` with endpoints:
  - `GET /api/categories` (returns categories)
  - `GET /api/news` (returns news with categories)

### Installation

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd news-ui
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure
```
news-ui/
├── public/
├── src/
│   ├── components/
│   │   ├── Categories.tsx
│   │   ├── NewsList.tsx
│   │   └── NewsDetail.tsx
│   ├── App.tsx
│   ├── App.css
│   └── ...
├── package.json
├── vite.config.ts
└── README.md
```

## Customization
- Update API endpoints in the components if your backend URL changes.
- Style overrides can be made in `App.css`.

## License
MIT
