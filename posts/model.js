const db = require('../data/db-config')

// above the fold
module.exports = {
    list,
    findById
}

//implementation details
function list() {
    //select * from users;
    return db('posts as p')
    .join('users as u', 'p.user_id', 'u.id').select('p.id as postId', 'p.contents', 'u.username as postedBy')
}

function findById(id) {

    return db('posts as p').join('users as u', 'p.user_id', 'u.id').where('p.id', id).select('p.id as postId', 'p.contents', 'u.username as postedBy').first()
}

