function namify(users) {
  let names = [];
  for (let i= 0; i < users.length; i += 1) {
       names.push(users[i].name);
         }
    return names;
}
