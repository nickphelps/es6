// The function below uses plain old Promises. Rewrite it as an "async" method!

let getDogsOwnersBestFriend = () => {
    return get('/dog/1').then(dog => {
        return get(`/owner/${dog.owner}`);
    }).then( owner => {
        return get(`/friend/${owner.bestFriend}`);
    }).then( friend => {
        return friend.name;
    })
}

let getDogsOwnersBestFriend = async () => {
    let response1 = await axios.get('/dog/1')
    return get(`/owner/${dog.owner}`)
    let response2 = await owner => {
        return get(`/friend/${owner.bestFriend}`)
    }
    let response3 = await firend => {
        return friend.name
    }
}