@echo off
REM ELMARAGHY Law Firm - Quick Start Script (Windows)
REM This script helps set up and run the project locally

echo.
echo ================================
echo Welcome to ELMARAGHY Law Firm!
echo ================================
echo.

REM Check if Python is available
where python >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo [OK] Python detected
    echo.
    echo Starting local server on port 8000...
    echo.
    echo Visit: http://localhost:8000
    echo.
    echo Press Ctrl+C to stop the server
    echo.
    python -m http.server 8000
    goto end
)

REM Check if Python3 is available
where python3 >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo [OK] Python 3 detected
    echo.
    echo Starting local server on port 8000...
    echo.
    echo Visit: http://localhost:8000
    echo.
    echo Press Ctrl+C to stop the server
    echo.
    python3 -m http.server 8000
    goto end
)

REM Check if Node.js is available
where node >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo [OK] Node.js detected
    echo.
    echo Installing http-server...
    npm install -g http-server
    echo.
    echo Starting local server on port 8080...
    echo.
    echo Visit: http://localhost:8080
    echo.
    echo Press Ctrl+C to stop the server
    echo.
    http-server -p 8080
    goto end
)

REM If nothing found
echo [ERROR] Python or Node.js not found
echo.
echo Please install one of the following:
echo   - Python: https://www.python.org/downloads/
echo   - Node.js: https://nodejs.org/
echo.
echo Manual Setup:
echo   1. Download and install Python or Node.js
echo   2. Open Command Prompt in this directory
echo   3. Run: python -m http.server 8000
echo   4. Visit: http://localhost:8000

:end
pause
