import {Document, model, Schema} from "mongoose"

interface iShop{
product:string,
quantity:string,
price:string
}

interface iShopData extends iShop, Document{}

const abokiModel = new Schema<iShopData>({
    
     product:{
        type:String
     },
     quantity:{
        type:String
     },  
     price:{
        type:String
     }
    
}

)

export default model<iShopData>("shops", abokiModel)