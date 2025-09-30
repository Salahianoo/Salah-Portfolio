@echo off
echo Starting Blog Project servers...

echo Starting API server on port 4000...
start "Blog API Server" cmd /k "cd /d \"c:\Users\salah\OneDrive\Desktop\JS Projects\Salah Portfolio\Blog Project\" && node index.js"

timeout /t 3 /nobreak > nul

echo Starting Frontend server on port 3001...
start "Blog Frontend Server" cmd /k "cd /d \"c:\Users\salah\OneDrive\Desktop\JS Projects\Salah Portfolio\Blog Project\" && node server.js"

echo.
echo Blog servers are starting...
echo API Server: http://localhost:4000
echo Frontend Server: http://localhost:3001
echo.
pause