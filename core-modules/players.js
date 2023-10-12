const players = ['sakib', 'tamim', 'mashrafe'];
const captain = 'Mashrafe';

function test() {
    console.log('text invoked');
}

module.exports = {
    players,
    captain,
    test,
};
// module wrapper function
/*
// node code is executed in such a way that the first code is wrapped inside a function called Node.js module wrapper
(function(exports, require, module, __filename, __dirname) {
    // module code
    return module.exports
})()
*/
