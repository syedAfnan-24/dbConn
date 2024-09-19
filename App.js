let sql = require('mysql2');

let conn = sql.createConnection({
    host: "classyweddingplanners.com",
    user: "classyweddingplanners",
    password: "<*_3856AF7666nan2416_*>",
    database: "CWP_DB"
});

conn.connect((error) => {
    if (error) {
        console.error("CONNECTION TO DB FAILED", error);
    } else {
        console.log("SUCCESSFULLY CONNECTED TO DATABASE");
    }
});

let registerUser = `select * from users`
conn.query(registerUser,(err,res)=>{
    if(err){
        console.error(err);
    }else{
        console.log(res);
    }
})


