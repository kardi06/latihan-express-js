import express from "express";
import url from "url";

const app = express();
const port = 3000;

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

app.get("/",(req,res)=>{
    // res.send("Hello World!");
    // res.json({
    //     name: "Hello World!",
    //     age:21
    // });
    console.log(__dirname);
    res.sendFile("./page/index.html",{root:__dirname});
});

app.get("/about",(req,res)=>{
    // res.send("About Page");
    res.sendFile("./page/about.html",{root:__dirname});
});

app.get("/contact",(req,res)=>{
    // res.send("Contact Page");
    res.sendFile("./page/contact.html",{root:__dirname});
});

app.use("*",(req,res)=>{
    res.status(404);
    res.send("Halaman tidak ditemukan");
})
app.listen(port,() => console.log(`Server running at http://localhost:${port}`))