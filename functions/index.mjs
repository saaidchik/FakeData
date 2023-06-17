import express from "express";
import serverless from 'serverless-http'
import Cartoons from '../route/Type.mjs'

const app = express();

app.get('/', (req, res ) => {
    res.send('Bobur aka qalesiz!');
});

app.use('/type', Types);

const serverlessApp = serverless(app);

export const handler = async (event, context) => {
    const result = await serverlessApp(event, context);
    return result;
};