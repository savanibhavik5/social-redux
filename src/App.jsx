import "./App.css";
import TopNavBar from "./Pages/TopNavBar";
import { BrowserRouter } from "react-router-dom";
import NewPost from "./Component/NewPostComponent";
import LeftNavComponent from "./Component/LeftNavComponent";
import ReelsComponent from "./Component/ReelsComponent";
import PostComponent from "./Component/PostComponent";
import Video from "./Pages/Video";
import VideoComponent from "./Component/VideoComponent";
import { useEffect } from "react";
import { postData } from "./Services/Actions/Action";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postData())
},[])

  return (
    <BrowserRouter className="container">
      <TopNavBar />
      <div className="row mt-3 p-0">
        <div className="col-md-3 ">
          <LeftNavComponent />
        </div>
        <div className="col-md-6">
          {/* <ReelsComponent /> */}
          <NewPost />
          <PostComponent />
          {/* <Video /> */}
          {/* <VideoComponent /> */}
        </div>
        <div className="col-md-3 me-2"></div>
      </div>
    </BrowserRouter>
  );
}
export default App;
