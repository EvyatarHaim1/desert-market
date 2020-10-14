const express = require('express')
const router = express.Router()
const {firebase} = require('../config')
const axios = require('axios')

router.route('/getAllItems').get(async(req,res) => {
    console.log('hey')
    let results = await axios.get(`${firebase}/items.json`)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
    res.send(results)
});


router.route('/addNewItem').post(async(req, res) => {
    let newItem = req.body
    console.log(`I'm route addItem `)
    let results = await axios.post(`${firebase}/items.json`, newItem )
    res.end()
  });
   
router.route('/increaseQuantityByOne').put(async(req, res) => {
    let existedItem = {
    name: req.body.name,
    price: req.body.price, 
    quantity: req.body.quantity + 1
    }
    console.log(`I'm route increase , ${existedItem}`)
  let results = await axios.put(`${firebase}/items.json`, existedItem)
  .then( response => response)
  .catch( error => console.log(error))
  res.send()
});


module.exports = router