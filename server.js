const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose") // new
const Bcrypt = require("bcryptjs");
mongoose.connect("mongodb://localhost/shopping", { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'));
const categories = require('./scheme/categories')
const books = require('./scheme/books')
const videoGames = require('./scheme/videoGames')
const electronics = require('./scheme/electronics')
const fashions = require('./scheme/fashions')
const medicine = require('./scheme/medicine')
const home = require('./scheme/home')
const users = require('./scheme/users')

const app = express();
const port = 5000;



app.use(cors());
app.use(express.json())

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/signUp',async (req, res) => {
  var user = new users(req.body.user)
  const existingUser = await users.findOne({email: user.email})
  if(existingUser == undefined){
  let hash = await Bcrypt.hashSync(user.password, 10);
  console.log(hash)
  user.password = hash
  console.log('sign up user body:', user);
  await user.save();
  // res.sendStatus(200);
  res.send({})
  }else{
    res.status(409).json({})
    console.log("failure")
  }
});

app.post('/login',async (req, res) => {
  var currUser = new users(req.body.user)
  console.log(currUser)
  let user = await users.findOne({email: currUser.email})
  // let userss = await users.find()
  // let user={}
  // for(let i=0;i<userss.length;i++){
  //   console.log(userss[i].email+" "+currUser.email)
  //   if(userss[i].email==currUser.email){
  //     user=userss[i]
  //   }
  // }
  // console.log('user body:', currUser);
  // console.log('user :', user);
  // console.log('user :', user);
  if(user == undefined){
    res.status(409).json({})
  }
  if(!Bcrypt.compareSync(currUser.password, user.password)) {
    res.status(409).json({})
    console.log("ss")
  }else{
    res.send({})
  }
});
 

app.post('/books',async (req, res) => {
  // We will be coding here
  try{
  const book = new books(req.body.product)
  createdBook = await book.save();
  if(createdBook) {
    console.log("success");
    res.send({})
  }else{
    res.status(500).json({})
  }
  }  
  catch(err){
    res.status(500).json({})
  } 
});
app.post('/videoGames',async (req, res) => {
  // We will be coding here
  try{
  const videoGames = new books(req.body.product)
  createdVideoGames = await videoGames.save();
  if(createdVideoGames) {
    console.log("success");
    res.send({})
  }else{
    res.status(500).json({})
  }
  }  
  catch(err){
    res.status(500).json({})
  } 
});
app.post('/fashions',async (req, res) => {
  // We will be coding here
  try{
  const fashions = new books(req.body.product)
  createdFashions = await fashions.save();
  if(createdFashions) {
    console.log("success");
    res.send({})
  }else{
    res.status(500).json({})
  }
  }  
  catch(err){
    res.status(500).json({})
  } 
});
app.post('/electronics',async (req, res) => {
  // We will be coding here
  try{
  const electronics = new books(req.body.product)
  createdElectronics = await electronics.save();
  if(createdElectronics) {
    console.log("success");
    res.send({})
  }else{
    res.status(500).json({})
  }
  }  
  catch(err){
    res.status(500).json({})
  } 
});
app.post('/medicine',async (req, res) => {
  // We will be coding here
  try{
  const Medicine = new medicine(req.body.product)
  createdMedicine = await Medicine.save();
  if(createdMedicine) {
    console.log("success");
    res.send({})
  }else{
    res.status(500).json({})
  }
  }  
  catch(err){
    res.status(500).json({})
  } 
});
app.post('/home',async (req, res) => {
  // We will be coding here
  try{
  const Home = new home(req.body.product)
  createdHome = await Home.save();
  if(createdBook) {
    console.log("success");
    res.send({})
  }else{
    res.status(500).json({})
  }
  }  
  catch(err){
    res.status(500).json({})
  } 
});

app.post('/api/doPayment/', (req, res) => {
  return stripe.charges
    .create({
      amount: req.body.amount, // Unit: cents
      currency: 'eur',
      source: req.body.tokenId,
      description: 'Test payment',
    })
    .then(result => res.status(200).json(result));
});

app.get('/categories', async (req, res) => {
  try {
    const Categories = await categories.find()
    res.send({"categories":Categories[0].categories})
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
})

app.get('/books', async (req, res) => {
  try {
    const Books = await books.find()
    res.send({"notes": Books})
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
})
app.get('/medicines', async (req, res) => {
  try {
    const Medicine = await medicine.find()
    res.send({"notes": Medicine})
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
})
app.get('/vidoegames', async (req, res) => {
  try {
    const VideoGames = await videoGames.find()
    res.send({"notes": VideoGames})
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
})
app.get('/electronics', async (req, res) => {
  try {
    const Electronics = await electronics.find()
    res.send({"notes": Electronics})
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
})
app.get('/fashions', async (req, res) => {
  try {
    const Fashions = await fashions.find()
    res.send({"notes": Fashions})
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
})
app.get('/home', async (req, res) => {
  try {
    const Home = await home.find()
    res.send({"notes": Home})
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
})



 app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
