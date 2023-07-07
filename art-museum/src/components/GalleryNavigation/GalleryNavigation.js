import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
// import harvardArt from "../../data/harvardArt";
import "./GalleryNavigation.css";

function GalleryNavigation(props) {
    const galleries = Object.values(props.data.records);
    const gallerylist =
        galleries.map(gallery => {
            return <NavLink key={gallery.id} to={`/galleries/${gallery.id}`}>{gallery.name}</NavLink>
        })
    return (
        <nav>
            <NavLink to="/"><h1>Galleries</h1>
            </NavLink>
            {gallerylist}
        </nav>
    )

}

export default GalleryNavigation;
