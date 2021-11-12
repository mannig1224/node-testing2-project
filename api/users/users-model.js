const db = require('../../data/db-config.js');

function getUsers() {
  return db("users as u")
  
}

function findById(user_id) {
    return db("users").where({ user_id }).first();
  }
  

async function add(user) {
    const [id] = await db("users").insert(user);
    return findById(id);
}


const deleteById = id => {
    return db('users')
        .where('id', id)
        .del();
}

module.exports = {
    getUsers,
    add,
    findById,
    deleteById
}