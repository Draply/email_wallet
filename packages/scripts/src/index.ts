import express from 'express'
import 'dotenv/config'
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './routes/createAccount';
import transferTokenRouter from "./routes/transferToken";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(cookieParser());

app.get('/', (_req, res) => res.status(200).send('OK'))
app.use('/', router)
app.use('/', transferTokenRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Your server is running successfully on port ${PORT}`))