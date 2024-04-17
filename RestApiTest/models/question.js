const mongoose = require("mongoose");
const slugify = require("slugify");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    title: {
        type: String,
        required: [true, "Please provide a title"],
        minlength: [8, "Please provide a title with a minimum of 8 characters"],
        unique: true,
    },
    content: {
        type: String,
        required: [true, "Please provide content"],
        minlength: [16, "Please provide content with at least 16 characters"],
    },
    slug: String,
    createdAt: {
        type: Date,
        default: Date.now,
        validate: {
            validator: (value) => !isNaN(value),
            message: "Invalid date",
        },
    },
    user: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "User",
    },
    likes: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "User"
        }
        
    ],
    answers:[
            {
                type:mongoose.Schema.ObjectId,
                ref: "Answer"
            }
        ],
        likeCount: {
            type: Number,
            default: 0,
        },
        answerCount: {
            type: Number,
            default: 0
        }
});


QuestionSchema.pre("save", function (next) {
    if (!this.isModified("title")) {
        return next();
    }
    this.slug = this.makeSlug();
    next();
});

QuestionSchema.methods.makeSlug = function () {
        return slugify(this.title, {
            replacement: "-",
            remove: /[*+~.()'"!:@]/g,
            lower: true,
        });
};

module.exports = mongoose.model("Question", QuestionSchema);
