const mongoose=require("mongoose")
const bcrypt=require("bcrypt")

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:30
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:30
    },
    userName:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        index:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    hash_password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["admin","user"],
        default:"user"
    },
    contact_Number:{
        type:String
    },
    profilePicture:{
        type:String
    }  
},{timestamps:true})

userSchema.virtual('password')
.set(function(password){
    this.hash_password=bcrypt.hashSync(password,12)
})
userSchema.methods={
    authenticate: function(password){
        return bcrypt.compareSync(password,this.hash_password)
    }
}
userSchema.virtual('fullName')
.get(function(){
    return `${this.firstName} ${this.lastName}`
})
module.exports=mongoose.model('User',userSchema)