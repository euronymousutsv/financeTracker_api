import { prototype } from 'events';
import express,{Request,Response, NextFunction}from 'express';
const app =express();
const PORT = 3000;

app.use((req:Request, res:Response,next:NextFunction)=>{
    console.log(`${req.method} ${req.url}`);
    next();
})

app.get('/',(req:Request,res:Response)=>{
    res.send("Hello from Express + TypeScript");
});

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});