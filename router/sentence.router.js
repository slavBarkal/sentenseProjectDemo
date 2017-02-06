/**
 * Created by sample on 06-Feb-17.
 */
var Sentence = require('../model/sentence.model');
var Sentenceontroller = require('../controllers/sentence.controller')(Sentence);

module.exports = function(app){

    // Get sentences from db
    app.get('/api/sentences', Sentenceontroller.GetSentences);

    // Add new sentence to db
    app.post('/api/sentences', Sentenceontroller.PostSentence);

    app.put('/api/sentences/:sentence_id', Sentenceontroller.UpdateSentence);

    app.delete('/api/sentences/:sentence_id', Sentenceontroller.DeleteSentence);

}