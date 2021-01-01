import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            myProps: 4
        }
    }
}

export default function Dynamic(props){
    return(<h1>
        HEllo {props.myProps}
    </h1>)
}