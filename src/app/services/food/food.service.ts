import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from 'src/app/shared/models/Tags';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Food{
    return this.getAll().find(food=>food.id==id)!;
  }


  getAllFoodsBySearchTerm(searchTerm:String) :Food[]{
    return this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }


  getAllTags():Tag[]{
    return [
      { name: 'all', count: 6 },
      { name: 'FastFood', count: 3 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 2 },
      { name: 'dinner', count: 2 },
      { name: 'Entree', count: 1 },
      { name: 'Breakfast', count: 1 },
      { name: 'Bread', count: 1 },
      { name: 'Plat', count: 2 },
    ];
  }

  getAllFoodsByTag(tagSearch:string):Food[]{
    return tagSearch=="all"?this.getAll():
    this.getAll().filter(food=>food.tags?.includes(tagSearch));
  }

  getAll():Food[]{
    return[
      {id:1,
        name:'Pizza Pepperoni',
        cookTime:'10-20',
        price:10,
        favorite:true,
        origins:['belgium','france'],
        stars:3.3,
        imageUrl:'assets/images/food1.jpg',
        tags:['FastFood','Pizza','Lunch']
      },
      {
        id:2,
        name:'Pizza Margherita',
        cookTime:'15-25',
        price:15,
        favorite:true,
        origins:['italy','france'],
        stars:4.5,
        imageUrl:'assets/images/food2.jpg',
        tags:['FastFood','Pizza','Lunch']
      }
      ,
      {
        id:3,
        name:'Onion Rings',
        cookTime:'5-8',
        price:5,
        favorite:false,
        origins:['germany','italy'],
        stars:4,
        imageUrl:'assets/images/food3.jpg',
        tags:['FastFood','Onion Rings','Entree']
      },
      {
        id:4,
        name:'Sweet Bread',
        cookTime:'15-25',
        price:7,
        favorite:false,
        origins:['england','france'],
        stars:3.3,
        imageUrl:'assets/images/food4.jpg',
        tags:['Sweet','Bread','Breakfast']
      },
      {
        id:5,
        name:'Shawarma Modern',
        cookTime:'25-30',
        price:25,
        favorite:true,
        origins:['palestaine','iraq'],
        stars:4.1,
        imageUrl:'assets/images/food5.jpg',
        tags:['Plat','Meat','dinner']
      },
      {
        id:6,
        name:'Guagamol Shrip',
        cookTime:'30-35',
        price:30,
        favorite:true,
        origins:['japan','italy'],
        stars:3.9,
        imageUrl:'assets/images/food6.jpg',
        tags:['Plat','Fish','dinner']
      }
    ]
  }
}
