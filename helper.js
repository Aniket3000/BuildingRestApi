// for calculation of offset for pagination -------> (Read about this offset pagination, cursor pagination)
// it is about to show about 

const { listPerPage } = require("./config")

function getOffset(currentPage = 1,listPerPage){
    return (currentPage - 1) * [listPerPage];
};

function emptyOrRows(rows){
    if(!rows)
        return [];
    return rows;
}

module.exports = {
    getOffset,
    emptyOrRows
};