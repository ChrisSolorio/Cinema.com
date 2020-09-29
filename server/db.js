const Pool = require("./node_modules/pg/lib").Pool;

const pool = new Pool ({
    user: "temp_admin",
    password: "temp_pass",
    host: "localhost",
    port: 5432,
    database: "cinema"
});

module.exports = pool;