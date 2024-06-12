// pubsub/publisher.js
const { Queue } = require('bullmq');
const Redis = require('ioredis');
const dotenv = require('dotenv');

dotenv.config();

const connection = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT
});
const queue = new Queue('dataIngestion', { connection });

const publishData = async (data) => {
  await queue.add('ingest', data);
};

module.exports = { publishData };
