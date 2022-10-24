const express=require('express');
const app=express();
const port=process.env.PORT || 5000;

const cors = require("cors");
app.use(cors());

const category=require('./data/catagoris.json');
const news=require('./data/news.json');

app.get('/',(req,res)=>{
    res.send('News API Running');
});

app.get('/news-category',(req,res)=>{
    res.send(category);
});

app.get('/news',(req,res)=>{
    res.send(news);
});

app.get('/news/:id',(req,res)=>{
    const id= req.params.id;
    const selectNews=news.find(n=>n._id===id);
    res.send(selectNews);
});

app.get('/category/:id',(req,res)=>{
    const id=req.params.id;
    if(id==='08'){
        res.send(news);
    }
    else{
    const categoryNews=news.filter(n=>n.category_id===id);
    res.send(categoryNews);
    }
});

app.listen(port,()=>{
    console.log(('deagon-news-server',port));
});

