import jwt from "jsonwebtoken";

// Récupérer le secret depuis les variables d'environnement

 export async function login(req, res) {
    const {username, password} = req.body;

    // Recherche d'un utilisateur avec le username et le password
    if (user) {
        const accessToken = jwt.sign({
            username: user.username,
            role: user.role
        }, secret);
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