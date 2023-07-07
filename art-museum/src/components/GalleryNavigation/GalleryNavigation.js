import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import harvardArt from "../../data/harvardArt";

function GalleryNavigation(props) {
    const galleries = Object.values(harvardArt.records);
    const gallerylist =
        galleries.map(gallery => {
            return <NavLink to={`/galleries/${gallery.id}`}>{gallery.gallerynumber}</NavLink>
        })
    return (
        <nav>
            {gallerylist}
        </nav>
    )

}

export default GalleryNavigation;
