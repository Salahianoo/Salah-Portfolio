import { spawn } from 'child_process';

console.log('🚀 Starting Blog Project...');

// Start the API server (index.js) in background
const apiServer = spawn('node', ['index.js'], {
  stdio: ['inherit', 'pipe', 'pipe'],
  cwd: process.cwd()
});

// Wait a moment for API server to start
setTimeout(() => {
  console.log('✅ API Server started on port 4000');
  
  // Start the frontend server (server.js)
  const frontendServer = spawn('node', ['server.js'], {
    stdio: 'inherit',
    cwd: process.cwd()
  });
  
  console.log('✅ Frontend Server starting on port 3001');
  
  // Handle process termination
  process.on('SIGINT', () => {
    console.log('\n🛑 Stopping servers...');
    apiServer.kill('SIGINT');
    frontendServer.kill('SIGINT');
    process.exit(0);
  });
  
}, 2000);