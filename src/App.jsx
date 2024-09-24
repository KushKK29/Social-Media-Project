import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import PostListProvider from "./store/post-list-store";
import Login from "./components/Login";
import Thank from "./components/Thank";
import "./App.css";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import About from "./components/About";

function App() {
  const [selectedTab, setselectedTab] = useState("Home");
  const handleTab = (selectedTab) => {
    if (selectedTab === "Home") {
      return <PostList />;
    } else if (selectedTab === "Create Post") {
      return <CreatePost />;
    } else if (selectedTab === "Login") {
      console.log(selectedTab);
      return (
        <Login selectedTab={selectedTab} setselectedTab={setselectedTab} />
      );
    } else if (selectedTab === "Thank") {
      console.log(selectedTab);
      return <Thank></Thank>;
    } else if (selectedTab === "Features") {
      return <Features></Features>;
    } else if (selectedTab === "Pricing") {
      console.log(selectedTab);
      return <Pricing></Pricing>;
    } else if (selectedTab === "About") {
      return <About></About>;
    } else if (selectedTab === "Sign Out") {
      return <center>Signing Out Successfull</center>;
    }
  };

  return (
    <PostListProvider>
      <div className="content">
        <SideBar selectedTab={selectedTab} setselectedTab={setselectedTab} />
        <div className="contain">
          <Header selectedTab={selectedTab} setselectedTab={setselectedTab} />
          {handleTab(selectedTab)}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
