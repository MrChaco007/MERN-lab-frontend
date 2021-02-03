import React from "react";


const Display = (props) => {

const {artists} = props
const loaded = () => {
    return(
        <div className="container" style={{textAlign: "center"}}>
            {artists.map((artist) => {
                return (
                    <article key = {artist._id}>
                        <h1>{artist.name.toUpperCase()}</h1>
                        <h3>
                            {artist.genre}
                        </h3>
                        <button>Show albums</button>
                        <button onClick={() => {props.selectArtist(artist); props.history.push("/edit")}}>Edit Artist</button>
                        <button onClick={() => {props.deleteArtist(artist)}}>Delete Artist</button>
                    </article>
                )
            })}
        </div>
    )
}
const loading = <h1>Loading...</h1>
return artists.length > 0 ? loaded() : loading

}

export default Display;