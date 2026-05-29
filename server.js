const { spawn } = require('child_process');
const path = require('path');

// Start Next.js production server using local node_modules binary.
// This wrapper ensures `npm start` has a real JS entry and inherits env vars like PORT.

const bin = process.platform === 'win32' ? 'node_modules/.bin/next.cmd' : 'node_modules/.bin/next';
const nextPath = path.join(__dirname, bin);

const child = spawn(nextPath, ['start'], {
  stdio: 'inherit',
  env: process.env,
});

child.on('exit', (code) => {
  process.exit(code);
});
