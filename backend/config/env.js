import dotenv from 'dotenv';
dotenv.config();

export const config = {
    port : process.env.PORT || 4200,
    mongo_url : process.env.MONGO_URL
}
