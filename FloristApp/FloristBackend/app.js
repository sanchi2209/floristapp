const express=require('express')
const app=express()
const cors=require('cors')
// const Conn=require('./Connection.js/conn')
// Conn()
// const Flower=require('./Models/flower')

app.get('/',(req,res)=>{
    res.send('hi')
})
// const bodyParser=require('body-parser')

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extend:false}))
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())


app.get('/api/flowers',(req,res)=>{
  const flowers = [
    { id: 1, name: 'Rose', color: 'Red',cost:'900' ,imageUrl:"https://png.pngtree.com/png-clipart/20210710/ourmid/pngtree-rose-simulation-plant-romance-png-image_6524921.png"},
    { id: 2, name: 'Lily', color: 'White' ,cost:'600',imageUrl:"https://w7.pngwing.com/pngs/679/664/png-transparent-madonna-lily-cut-flowers-easter-lily-flower-white-lilium-flower-thumbnail.png"},
    { id: 3, name: 'Sunflower', color: 'Yellow',cost:'500',imageUrl:"https://png.pngtree.com/png-vector/20210526/ourmid/pngtree-sunflower-landscape-yellow-flower-flower-png-image_3347616.png" },
    {id: 4,name:'Tulip',color:'Green',cost:'400',imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7wZzMLPbGiDDgV9jM1wxn3-RtZJp0PGzPNVsMOtE&s"},
    {id: 5,name:'Orchid',color:'Saffron',cost:'200',imageUrl:"https://thumbs.dreamstime.com/b/branch-pink-orchid-flower-isolated-png-transparent-269420550.jpg"}
  ];
  res.json(flowers)
})


app.listen(5000,()=>console.log('server is up at 5000'))