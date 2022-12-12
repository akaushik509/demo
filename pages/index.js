import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import { useRouter } from "next/router";


export default function Home({mydata,mydata1}) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>akaushik509-portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <div style={{display:"flex", marginTop:"10px", borderRadius:"10px"}}>
          {/* Left side */}
          <div style={{ marginTop:"10px", borderRadius:"10px", width:"20%"}}>
            <div >
              <center><div style={{  marginTop:"10px", borderRadius:"10px", padding:"10px",backgroundColor:"#2D3748"}}>
                <img src={mydata.avatar_url} alt="Avinash-pic" width={100} height={100} style={{borderRadius:"50%"}}/>
                <h1>{mydata.name}</h1>
                <p onClick={()=>window.location=mydata.html_url}>@{mydata.login}</p>
                <div>
                  <p><span>Full-Stack Developer</span></p>
                </div>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                  <button style={{backgroundColor:"#9AE6B4", width:"250px", height:"40px", borderRadius:"20px"}} onClick={()=>window.location="https://drive.google.com/file/d/1V9X7tFu_faOqB8OetXEgnq_OtSsRJcl_/view?usp=share_link"}>Resume</button>
                  <button style={{backgroundColor:"#90CDF4", width:"250px", height:"40px", borderRadius:"20px"}} onClick={()=>window.location=mydata.html_url}>Follow</button>
                </div>
              </div></center>

             <center> <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", marginTop:"10px", borderRadius:"10px", padding:"10px",backgroundColor:"#2D3748", marginTop:"10px"}}>
                <h3>Typescript</h3>
                <h3>React.js</h3>
                <h3>Node.JS</h3>
                <h3>HTML</h3>
                <h3>CSS</h3>
                <h3>Next.JS</h3>
                <h3>GitHub</h3>
              </div></center>

              <div  style={{ marginTop:"10px", borderRadius:"10px", padding:"10px",backgroundColor:"#2D3748", marginTop:"10px"}}>
                <div>
                  <h4>1. Full Stack Web Development</h4>
                  <p>Masai School | Full Time (Remote)</p>
                  <p>April 2022 - Present</p>
                </div><div>
                  <h4>2. Bachelor of Science in Information Technology (BSc-IT)</h4>
                  <p>Magadh University, Bodh Gaya</p>
                  <p>May 2014 - October 2017</p>
                </div><div>
                  <h4>3. Senior Secondary - (12th)</h4>
                  <p>RPS School - CBSC, BIhar Sharif</p>
                  <p>May 2013</p>
                </div>
              </div>
            </div>
          </div>
          {/* Right side */}
          <div style={{  marginTop:"10px", borderRadius:"10px", padding:"10px",backgroundColor:"#2D3748", width:"80%", marginLeft:"10px"}}>
              <center><h1>Projects</h1></center>
                <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr"}}>
                    {
                        mydata1?.map((item)=>(
                            <div key={item.id}>
                                <h1 onClick={()=>window.location=item.html_url}>{item.full_name}</h1>
                                <div style={{display:"flex", justifyContent:"space-between"}}>
                                  <div style={{display:"flex",width:"50%", gap:"20px"}}>
                                    <p>Star Count = {item.stargazers_count}</p>
                                    <p>Forks Count = {item.forks_count}</p>
                                  </div>
                                  <div style={{display:"flex",width:"50%"}}>
                                    <p>Language = {item.language}</p>
                                  </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
          </div>
        </div>
      </main>
    </div>
  )
};

export async function getServerSideProps(){
  let res = await fetch("https://api.github.com/users/akaushik509");
  let data = await res.json();

  let res1 = await fetch("https://api.github.com/search/repositories?q=user:akaushik509+fork:true&sort=updated&per_page=10&type=Repositories");
  let data1 = await res1.json();
  return {
    props:{
      mydata:data,
      mydata1:data1.items
    }
  }

  
}


