import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../Utilites/Validators/Validator";
import {Textarea} from "../../../common/FormsControls/FormControls";


const maxLength10 = maxLengthCreator(10)

const MyPosts = props => {

    const addNewPost = values => {
        props.addPostCreator(values.newPostText)
    }

    return (
        <div className={classes.postsBLock}>
            <h3>My posts</h3>
            <MyPostReduxForm onSubmit={addNewPost}/>
            <div className={classes.posts}>
                {[...props.posts].reverse().map((post, index) => {
                    return (
                        <Post
                            key={index}
                            message={post.message}
                            likesCount={post.likesCount}
                        />
                    )
                })}
            </div>
        </div>
    )
}

const MyPostsForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={"Text of a new post"}
                    name={'newPostText'}
                    component={Textarea}
                    validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const MyPostReduxForm = reduxForm({
    form: 'posts'
})(MyPostsForm)


export default MyPosts


