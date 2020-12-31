import { isTargetLikeServerless } from 'next/dist/next-server/server/config';
import { useState } from 'react';
import styles from './index.module.scss';
import jwt from 'jsonwebtoken';

export default function Home(){
  const [username ,setUsername] = useState<string>('wasiq');
  const [password ,setPassword] = useState<string>('wasiq');
  const [message, setMessage] = useState<string>('');
  const submitForm = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({username, password})
    }).then(t => t.json());

    const token = res.token;
    console.log(token)
    if(token){
      const json = jwt.decode(res.token) as { [key: string]: string }
      console.log(json);
      console.log(`Welcome ${json.username} and you are ${json.admin ? 'an admin ' : 'not admin'}`);
             }
    else console.log('Not Found');
  }
  return (
      <form>
          <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <br />
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
          {/* <input onSubmit={submitForm} /> */}
          <button onClick={submitForm}>Submit</button>
      </form>
  )
}