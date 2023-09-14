/// <reference types="react-scripts" />


export interface products {

    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    
  }

  
export interface DetailProduct {
  detail:Array<products>
}
  