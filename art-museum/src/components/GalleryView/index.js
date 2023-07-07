import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function GalleryView(props) {
    const {galleryId} = useParams();
    // debugger
    const result = props.data.records.find(gallery => gallery.id == galleryId)
    console.log(result)

    return (
        <h2>{result.name}</h2>
    )
};

export default GalleryView;