import profileReducer, {addPostCreator, deletePost} from "./profileReducer";
let state = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'How is your react?', likesCount: 11},
        {id: 3, message: 'Very Hard', likesCount: 13},
        {id: 4, message: 'Very Hard', likesCount: 14},
        {id: 5, message: 'Very Hard', likesCount: 15}
    ]

}

test('new post should be added', () => {
    let action = addPostCreator('hello my friend')

    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(6)
});

test('message of a new post should be correct', () => {
    let action = addPostCreator('hello my friend')

    let newState = profileReducer(state, action)
    expect(newState.posts[5].message).toBe('hello my friend')
});

test('length after deleting should be decrement', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(4)
});
