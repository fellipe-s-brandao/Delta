import express from "express";
import cors from "cors"
import { Users, Uploads } from "@/app/controllers"

const app = express();

app.use(cors());
const port = 3003;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/user', Users);
app.use('/uploads', Uploads);

console.log(`servindor rodando no http://localhost:${port}`);
app.listen(port);
