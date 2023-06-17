import express from "express";
import serverless from 'serverless-http'
import Cartoons from '../route/Cartoons.mjs'

const app = express();

app.get('/', (req, res ) => {
    res.send('Bobur aka qalesiz!');
});

app.use('/cartoons', Cartoons);

const serverlessApp = serverless(app);

export const handler = async (event, context) => {
    const result = await serverlessApp(event, context);
    return result;
};