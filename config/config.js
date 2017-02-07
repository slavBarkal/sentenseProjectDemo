/**
 * Created by sample on 06-Feb-17.
 */
var config = {
    port: process.env.PORT || 3000,
    db: process.env.dbConnection || 'mongodb://localhost:27017/demoDb'
}
module.exports = config;