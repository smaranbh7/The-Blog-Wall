import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isPending, error } =useFetch('http://localhost:8000/blogs');
  // here, :blogs means grab the data and call it blogs 

  return (
    <div className="home"> 
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }  { /* {blogs} is a prop to access data in BlogList */}
    </div>
  );
}
 
export default Home; 

