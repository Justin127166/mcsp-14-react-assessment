import axios from "axios"
import {useState, useEffect } from "react"
import Posts from "./components/Posts.js"
import Loading from "./components/Loading.js"

const App = () => {
    // use the useEffect hook to make an initial API call to the url: 
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        async function test(){
            try{
                const url = await axios.get('https://jsonplaceholder.typicode.com/posts')
                setPosts(url.data)
                setLoading(false)
            }catch(error){
                console.error(error)
            }
        }
        test()
    })
    // your stat should be: 
        // posts and loading. 
    // Use the useState hook to set the initial state

    // your components should be app, posts, postItem, and loading

    // conitionally render components so that if the app is loading, the loading component is renderd. If it is not loading and there are posts, the posts and in turn postItem components are renderd

    // the end result is that you should be able to click on an individual post and console.log the id of that post. 
if(loading){
    return <Loading />
}else{
    return <Posts posts={posts}/>
}
}

export default App