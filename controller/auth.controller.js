import jwt from "jsonwebtoken";
import {config} from "dotenv";
import {checkUser} from "../services/zookeepers.service.js";

//DotEnv init
config()
// Récupérer le secret depuis les variables d'environnement
const accessTokenSecret = process.env.PAGE_SIZE

// const carl = {username : 'carl',password : 1234,role : ["ROLE_ADMIN"]}

 export async function login(req, res) {
    const {username, password} = req.body;


     // Recherche d'un utilisateur avec le username et le password
    const user = await checkUser(username,password)


    if (user) {
        const accessToken = jwt.sign({
            username: user.username,
            role: user.role
        }, accessTokenSecret);
        res.json({
            accessToken
        })
    } else  {
        res.send('Username or password is incorrect');
    }
};

export async function authenticateJWT(req, res, next) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};