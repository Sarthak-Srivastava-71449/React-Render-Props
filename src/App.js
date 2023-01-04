import './App.css';
import LikeImage from './components/LikeImage';
import LikeIMHOC from './components/LikeIMHOC';
import LikePost from './components/LikePost';
import PostHOC from './components/PostHOC';
import Counter from './components/Counter';


function App() {
  return (
    <div>

      <h1>Some Blog</h1>

{/* solution for render props */}

      <div className='buttons'>
        <h2>Render Props Method:- </h2>
        <Counter render={(counter, handleIncreament)=> <LikeImage likeImageCounter={counter} handleLikeImageCount = {handleIncreament}/>}/>
        <Counter render={(counter, handleIncreament)=><LikePost LikePostCounter={counter} handlePostCount = {handleIncreament}/>}/>
      </div>


{/* Solution for HOC */} 

      <div className='buttons'>
        <h2>Using HOC:-</h2>
        <LikeIMHOC/>
        <PostHOC/>
      </div>

    </div>
  );
}

export default App;