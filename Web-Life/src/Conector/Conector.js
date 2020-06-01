const  {Client}  = require('pg')

const client = new Client({
    user: "postgres",
    password: "1",
    host: "localhost",
    port: 5432,
    database: "MLife_Compañy"
})

module.exports =  () => {
    return client;
}
