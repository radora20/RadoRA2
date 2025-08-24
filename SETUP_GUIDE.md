# RemmiaDo Trading App - Setup and Installation Guide

## 📱 Mobile App Installation

### Option 1: Build APK (Recommended for Production)
1. **Prerequisites:**
   - Node.js installed on your computer
   - Expo account (free)

2. **Build Steps:**
   ```bash
   # Navigate to project directory
   cd RemmiaDo-Trading-App
   
   # Run the build script
   ./build-apk.sh
   
   # Or manually:
   npm install
   npx expo build:android
   ```

3. **After Build:**
   - Expo will provide a download link for the APK
   - Download the APK to your Android phone
   - Enable "Install from unknown sources" in phone settings
   - Install the APK

### Option 2: Expo Go (Development/Testing)
1. **On your Android phone:**
   - Install "Expo Go" app from Play Store

2. **On your computer:**
   ```bash
   cd RemmiaDo-Trading-App
   npm install
   npx expo start
   ```

3. **On your phone:**
   - Open Expo Go app
   - Scan the QR code shown in terminal
   - App will load automatically

## 🖥️ Backend Server Setup

### Prerequisites:
- Python 3.7+
- pip package manager

### Installation:
```bash
cd backend
pip install -r requirements.txt
```

### Running the Server:
```bash
python start_server.py
```

The server will run on `http://localhost:5000`

## 🔧 Configuration

### API Endpoints:
The mobile app connects to these backend endpoints:
- `GET /api/market-data` - Market data
- `GET /api/analyze/{coin}` - AI analysis
- `POST /api/trade` - Execute trades
- `GET /api/history/{coin}` - Trade history

### Environment Variables (Optional):
Create a `.env` file in backend directory:
```
FLASK_ENV=development
DATABASE_URL=sqlite:///trading_data.db
```

## 📊 Features

### Mobile App:
- ✅ Real-time market dashboard
- ✅ AI-powered analysis screen
- ✅ Trading interface
- ✅ Settings and configuration
- ✅ Turkish language support

### Backend:
- ✅ Flask REST API
- ✅ SQLite database
- ✅ AI prediction engine
- ✅ Real-time data processing
- ✅ Trade execution logic

## 🚀 Testing

### Test Backend:
```bash
cd backend
python test_backend.py
```

### Test Mobile App:
- Use Expo Go for live testing
- All screens are functional
- API integration ready

## 📦 Project Structure

```
RemmiaDo-Trading-App/
├── src/screens/          # React Native screens
├── backend/              # Flask API server
├── assets/               # App icons and images
├── App.js               # Main app component
├── app.json             # Expo configuration
├── package.json         # Node.js dependencies
└── build-apk.sh         # APK build script
```

## ⚠️ Troubleshooting

### Common Issues:
1. **Build fails:** Make sure Node.js and Expo CLI are installed
2. **App doesn't connect:** Ensure backend server is running
3. **Dependencies issues:** Run `npm install` and `pip install -r requirements.txt`

### Support:
For issues with the app, check:
- Expo documentation: https://docs.expo.dev
- React Native documentation: https://reactnative.dev

## 📞 Support

If you encounter any issues:
1. Check this guide first
2. Ensure all prerequisites are installed
3. Verify backend server is running
4. Check network connectivity

The app is now ready for use! 🎉
