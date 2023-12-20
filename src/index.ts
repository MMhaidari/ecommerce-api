import * as dotenv from 'dotenv';
dotenv.config();

import app from './server';


app.listen(8000,() => {
    console.log("app is running is on 8000")
})