const express = require("express")
const data = require("./MOCK_DATA.json")
const connectDB = require("./DB/db.js")
const app = express()
const PORT = 8000

connectDB()
app.get('/',(req,res)=>{
    return res.json(data)
})
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`); 
    
    
})

