// import { config } from '@keystone-6/core'
// import dotenv from 'dotenv'
// import { lists } from './schema'

// // We are going to use dotenv to get our variables from a .env file or from set environment variables
// dotenv.config()

// const {
//     // The S3 Bucket Name used to store assets
//     S3_BUCKET_NAME: bucketName = 'keystone-test',
//     // The region of the S3 bucket
//     S3_REGION: region = 'ap-southeast-2',
//     // The Access Key ID and Secret that has read/write access to the S3 bucket
//     S3_ACCESS_KEY_ID: accessKeyId = 'keystone',
//     S3_SECRET_ACCESS_KEY: secretAccessKey = 'keystone',
//     // The base URL to serve assets from
//     ASSET_BASE_URL: baseUrl = 'http://localhost:3000',
// } = process.env

// export default config({
//     db: {
//         provider: 'sqlite',
//         url: process.env.DATABASE_URL || 'file:./keystone-example.db',
//     },
//     lists,
//     storage: {
//         storage: {
//     my_images: {
//       kind: 's3',
//       type: 'image',
//       bucketName,
//       region,
//       accessKeyId,
//       secretAccessKey,
//       signed: { expiry: 5000 },

//         },
//     },
// })
