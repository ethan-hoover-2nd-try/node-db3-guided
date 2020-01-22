const db = require('./data/db-config')

// above the fold
module.exports = {
    list,
    findById,
    insert
}

//implementation details
function list() {
    //select * from users;
    return db.select('*').from('users')
}

function findById(id) {

    return db('users').where({id}).first()
}

function insert(user) {
    return db('users').insert(user).then(([id]) =>{ 
        return findById(id);
    })
}