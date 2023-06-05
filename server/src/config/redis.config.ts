import { registerAs } from '@nestjs/config';
import { RedisConfig } from './config.type';

export default registerAs<RedisConfig>('redis', () => ({
  host: process.env.REDIS_HOST || 'localhost',
  port: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT, 10) : 6379,
}));
