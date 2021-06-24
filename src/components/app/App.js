import DeskFooter from "../DeskFooter/deskFooter";
import DeskNav from "../deskNav/deskNav";
import { DesktopHome } from "../desktop/deskhome/desktopHome";
import { ArticlePage } from "../postArticlePage/ArticlePage";
import { PostListingPages } from "../PostListingPages/postListingPages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <DeskNav />
      <div className="pageBody">
        {/* <DesktopHome /> */}
        {/* <PostListingPages /> */}
        <ArticlePage />
      </div>
      <DeskFooter />
    </div>
  );
}

export default App;
