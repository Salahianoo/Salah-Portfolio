# PowerShell script to start both blog servers
Write-Host "Starting Blog Project servers..." -ForegroundColor Green

# Start the API server (index.js) in the background
Write-Host "Starting API server on port 4000..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd 'c:\Users\salah\OneDrive\Desktop\JS Projects\Salah Portfolio\Blog Project'; node index.js"

# Wait a moment for the API server to start
Start-Sleep -Seconds 3

# Start the frontend server (server.js) in the background  
Write-Host "Starting Frontend server on port 3001..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd 'c:\Users\salah\OneDrive\Desktop\JS Projects\Salah Portfolio\Blog Project'; node server.js"

Write-Host "Blog servers are starting..." -ForegroundColor Green
Write-Host "API Server: http://localhost:4000" -ForegroundColor Cyan
Write-Host "Frontend Server: http://localhost:3001" -ForegroundColor Cyan
Write-Host "Press any key to continue..." -ForegroundColor Magenta
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")