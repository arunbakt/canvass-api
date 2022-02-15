const connectionPool = require('../infra/mysqlCanvassDb');

const addCanvassNote = async (canvassNote) => { 
    try {
        const promisePool = connectionPool.promise();
        const [rows, fields] = await promisePool.query('insert into canvass_notes set ?', canvassNote);
        connectionPool.releaseConnection(promisePool);
        return await rows.insertId;
    } catch(e){
        console.log(e);
        throw e;
    }    
}

const retrieveCanvassNotes = async () => {
    try {
        const promisePool = connectionPool.promise();
        const [rows] = await promisePool.query('select * from canvass_notes order by created_at desc');
        connectionPool.releaseConnection(promisePool);
        return rows;
    } catch(e) {
        console.log(e);
        throw e;
    } 
}

module.exports = { addCanvassNote, retrieveCanvassNotes };