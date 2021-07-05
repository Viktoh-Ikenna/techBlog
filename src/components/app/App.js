import DeskFooter from "../DeskFooter/deskFooter";
import DeskNav from "../deskNav/deskNav";
import { DesktopHome } from "../desktop/deskhome/desktopHome";
import { ArticlePage } from "../postArticlePage/ArticlePage";
import { PostListingPages } from "../PostListingPages/postListingPages";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <DeskNav />
        <div className="pageBody">
          <div className="placements"></div>
          <Switch>
            <Route exact path="/">
              <DesktopHome />
            </Route>
            <Route path='/posts'>
              <PostListingPages />
            </Route>
            <Route path='/article'>
              <ArticlePage />
            </Route>
            <Route path='*'>
              <div>404 bro</div>
            </Route>
          </Switch>
        </div>
        <DeskFooter />
      </div>
    </Router>
  );
}

export default App;
