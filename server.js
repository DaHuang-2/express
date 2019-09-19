const express=require("express");
const cookieParser=require("cookie-parser");
const app=express();

//中间件调用，以下两行代码，实现了给req身上加了一个body的属性
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//中间件调用，下面这行代码，实现了给req身上加了一个cookie的属性，获取cookie数据
app.use(cookieParser());

//TODO路由
app.get("/",(req,res)=>{  
    //req.query
    console.log(req.query.name);
    console.log(req.query.age);
    res.send("hello dahuang")
})

app.post("/handleLogin",(req,res)=>{
    //req.body
    console.log(req.body);
    res.send("hello dahuang2");
})

//cookie 相关
app.get("/setCookie",(req,res)=>{
    res.cookie("usename","zhangsan",{
        maxAge:1000*60*60
    })
    res.send("cookie设置成功");
})

app.get("/getCookie",(req,res)=>{
    console.log(req.cookies);
    res.send("getCookie成功");
})

//req.params
//获取路由的动态参数
// localhost:3000/hello/apple
// localhost:3000/hello/banana
// localhost:3000/hello/orange
app.get("/hello/:id",(req,res)=>{
    console.log(req.params);//{id:"apple"}
    res.send("怕了怕了");
})

app.get("/world/:name/:age",(req,res)=>{
    console.log(req.params);
    console.log(req.get("Accept"));
    res.send("什么啊");
})
app.listen("3000");