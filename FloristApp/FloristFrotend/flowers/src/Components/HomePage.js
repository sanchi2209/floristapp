import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./Main.css"
const HomePage=()=>{
    // let arr=["./img3.jfif","./corporate.jfif","./haldi.jfif","./img4.jfif"]
    let  arr=[
        "https://images.unsplash.com/photo-1460039230329-eb070fc6c77c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1508610048659-a06b669e3321?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1468327768560-75b778cbb551?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        // "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            ]
    const[img,setImg]=useState(0)
    
    useEffect(()=>{
            setInterval(() => {
                setImg(Math.floor(Math.random() * arr.length))
            }, 5000)
        })
    return(
        <>
        <div className="wed">
        <div className="wedding">
            <img src={arr[img]} alt="image1"/>
            {/* <div className="back"> */}
            
            {/* </div> */}
        </div>
        <Link to="/"><button>Back</button></Link>
        </div>
        </>
    )
}
export default HomePage