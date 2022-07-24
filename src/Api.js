const baseURL = 'https://gorest.co.in/public/v2';
const token = '791a4bdc85e9e4db3defbdd204c01ee1fbd39c5faf755fda9a3979649e5a6881';

export async function getUser() {
    const response = await fetch(baseURL + "/users");
    return await response.json();
}

export async function getUserById(id) {
    const response = await fetch(baseURL + "/users/" + id, {
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    });
    return await response.json();
}

export async function getUserPosts(id) {
    const response = await fetch(baseURL + `/users/${id}/posts`, {
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    });
    return await response.json();
}

export async function deletePost(id) {
    try {
        const response = await fetch(baseURL + `/posts/${id}`, {
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    } catch (e) {
        return e;
    }
}

export async function createPost(id, data) {
    const dataJson = JSON.stringify(data);
    const response = await fetch(baseURL + `/users/${id}/posts`, {
        method: "POST",
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        body: dataJson,
    });
    return await response.json();
}

export async function updatePost(id, data) {
    const dataJson = JSON.stringify(data);
    const response = await fetch(baseURL + `/posts/` + id, {
        method: "PATCH",
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        body: dataJson,
    });
    return await response.json();
}

export async function getPosts() {
    const response = await fetch(baseURL + "/posts", {
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    });
    return await response.json();
}

export async function getCommentsByPost(id) {
    const response = await fetch(baseURL + `/posts/${id}/comments`, {
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    });
    return await response.json();
}

export async function getPostById(id) {
    const response = await fetch(baseURL + `/posts/${id}`, {
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    });
    return await response.json();
}

export async function createComentario(id, data) {
    const dataJson = JSON.stringify(data);
    const response = await fetch(baseURL + `/posts/${id}/comments`, {
        method: "POST",
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        body: dataJson,
    });
    return await response.json();
}