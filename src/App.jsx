import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNavBar from "./Pages/TopNavBar";
import NewPost from "./Component/NewPostComponent";
import { useEffect } from "react";
import LeftNavComponent from "./Component/LeftNavComponent";
import ReelsComponent from "./Component/ReelsComponent";
import PostComponent from "./Component/PostComponent";
import Video from "./Pages/Video";
import RightNav from "./Pages/RightNav";
import VideoComponent from "./Component/VideoComponent";
import { commentData, postData } from "./Services/Actions/Action";
import { useDispatch } from "react-redux";
import Setting from "./Pages/Setting";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(commentData());
    dispatch(postData());
  }, []);

  return (
    <BrowserRouter className="container">
      <TopNavBar />

      <div className="row mt-3 p-0">
        <div className="col-md-3 ">
          <LeftNavComponent />
        </div>
        <div className="col-md-6">
          <Routes>
            <Route exact path="/" element={<PostComponent />} />
            <Route exact path="/reel" element={<ReelsComponent />} />
            <Route exact path="/video" element={<VideoComponent />} />
            <Route exact path="/setting" element={<Setting />} />
          </Routes>
        </div>
        <div className="col-md-3">
          <RightNav />
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
