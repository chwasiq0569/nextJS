import { useRouter } from 'next/router';

export default () => {
    const router = useRouter();
    console.log(router.query.named);
    return(
        <h1>Hello </h1>
    )
}