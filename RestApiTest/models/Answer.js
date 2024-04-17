const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Question = require("./question")

const AnswerSchema = new Schema({
  
    content:{
        type:String,
        required: [true,"please provide a content"],
        minlength:[10,"please provide a content at least 10 char"]
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    likes:[
        {
            type: mongoose.Schema.ObjectId,
            ref: "User"
        }
    ],
    user: {
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required: true
    },
    question: {
        type: mongoose.Schema.ObjectId,
        ref: "Question",
        required: true
    },
});


AnswerSchema.pre("save", async function(next) {
    if (!this.isModified("user")) return next();

    try {
        const question = await Question.findById(this.question);
     
        if (!question) {
            return next(new Error("Question not found"));
        }

        question.answers.push(this._id);
        question.answerCount = question.answers.length;
        
        await question.save();
        next();
    } catch (err) {
        return next(err);
    }
});




module.exports = mongoose.model("Answer",AnswerSchema);
