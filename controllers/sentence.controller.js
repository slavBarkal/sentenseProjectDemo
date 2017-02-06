/**
 * Created by sample on 06-Feb-17.
 */

"use strict";

var SentenceCtrl = function(Sentence){

    var SentenceObj = {};

    SentenceObj.PostSentence = function(req, res, next){
        var body = {sentence: req.body.sentence};
        var newSentence = new Sentence(body);
        newSentence.save(function(err, sentence){
            if(err){
                res.json({status: false, error: err.message});
                return;
            }
            res.json({status: "Sentece Added", sentence: sentence});
        });
    }

    SentenceObj.GetSentences = function(req, res, next){
        Sentence.find(function(err, sentences){
            if(err) {
                res.json({status: false, error: "Something went wrong"});
                return
            }
            res.json({status: true, sentences: sentences});
        });
    }

    SentenceObj.UpdateSentence = function(req, res, next){
        var sentence = req.body.sentence;
        Sentence.findById(req.params.sentence_id, function(err, updateSentence){
            updateSentence.sentence = sentence;
            updateSentence.save(function(err, sen){
                if(err) {
                    res.json({status: false, error: "Sentence not updated"});
                }
                res.json({status: true, message: "Sentence updated successfully"});
            });
        });
    }

    SentenceObj.DeleteSentence = function(req, res, next){
        Sentence.remove({_id : req.params.sentence_id }, function(err, sentences){
            if(err) {
                res.json({status: false, error: "Deleting sentence is not successfull"});
            }
            res.json({status: true, message: "Sentence deleted successfully"});
        });
    }

    return SentenceObj;
}

module.exports = SentenceCtrl;

