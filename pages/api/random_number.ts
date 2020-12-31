import {NextApiRequest, NextApiResponse} from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
    console.log('REQ.BODY: ',req.body);
    console.log('REQ.query: ',req.query);
    res.statusCode = 200;

    // res.end("Response Stream ahs been ended here");

    res.json({ 
        num: Math.floor(Math.random() * 10)
    })
}