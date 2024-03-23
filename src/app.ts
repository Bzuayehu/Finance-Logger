import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interface/HasFormatter.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement
const type = document.querySelector("#type") as HTMLSelectElement
const toform = document.querySelector("#tofrom") as HTMLInputElement
const details = document.querySelector("#details") as HTMLInputElement
const amount = document.querySelector("#amount") as HTMLInputElement

const ul = document.querySelector("ul")!
const list = new ListTemplate(ul)



form.addEventListener("submit",(e:Event)=>{
e.preventDefault()
let doc:HasFormatter

let values :[string,string,number ]
values =[toform.value,details.value,amount.valueAsNumber] 
if(type.value =="invoice"){
    doc = new Invoice(...values)
}else
{
    doc = new Payment(...values)

}
    list.render(doc, type.value, 'start')

})




   