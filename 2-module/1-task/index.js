function sumSalary(salaries) {
    let summa=0;
    for (let key in salaries){
        if (typeof salaries[key] === 'number' && Number.isFinite(salaries[key]) )    {
            summa += salaries[key];
        }
    }
    return summa;
}
