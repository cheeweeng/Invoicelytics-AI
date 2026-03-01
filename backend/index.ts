// Load environment FIRST, before any other imports
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '.env') });

console.log('✅ Environment loaded');
console.log('GEMINI_API_KEY present:', !!process.env.GEMINI_API_KEY);

// Now import and start the server
import('./server.js');