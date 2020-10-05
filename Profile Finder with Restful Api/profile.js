
class Profile {

    async getProfile(username) {

        // Asynchronous structure is used to perform the processes in order.
        // Get the profile using `fetch Api` 
        const profileResponse = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`);
        const profile =  await profileResponse.json();

        // Get todo list 
        // profile[0] was used because the first index of returned response expression produces the data.
        const todoResponse = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${profile[0].id}`)
        const todo = await todoResponse.json();
        
        return {profile,
                todo};
    }
}