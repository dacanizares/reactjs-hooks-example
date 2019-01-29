const USERS_API_URL = 'https://randomuser.me/api/?lego&results=3';

class UsersAPI {
    find() {
        console.debug('Calling web API');
        
        return fetch(USERS_API_URL)
        .then(function(response) {
            return response.json();
        })
        .then(function(usersJson) {
            console.debug(usersJson.results);
            return usersJson.results;
        });
    }
}

export default UsersAPI;