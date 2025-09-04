import express from "express";

const app = new express();
const PORT = 3000;

app.get("/", (req,res)=>{
    res.send("Hola Mundo");
})

app.listen(PORT, () =>{
    console.log(`Servidor Ejecutandose en http://localhost:${PORT}`);
})