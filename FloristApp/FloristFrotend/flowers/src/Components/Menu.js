import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./Main.css"
const Menu = () => {
    const [flower, SetFlower] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/api/flowers").then((res) => {
            return res.json()
        }).then((data) => {
            SetFlower(data)
            console.log(data)

        }).catch((err) => console.log(err))
    }, [])
    return (
        <>
            <div className="menu">
                <Link to='/'>Back</Link>
                <header className="flower">
                    <h1>Flower List</h1>
                </header>
                    
                <div className="menu1">


                    {flower.map((data) => {
                        return (
                            <div key={data.id}>
                                <h2>{data.name}</h2>
                                <img src={data.imageUrl} alt={data.name} />
                                <p>Cost:`${data.cost}`</p>
                                <p>Color:{data.color}</p>
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    )
}
export default Menu