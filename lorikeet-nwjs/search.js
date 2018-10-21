// lunr@v2.0 api完全升级，此案例需要使用v1.0
const lunr = require('lunr');
let index;

function resetIndex(files) {
    index = lunr(function() {
        this.field('file');
        this.field('type');
        this.ref('path');
    })
}

function addToIndex(file) {
    index.add(file);
}

function find(query, cb) {
    if (!index) {
        resetIndex();
    }
    const results = index.search(query);
    cb(results);
}

module.exports = {
    addToIndex, find, resetIndex
}