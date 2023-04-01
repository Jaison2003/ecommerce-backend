const { default: mongoose } =require("mongoose")
const Mongoose=require("mongoose")

let eschema=Mongoose.Schema(

    {
        ProductID:String,
        ProductName:String,
        modelno:String,
        price:String,
        image:String
    }
)

module.exports=mongoose.model("ecommerce",eschema)