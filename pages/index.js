import Tweet from './Tweet'
import styles from '../styles/Home.module.css'
import path from 'path'
import fs from 'fs'

export default function Home({tweets}) {
  
  return (
    <div className={styles.container}>
     <h1>Tweeter Clone with Next.js</h1>
     {tweets.map(tweet=>{
       <Tweet key={tweet.id} text={tweet.text} author={tweet.author} date={tweet.date}/>

})}
     
    </div>
  )
};

export async function getServerSideProps() {
  const filePath= path.join(process.cwd(), 'data.json');
  const tweets= JSON.parse(fs.readFileSync(filePath));

  return{
    props:{
      tweets

    }
  }
}