const { Schema, model } = require('mongoose');

const reactionSchema = new Schema (
    {
        reactionBody: {
            type: String,
            required: true,
            maxlength: 300,
        },
        // username: {
        //     type: String,
        //     required: true,
        // },
       
        }, { timestamps: true });
  
const blabberSchema = new Schema (
    {
        name: {
            type: String,
            required: true,
            maxlength: 50,
        },
        blabs: {
            type: String,
            required: true,
            maxlength: 200,
        },
        reactions: [reactionSchema],
    }, { timestamps: true });


const Blabber = model('blabber', blabberSchema,);
// reactionSchema

module.exports = Blabber;