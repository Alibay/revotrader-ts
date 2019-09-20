import { readFileSync, existsSync } from 'fs';
import * as dotenv from 'dotenv';

if (existsSync('.env')) {
  const envConfig = dotenv.parse(readFileSync('.env'));
  for (const k in envConfig) {
    process.env[k] = envConfig[k];
  }   
}