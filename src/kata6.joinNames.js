const joinNames = namesObj => {
    var names = namesObj.map(function(item) {
        return item['name'];
    });
    if (names.length === 0) { return 'No Names' };
    if (names.length === 1) { return namesObj[0].name };
    var finalName = names.pop();
    return names.join(', ') + ' & ' + finalName;
};

module.exports = joinNames;
