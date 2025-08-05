function makeFriendsList(friends) {
    let ulElem = document.createElement('ul');

    ulElem.innerHTML = friends.map(e => `<li>${e.firstName} ${e.lastName}</li>`).join('');

    return ulElem;
}
