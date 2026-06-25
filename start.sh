#!/bin/bash
# ELMARAGHY Law Firm - Quick Start Script
# This script helps set up and run the project locally

echo "🎉 Welcome to ELMARAGHY Law Firm Website Setup!"
echo "=================================================="
echo ""

# Check if Python or Node is available
if command -v python3 &> /dev/null; then
    echo "✅ Python 3 detected"
    echo ""
    echo "Starting local server on port 8000..."
    echo "📍 Visit: http://localhost:8000"
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo ""
    python3 -m http.server 8000
elif command -v node &> /dev/null; then
    echo "✅ Node.js detected"
    echo ""
    echo "Installing http-server globally..."
    npm install -g http-server
    echo ""
    echo "Starting local server..."
    echo "📍 Visit: http://localhost:8080"
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo ""
    http-server -p 8080
else
    echo "❌ Please install Python 3 or Node.js to run the local server"
    echo ""
    echo "📖 Instructions:"
    echo "   Python: https://www.python.org/downloads/"
    echo "   Node.js: https://nodejs.org/"
    echo ""
    echo "Manual Setup:"
    echo "   1. Download Python or Node.js"
    echo "   2. Open terminal/command prompt in this directory"
    echo "   3. Run: python3 -m http.server 8000"
    echo "   4. Visit: http://localhost:8000"
fi
