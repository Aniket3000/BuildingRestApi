// bridge between route and database
const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
    const offset = helper.getOffset(page,config.listPerPage);
    const rows = await db.query(
        `SELECT id,name,released_year, github_rank,pypl_rank,tiobe_rank
        FROM restapibuildproglang LIMIT ?,?`,
        [offset, config.listPerPage]
    );

    const data = helper.emptyOrRows(rows);
    const meta = {page};

    return {
        data,meta
    }
};

async function create(programmingLanguage){
    const result = await db.query(
        `INSERT INTO restapibuildproglang 
        (name, released_year, github_rank, pypl_rank, tiobe_rank)
        VALUES
        (?, ? , ? , ?, ? )`,
        [
            programmingLanguage.name,programmingLanguage.released_year, programmingLanguage.github_rank,
            programmingLanguage.pypl_rank, programmingLanguage.tiobe_rank
        ]
    );
    
    let message = 'Error in creating a prograaming language.';

    if(result.affectedRows){
        message = 'Programming language added successfully.';
    }

    return {message};

}

async function update(id,programmingLanguage){
    const result = await db.query(
        `UPDATE restapibuildproglang
        SET name=?, released_year=?, github_rank=?,
        pypl_rank=?, tiobe_rank=?
        WHERE id=?`,
        [
            programmingLanguage.name,programmingLanguage.released_year, programmingLanguage.github_rank,
            programmingLanguage.pypl_rank, programmingLanguage.tiobe_rank,id
        ]
    );

    let message = 'Error while updating language';

    if(result.affectedRows){
        message = 'Updation successful.';
    }

    return {message};
}

async function remove(id){
    const result = await db.query(
        `DELETE FROM restapibuildproglang WHERE id=?`,
        [
            id
        ]
    );

    let message = 'Error in removal of language';

    if(result.affectedRows){
        message = 'Deletion successful';
    }

    return {message};
}

module.exports = {
    getMultiple,
    create,
    update,
    remove
};