const getEmployerRole = (employeeName, employees) => {
    if (employeeName === "") { return 'No Name/Incorrect Name Entered'};
    let result = employees.find( x => x.name === employeeName);
    return result.role;
};

module.exports = getEmployerRole;
