/**
 * Created by sample on 06-Feb-17.
 */

"use strict";

var stringSimilarity = require('string-similarity');

var SentenceCtrl = function(Sentence){

    var SentenceObj = {};

    SentenceObj.PostSentence = function(req, res){
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

    SentenceObj.GetSentences = function(req, res){
        Sentence.find(function(err, sentences){
            if(err) {
                res.json({status: false, error: "Something went wrong"});
                return
            }
            res.json({status: true, sentences: sentences});
        });
    }

    SentenceObj.GetSentenceSimilarity = function(req, res, next){
        var arrSentences = [];
        Sentence.find(function(err, sentences){
            arrSentences = sentences.map(function(sentence){
                   return sentence.sentence;
               })

            var sentenceToCheck = req.params.sentence;
            var result = stringSimilarity.findBestMatch(sentenceToCheck,arrSentences);
            res.json({status: true, bestMatch : result.bestMatch, allRatings: result.ratings});
        })
    }

    return SentenceObj;
}

module.exports = SentenceCtrl;

