import mongoose from 'mongoose';

const conectarDB = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URI, 
        {
            useNewUrlParser: true,
            useUnifiedtopology: true
        });
      const url = `${db.connection.host}:${db.connection.port}`
      console.log(`MOngoDB conectado en: ${url} `)
    } catch (error){
        console.log(`error:${error.message}`);
        process.exit(1)
    }
};

export default conectarDB;