import express from "express";
import serverless from 'serverless-http'
import Type from '../route/Type.mjs'

const app = express();

app.get('/', (req, res ) => {
    res.send('Dildora ammajon qalesiz! Ammajon bugun Akobirlo bizanikida qoladi! Oldindan raxmat! Xa-xa-xa');
});

app.use('/type', Type);

const serverlessApp = serverless(app);

export const handler = async (event, context) => {
    const result = await serverlessApp(event, context);
    return result;
};