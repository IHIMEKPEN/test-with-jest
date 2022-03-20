const express=require("express")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))//bodyparser



const add=(a,b)=>{
    return a+b
}

app.get("/users",(req,res)=>{
    res.status(200).json({
        Company_name: "Dredgreat Groups",
        email: "CEO@dregreat.com",
        password:'remembrance'
    })
})
app.listen(3000)

module.exports={
    add,
    app
}
