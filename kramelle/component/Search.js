import React from "react";
import { View, Button, TextInput, StyleSheet, FlatList, Text } from "react-native";
import films from "../Helpers/filmData.js";
import FilmItem from "./FilmItem.js";
import { getFilmsFromApiWithSearchedText, getImageFromApi } from "../API/TMDBApi.js";

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            biblio : [],
            searchedText: ""
        }
    }

    loadFilms(){
        if(this.state.searchedText.length > 0)
            getFilmsFromApiWithSearchedText(this.state.searchedText).then(data => this.setState({ biblio: data.results}));
        
    }

    getFilm(text1){
        this.setState({searchedText : text1});

        //alert(this.state.searchedText);
    }
    
    render(){
        return(
            <View style={styles.main1}>
                <TextInput style={styles.textinput} placeholder = "Titre du film"  onChangeText ={(text1)=>this.getFilm(text1)} />
                <Button style={styles.btn} title="Rechercher" onPress={()=>this.loadFilms()}/>
                <FlatList
                    data = {this.state.biblio}
                    keyExtractor = {(item) => item.id.toString()}
                    renderItem = {({item}) => <FilmItem film={item} />}
                />
                
                <Text>salut a tous </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main1 : {
        marginTop:20,
        flex: 1 
    },
    textinput : {
        margin: 5,
        height:50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft:5,
        borderRadius: 5,
    },
    btn:{
        marginRight: 5,
        backgroundColor: "red"
    }
})

export default Search