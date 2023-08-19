import express,{Request, Response,NextFunction} from 'express'
import todoRoutes from './routes/todos';
// const express = require('express'); //commonjs 
import {json} from 'body-parser'
const app = express();



app.use(json());
app.use('/todos', todoRoutes) //это как будет называться ссыдка

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: err.message });


});

app.listen(3000);