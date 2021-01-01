import {NextApiRequest, NextApiResponse} from 'next';
import jwt from "jsonwebtoken";

const KEY = 'sajidiowuqioeklasdjasdkl';

export default (req: NextApiRequest, res: NextApiResponse) => {
    // console.log('REQ.BODY: ',req.body);
    // console.log('REQ.query: ',req.query);
    // res.statusCode = 200;
    console.log(req.body);
    const {username, password} = req.body;
    // res.end("Response Stream ahs been ended here");
    res.json({
        token: jwt.sign({
            username: username,
            admin: username === 'admin' && password === 'admin' 
        }, KEY)
    })
}
    