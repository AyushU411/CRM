const { Worker } = require('bullmq');
const Redis = require('ioredis');
const dotenv = require('dotenv');

dotenv.config();

const connection = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

const worker = new Worker('dataIngestion', async (job) => {
  // Process data ingestion here
  console.log('Processing job:', job.data);
  // Save data to DB or any other processing
}, { connection });

worker.on('completed', (job) => {
  console.log(`Job ${job.id} completed!`);
});

worker.on('failed', (job, err) => {
  console.log(`Job ${job.id} failed: ${err.message}`);
});
