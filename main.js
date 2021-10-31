async function getFetch() {
    try {
        return await fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))
    }
    catch (error) {
        console.log(error)
    }
}
getFetch()

async function apiPosts() {
    try {
        return await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => console.log(json))
    }
    catch (error) {
        console.log(error)
    }
}
apiPosts()

async function apiComments() {
    try {
        return await fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(json => console.log(json))
    }
    catch (error) {
        console.log(error)
    }
}
apiComments()

async function apiPosts1() {
    try {
        return await fetch('https://jsonplaceholder.typicode.com/posts/5')
            .then(response => response.json())
            .then(json => console.log(json))
    }
    catch (error) {
        console.log(error)
    }
}
apiPosts1()


async function apiComments1() {
    try {
        return await fetch('https://jsonplaceholder.typicode.com/comments/9')
            .then(response => response.json())
            .then(json => console.log(json))
    }
    catch (error) {
        console.log(error)
    }
}
apiComments1()



async function apiAlbums() {
    try {
        return await fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(json => console.log(json))
    }
    catch (error) {
        console.log(error)
    }
}
apiAlbums()



let container1 = document.getElementById("container1")

async function albumApi() {
    try {
        return await fetch('https://jsonplaceholder.typicode.com/albums/2')
            .then(response => response.json())
            .then(json => printAlbum(json, container1))
    }
    catch (error) {
        console.log(error)
    }
}
albumApi()



function printAlbum(obj, container) {
    for (let key in obj) {
        container.innerHTML += `<p>${key}:${obj[key]}</p>`
    }
}



let container = document.getElementById("container")


async function apiUsers() {
    return await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => getUsers(json, container))
}
apiUsers()


function getUsers(array, container) {
    for (let iterator of array) {
        for (let key in iterator) {
            container.innerHTML += `<p>${key}:${iterator[key]}</p>`
        }

    }
}








async function apiUsers1() {
    await fetch('https://jsonplaceholder.typicode.com/users/22')
        .then(response => response.json())
        .then(json => printUser(json, container))

    }
apiUsers1()

function printUser(obj, container) {
    for (let key in obj) {
        container.innerHTML += `<p>${key}:${obj[key]}</p>`
    }
}


function getData(userId){
    return new Promise(async(resolve,reject)=>{
        await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response=>response=>response.json())
        .then(res=>res.id?resolve(res) :reject({ massage:"no found"}))
    })
}
async function testPromise(){
    try{
        return await getData(3)
    }
    catch(error){
        console.log(error)    
    }
}
testPromise().then(res=>console.log(res))


// let options={
//     method:`post`
// }

// let postData=async()=>{
//     try{
//         return await fetch(`https://jsonplaceholder.typicode.com/users/todos`,options)
//     }
//     catch(error){
//         return error
//     }
// }
// postData()
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(err=>console.log(err))




//mission 12
// const options = {
//     method: "POST"
// };
// const asyncAddPost = async () => {
//     try {
//         return await fetch('https://jsonplaceholder.typicode.com/posts', options)
//             .then(res => res.json())
//             .then(res => console.log(res))
//     } catch (err) {
//         console.log(err);
//     }
// }
// asyncAddPost();

//mision 13

// const options = {
//     method: "POST",
//     body: {
//         firstName: "haim",
//         lastName: "aye"
//     }
// };

// const asyncAlbum = async () => {
//     try {
//         return await fetch('https://jsonplaceholder.typicode.com/albums', options)
//             .then(res => res.json())
//             .then(res => console.log(res))
//     } catch (err) {
//         console.log(err);
//     }
// }
// asyncAlbum();







const options = {
    method: "POST",
    body: { name: "haim", age: 30 }
};

const asyncObj = async (api, resObj) => {
    try {
        return await fetch(api, resObj)
            .then(res => res.json())
            .then(res => console.log(res))
    } catch (err) {
        console.log(err);
    }
}
asyncObj('https://jsonplaceholder.typicode.com/todos', options);


