import { HasFormatter } from "../interface/HasFormatter.js";

// class Invoice {
//    readonly client:string
//    private details:string
//    public amount:number



//     constructor(a:string, b:string, c:number){
//         this.client = a,
//         this.details = b,
//         this.amount = c
//     }

//     format(){
//         return `${this.client} owes ${this.amount} for ${this.details} `
//     }

// }
export class Invoice implements HasFormatter {
    constructor(
        readonly client:string,
        private details:string,
        public amount:number
   ){}

    format(){
        return `${this.client} owes ${this.amount} for ${this.details} `
    }

}