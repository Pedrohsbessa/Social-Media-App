import express  from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv"
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import  Path  from "path";
import { fileURLToPath } from "url";
import { url } from "inspector";
import path from "path";
import authRoutes from './routes/auth.js'
import userRoutes from "./routes/users.js"
import postRoutes from './routes/posts.js'
import {register} from './controllers/auth.js'
import {createPost} from './controllers/posts.js'
import { verifyToken } from "./middleware/auth.js";
import User from "./models/User.js";
import Post from "./models/Post.js";
import {users, posts} from "./data/index.js"

/* Configs */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
dotenv.config({path: path.resolve(__dirname, './CONFIG.env')})
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, 'public/assets')))

/* File Storage */
const storage = multer.diskStorage({
    destination : function(req, file, cb) {
        cb(null, "public/assets")
    }, 
    filename : function (req, file, cb){
        cb(null, file.originalname)
    }
});
const upload = multer({storage});

/* Routes with Files*/ 
app.post("/auth/register", upload.single("picture"), register)
app.post("/posts", verifyToken, upload.single("picture"), createPost )


/*Routes*/ 
app.use("/auth", authRoutes)
app.use("/users", userRoutes)
app.use("posts", postRoutes)


/* Mongoose SETUP */ 
const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    app.listen(PORT, ()=> console.log(`Server Port: ${PORT}`));
    /*Data add manually one time*/ 
        // User.insertMany(users)
        // Post.insertMany(posts)

}).catch((error)=> console.log(`did not connect ${error}`))
 