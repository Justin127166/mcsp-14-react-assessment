const PostItem = ({post}) =>{
    function handleClick(e){
        console.log(e.target.id)
    }
    return <h1 onClick = {handleClick} id ={post.id}>
        {post.title}
    </h1>
}



export default PostItem