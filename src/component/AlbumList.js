import React, { Component } from 'react';
import { View } from 'react-native';
// import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { albums: [ {title: 'hello'}] };

    componentWillMount() {
        let dummyAlbums = [
            {title: "Taylor Swift", artist: "Taylor Swift", url: "##", image: "../img/img1.jpg", thumbnail_image: "../img/img1.jpg"},
            {title: "Fearless", artist: "Taylor Swift", url: "##", image: "../img/img2.jpg", thumbnail_image: "../img/img2.jpg"},
            {title: "Speak Now", artist: "Taylor Swift", url: "##", image: "../img/img3.jpg", thumbnail_image: "../img/img3.jpg"},
            {title: "Red", artist: "Taylor Swift", url: "##", image: "../img/img1.jpg", thumbnail_image: "../img/img1.jpg"},
            {title: "1989", artist: "Taylor Swift", url: "##", image: "../img/img2.jpg", thumbnail_image: "../img/img2.jpg"},
        ];
        this.setState({ albums: dummyAlbums });
        // axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        //     .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums(){
        if(this.state.albums.length == 0){
            return null
        }
        return this.state.albums.map( (album) => {
            return <AlbumDetail key={album.title} album={album} />
        });
    }
    render () {
        return (
            <View>
               {this.renderAlbums()}
            </View>
        );    
    }    
}

   

export default AlbumList;