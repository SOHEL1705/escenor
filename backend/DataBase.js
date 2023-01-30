import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
const USERNAME =process.env.DataBUSERNAME
const USERPASSWORD =process.env.DataBPASSWORD
const connectToMongo =()=> {
    const mongoURI = `mongodb+srv://${USERNAME}:${USERPASSWORD}@cluster0.rekllej.mongodb.net/PortThunder?retryWrites=true&w=majority`
    

const printportON=()=>{
    return (
        console.log("mongoDB Database is connectd")
    )
}
const printportOFF=()=>{
    return (
        console.log("mongoDB Database is NOT connectd")
    )
}
const printportERR=()=>{
    return (
        console.log(`there was some Error while connecting to database`,)
    )
}
    mongoose.connect(mongoURI, 
        {
            maxPoolSize:50,
            wtimeoutMS:2500,
            useNewUrlParser:true
        })
    mongoose.connection.on("connected",printportON)
    mongoose.connection.on("disconnected",printportOFF)
    mongoose.connection.on("error",printportERR)
}
export default connectToMongo