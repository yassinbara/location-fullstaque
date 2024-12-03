const {Schema , model} = require('mongoose')

const postSchema = new Schema({
    title: {
        type:String
    },
    userId :{
        type:Schema.Types.ObjectId ,
        ref:'User'
    }
})
postSchema.virtual('user',{
    ref:'User' ,
    localField:'userId' ,
    foreignField:"_id"
})
postSchema.virtual('content').get(function () {
    return this.title + ' hellow world'
    })
postSchema.set('toJSON',{virtuals :true})
postSchema.set('toObject',{virtuals :true})
const Post = model('Post' ,postSchema)
module.exports=Post