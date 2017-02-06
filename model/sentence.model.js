/**
 * Created by sample on 06-Feb-17.
 */
var mongoose    =   require("mongoose");

// create instance of Schema
var mongoSchema =   mongoose.Schema;
// create schema
var sentenceSchema  = {
    sentence : String
};
// create model if not exists.
module.exports = mongoose.model('sentenceModel',sentenceSchema);