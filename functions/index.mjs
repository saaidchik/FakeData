import express from "express";
import serverless from 'serverless-http'
import Type from '../route/Type.mjs'

const app = express();

app.get('/', (req, res ) => {
    res.send('Akobirlo ukam qalesan! Telefon oynama! Darsini qil! Xoziroq telli ochir! ');
});

app.use('/type', Type);

const serverlessApp = serverless(app);

export const handler = async (event, context) => {
    const result = await serverlessApp(event, context);
    return result;
};