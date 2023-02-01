export const GET_POSTS = 'GET_POSTS'



const getPosts = (post) => ({
    type: GET_POSTS,
    payload: post
})


export const loadPosts = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => dispatch(getPosts(data)))
}


