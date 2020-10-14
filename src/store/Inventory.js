import { observable, action } from 'mobx'
import axios from 'axios';
import {Item} from './Item';

 export class Inventory {
    @observable items=[];

    @action getAllItemsFromDB = async() => {
        let getItems = await axios.get(`http://localhost:4200/items/getAllItems`)
        this.items = [...getItems]
    }

    
   @action addItem = async(name, price=0, quantity=1)=>{
        let exsitingItem = this.items.find(item => item.name === name)
        if(exsitingItem){
           axios.put(`http://localhost:4200/increaseQuantityByOne`,exsitingItem) 
           this.getAllItemsFromDB()
        }else{
            let newItem = new Item(name, price, quantity)
            console.log(name, price, quantity )
            axios.post(`http://localhost:4200/addNewItem`,newItem)
            this.getAllItemsFromDB()
        }
   }

   @action buyItem = async(name)=>{
    let purchasedItem = this.items.find(item => item.name === name)
    if(purchasedItem){
        axios.put(`http://localhost:4200/items/decereaseQuantityByOne`,purchasedItem )  
        this.getAllItemsFromDB()
    }else{
        return;
    }
  }

  @action changePrice = async(name ,price)=>{
      let itemToChange = this.items.find(item => item.name === name)
      if(itemToChange){
          itemToChange.price = price
          axios.put(`http://localhost:4200/items/changePriceOfItem`,itemToChange) 
          this.getAllItemsFromDB()   
      }else{
          return;
      }
  }

 
 }

