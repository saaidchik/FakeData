import express from "express";
import serverless from 'serverless-http'
import Cartoons from '../route/Cartoons.mjs'

const app = express();

app.get('/', (req, res ) => {
    res.send('https://t4.ftcdn.net/jpg/01/96/63/77/360_F_196637738_JddWJszm0zDOWFvldat1rOCEawn7q4rz.jpg');
});

app.use('/cartoons', Cartoons);

const serverlessApp = serverless(app);

export const handler = async (event, context) => {
    const result = await serverlessApp(event, context);
    return result;
};