import express from 'express'
import { engine } from 'express-handlebars';
import path from 'path';

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.resolve(__dirname, '..', 'views') );


const port = 3000;
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});

app.use('/static', express.static(path.resolve(__dirname, '..', 'static')));

app.get('/simple', (req, res)=> {
    res.render('simple',{
        layout:false,
        value1: 'example1',
        value2: 'example2'
    });
});

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/say-my-name/:fname/:lname', (req, res) => {
    res.render('say-name', {
        fname: req.params.fname,
        lname: req.params.lname,
    })
});

app.get('/say-my-name-2/:fname/:lname', (req, res) => {
    res.render('say-name', {
        layout: 'alternate', //usando layout nao padrao
        fname: req.params.fname,
        lname: req.params.lname,
    })
});

app.get('/list', (req, res)=>{
    res.render('list', {
        items: ["item1", "item2", "item3"]
    })
})

app.get('/products', (req, res)=>{
    res.render('products', {
        product: [
            {name: 'product 1', price:19.99, description: 'cool description'},
            {name: 'product 2', price:29.99, description: 'cool description2'},
            {name: 'product 3', price:39.99, description: 'cool description3'},
        ]
    })
})