# RemmiaDo AI Trading App

## Overview
RemmiaDo is an AI-powered cryptocurrency trading application built with React Native for the mobile frontend and Flask for the backend. The app provides real-time market data, AI-driven trading predictions, and trade execution capabilities.

## Features

### Mobile App (React Native)
- **Dashboard**: Real-time market data and portfolio overview
- **Analysis Screen**: AI-powered trading predictions and trend analysis
- **Trading Screen**: Buy/sell interface with trade execution
- **Settings Screen**: User preferences and app configuration

### Backend (Flask)
- **Real-time Data Processing**: Market data collection and processing
- **AI Engine**: Machine learning models for trade prediction
- **Trade Execution**: Simulated trading with risk management
- **Database**: SQLite storage for trades, market data, and predictions

## Tech Stack

### Frontend
- React Native
- React Navigation
- React Native Vector Icons
- React Native Chart Kit

### Backend
- Flask
- Flask-CORS
- Pandas & NumPy
- SQLite
- WebSockets (for real-time data)

## Project Structure

```
RemmiaDo-Trading-App/
├── src/
│   ├── screens/
│   │   ├── DashboardScreen.js
│   │   ├── AnalysisScreen.js
│   │   ├── TradingScreen.js
│   │   └── SettingsScreen.js
│   └── components/ (to be added)
├── backend/
│   ├── app.py
│   ├── ai_engine.py
│   ├── data_processor.py
│   ├── database.py
│   ├── requirements.txt
│   ├── start_server.py
│   └── README.md
├── App.js
├── package.json
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- Python 3.7 or higher
- React Native development environment
- iOS/Android simulator or physical device

### Mobile App Setup

1. Install dependencies:
   ```bash
   cd RemmiaDo-Trading-App
   npm install
   ```

2. Start the React Native development server:
   ```bash
   npx react-native start
   ```

3. Run on Android:
   ```bash
   npx react-native run-android
   ```

4. Run on iOS:
   ```bash
   npx react-native run-ios
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Start the backend server:
   ```bash
   python start_server.py
   ```

The backend server will run on `http://localhost:5000`.

## API Endpoints

### Market Data
- `GET /api/market-data?coins=btc,eth,ada` - Get market data for specified coins

### Analysis
- `GET /api/analyze/btc` - Analyze Bitcoin and return AI predictions

### Trading
- `POST /api/trade` - Execute a trade
- `GET /api/history/btc` - Get trade history for Bitcoin

### Global Data
- `GET /api/global-trades` - Get global trade data for AI learning

## Usage

1. **Dashboard**: View real-time market data and portfolio performance
2. **Analysis**: Get AI predictions for specific cryptocurrencies
3. **Trading**: Execute buy/sell orders based on AI recommendations
4. **Settings**: Configure app preferences and risk management

## Development Notes

- The app uses simulated market data for development purposes
- AI predictions are based on simulated machine learning models
- Trade execution is simulated (no real funds are used)
- The backend can be extended to connect to real cryptocurrency exchanges

## Future Enhancements

- Real exchange integration (Binance, Coinbase, etc.)
- Advanced machine learning models
- Real-time WebSocket connections
- Push notifications for price alerts
- Portfolio management features
- Social trading capabilities

## License

This project is licensed under the MIT License.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Support

For support and questions, please open an issue in the GitHub repository.
