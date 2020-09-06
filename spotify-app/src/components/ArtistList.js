import React from "react";
import ArtistItem from './ArtistItem';
import {connect} from "react-redux";

const ArtistList = class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('propsARTIST', this.props)
        const artist = this.props.artistsReducer.artistData !==null ?  this.props.artistsReducer.artistData.artists.items.map((item, id) => 
            <ArtistItem key={id} name={item.name} images={item.images[0] ? item.images[0].url : 'https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png'} 
            spotifyLink={item.external_urls.spotify} />) :  <p className="artist__empty">no artist yet</p>
        return (
            <section className="artist">
                <ul className="artist__list">
                    {artist}
                </ul>
            </section>
        )
    }

}


const mapStateToProps= ({artistsReducer}) => ({ //преобразовывает стейт в попсы
    artistsReducer,
})



export default connect(mapStateToProps)(ArtistList)

