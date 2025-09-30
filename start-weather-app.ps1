# PowerShell script to start Weather Dashboard
Write-Host "Starting Weather Dashboard..." -ForegroundColor Green
Write-Host ""
Write-Host "Opening Streamlit Weather Dashboard on http://localhost:8501" -ForegroundColor Cyan
Write-Host ""

# Navigate to the project directory
Set-Location "c:\Users\salah\OneDrive\Desktop\JS Projects\Salah Portfolio"

# Start Streamlit app
streamlit run app.py

Write-Host "Press any key to continue..." -ForegroundColor Magenta
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")