function showSalary(users,age) {
let result = '';
for (let i=0; i<users.length ; i+=1) {
if (users[i].age<=age) {result = result + users[i].name + ', ' + users[i].balance + '\n'} 
}
return result.substr(0,result.length-1)
}