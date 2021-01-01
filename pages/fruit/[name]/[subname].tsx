import { route } from 'next/dist/next-server/server/router';
import { useRouter } from 'next/router';

export default () => {
    const router = useRouter();

    return(
        <h1>You are at {router.query.name}/{router.query.subname} </h1>
    )
}