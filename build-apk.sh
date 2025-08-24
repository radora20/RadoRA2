#!/bin/bash
echo "RemmiaDo Trading App APK Build Script"
echo "======================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if Expo CLI is installed
if ! command -v expo &> /dev/null; then
    echo "Installing Expo CLI..."
    npm install -g expo-cli
fi

# Install dependencies
echo "Installing dependencies..."
npm install

# Build Android APK
echo "Building Android APK..."
echo "This will open a browser window for Expo authentication."
echo "Please follow the instructions to build the APK."

# Try to build the APK
npx expo build:android

echo ""
echo "If the build is successful, you can download the APK from:"
echo "https://expo.dev/accounts/[your-username]/projects/remmiado-trading/builds"
echo ""
echo "Alternatively, you can run the app on your phone using:"
echo "1. Install Expo Go app on your Android phone"
echo "2. Run: npx expo start"
echo "3. Scan the QR code with your phone's camera"
