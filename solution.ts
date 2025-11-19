
const formatValue = (value:string|number|boolean) =>{
    if(typeof(value) === 'string'){
        return value.toUpperCase();
    }else if(typeof(value) === 'number'){
        return (value * 10);
    }else if(typeof(value) === 'boolean'){
        return !value;
    }else{
        return 'You have to put string, number or boolean type text'
    }
}


const getLength =(value:string[] | number[] | string)=>{
    if(typeof value === 'string'){
        return value.length;
    }else{
        return value.length;
    }
}


class Person {
    name:string;
    age:number;
    constructor(name:string,age:number){
       this.name = name;
       this.age =  age; 
    }
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`
    }
}


type ArrayofItem  ={
    title:string;
    rating:number;
}

const filterByRating =(arr:ArrayofItem[]):ArrayofItem[]=>{
    let outputArray:any[] = []
    arr.forEach((item)=>{
        if(item.rating >=4){
            outputArray.push(item);
        }
    })
    return outputArray;
}
const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];



type setUsersInfoType ={
    id:number;
    name:string;
    email:string;
    isActive:boolean;
}

const filterActiveUsers =(value:setUsersInfoType[]):setUsersInfoType[] =>{
    let activeUsers :any[] =[];
    value.filter((item) => {item.isActive === true? activeUsers.push(item):''});
    return activeUsers;
}

const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];




interface Book{
    title:string;
    author:string;
    publishedYear:number;
    isAvailable:boolean;
}

const printBookDetails =(value:Book) =>{
    return (`Title: ${value.title}, Author: ${value.author},  Published: ${value.publishedYear}, Available: ${(value.isAvailable === true)? 'Yes' : 'No'}`)
} 

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: false,
};


type Arrays =(number| string)[];

const getUniqueValues =(arr1:Arrays,arr2:Arrays):number[]=>{
    const allValueFromBothArr = [...arr1,...arr2];
    let allValue:number[] =[];
    let outputValue:number[] =[];
    allValueFromBothArr.forEach((value) =>{
        if(typeof value === 'string'){
            allValue.push(parseInt(value));
        }
        else{
            allValue.push(value);
        }
    })
    for(let i =0; i < allValue.length; i++){
        const num = allValue[i];
        if(!outputValue.includes(num)){
            outputValue.push(num)
        }
        
    }
    return outputValue;
}    

const array1 = [1, 2, '3', 4, 5];
const array2 = [3, 4, 5, 6, 7];

type Properties={
    name:string;
    price:number;
    quantity:number;
    discount?:number;
}

const calculateTotalPrice =(value:Properties[]):number =>{
    let totalPrice = 0;
    value.forEach((product)=> {
        const productPrice = product.price * product.quantity;
        if(product.discount){
            totalPrice = totalPrice + (productPrice - productPrice * (product.discount/100));
        }
        else if(!product.discount){
            totalPrice = totalPrice + productPrice;
        }
        
    })
    return totalPrice;
}

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];



