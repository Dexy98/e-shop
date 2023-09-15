/// <reference types="react-scripts" />


export interface products {

    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    
    quantity : number
  }

  
export interface DetailProduct {
  detail:Array<products>
}

export interface Cart {
  cart: Array<products>
  totalQuantity:number
  totalAmount : number
  quantity? : number
}
  