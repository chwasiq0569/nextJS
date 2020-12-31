import styles from './index.module.scss';

export default function Home() {
  return (
    <div>
       <h1 className={styles.red}>Hello World<span> I am Red</span></h1>
         {/* <style jsx>
            {
              `
              .hello{
                  color: red;
              }
              `
            }
        </style> */}
        <h1 className='hello'>Hello World</h1>
     
    </div>
    
  )
}
