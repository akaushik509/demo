import React from 'react'
import Link from "next/link";

const Navbar = () => {
  return (
    <div style={{display:"flex", justifyContent:'space-evenly', height:"50px", alignItems:"center", backgroundColor:"#171923"}}>
        <Link href="/">Avinash Kaushik</Link>
        <Link href="/project">Projects</Link>
        <Link href="/experience">Experience</Link>
        <img src="https://avatars.githubusercontent.com/u/26029251?s=40&v=4" alt="profile_pic" />
    </div>
  )
}

export default Navbar