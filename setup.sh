#!/bin/bash

echo "Setting up BioPro Landing Page..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Node.js is not installed. Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "Node.js found. Installing dependencies..."
echo ""

# Install dependencies
npm install

if [ $? -ne 0 ]; then
    echo "Failed to install dependencies. Please check your internet connection."
    exit 1
fi

echo ""
echo "Dependencies installed successfully!"
echo ""
echo "Starting development server..."
echo "The application will open at http://localhost:3000"
echo ""

# Start development server
npm run dev
