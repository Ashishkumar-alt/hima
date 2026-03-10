# Dev Bhoomi Himachal - Temple Visit Planner

A static website to help plan temple visits in Himachal Pradesh, featuring weather checks, temple listings, detailed information, and nearby hotel contacts.

## Features

- **Weather Check**: Real-time weather information for cities in Himachal Pradesh
- **Temple Listings**: Browse top 10 temples with search functionality
- **Detailed Pages**: Individual temple pages with history, timings, maps, and galleries
- **Hotel Contacts**: Direct call links to nearby accommodations
- **Responsive Design**: Mobile-friendly interface

## Development Setup

### Prerequisites
- Python 3.x (for local server)
- Node.js (optional, for npm scripts)
- Git

### Quick Start

1. Clone the repository
2. Run the development server:
   ```bash
   npm run dev
   # or
   python -m http.server 8000
   ```
3. Open `http://localhost:8000` in your browser

### Available Scripts

- `npm start` / `npm run dev` - Start local development server
- `npm run serve` - Alternative server command
- `npm run build` - Build command (no-op for static site)
- `npm run lint` - Lint command (no-op)
- `npm run test` - Test command (no-op)

## Project Structure

```
/
├── .github/workflows/    # GitHub Actions CI/CD
├── index.html            # Home page
├── temples.html          # Temple listing
├── temple-detail.html    # Temple details
├── style.css             # Styles
├── script.js             # JavaScript
├── package.json          # NPM configuration
├── README.md             # This file
├── .gitignore            # Git ignore rules
└── images/               # Temple photos
```

## Deployment

This project is configured for automatic deployment to GitHub Pages:

1. Push to the `main` branch
2. GitHub Actions will automatically deploy to GitHub Pages
3. Access your site at `https://yourusername.github.io/repository-name`

## API Configuration

Weather data uses OpenWeatherMap API. The API key is currently hardcoded in `script.js`. For production:

1. Sign up at [OpenWeatherMap](https://openweathermap.org/api)
2. Replace the `WEATHER_API_KEY` in `script.js`
3. Consider moving to environment variables for security

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## Future Enhancements

- Hindi language localization
- Additional temples and locations
- User reviews and ratings
- Offline PWA functionality
- Temple event notifications

## License

Copyright 2026 Dev Bhoomi Himachal</content>
<parameter name="filePath">c:\Users\hp\Desktop\dev\README.md