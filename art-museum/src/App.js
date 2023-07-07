// import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import { Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import harvardArt from "./data/harvardArt";

function App() {
  return (
    <>
    <div className="page-wrapper">
      <GalleryNavigation data={harvardArt}/>
      <Route path="/galleries/:galleryId">
        <GalleryView data={harvardArt}/>
      </Route>
    </div>

    </>
  );
}

export default App;
