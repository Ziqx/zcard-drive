import NextDriveServer from 'nextdrive';
import { config } from 'dotenv';
import path from 'path';

config({ path: path.resolve(__dirname, '../.env') });

const server = new NextDriveServer(
    {
        port: 4002,
        apiKey: process.env.API_KEY!,
        options: {
            cors: true
        }
    });
server.start();