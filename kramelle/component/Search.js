import React from "react";
import { View, Button, TextInput, StyleSheet, FlatList, Text, ActivityIndicator } from "react-native";
import films from "../Helpers/filmData.js";
import FilmItem from "./FilmItem.js";
import { getFilmsFromApiWithSearchedText, getImageFromApi } from "../API/TMDBApi.js";

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            biblio : [],
            searchedText: "", 
            isloading : false,
        }

        this.page = 0
        this.nbrPage = 0
        
    }

    Search(){
        this.page = 0;
        this.nbrPage = 0
        this.setState({
            biblio : []
        })

        this.loadFilms()
    }

    loadFilms(){
        this.setState({isloading : true})
        if(this.state.searchedText.length > 0)
            getFilmsFromApiWithSearchedText(this.state.searchedText, this.page+1).then(data => {
                this.page = data.page
                this.nbrPage = data.total_pages
                this.setState({ biblio: [...this.state.biblio, ...data.results], isloading: false}, ()=>console.log(this.page))
            
            });
        
    }

    getFilm(text1){
        this.setState({searchedText : text1});

        //alert(this.state.searchedText);
    }

    displayLoading(){
        if(this.state.isloading){
            return (
                <View style={styles.activityInd}>
                    <ActivityIndicator  size="large" color="#0000ff"/>
                </View>
            )
        }
    }
    
    render(){
        return(
            <View style={styles.main1}>
                <TextInput style={styles.textinput} onSubmitEditing ={()=>this.Search()} placeholder = "Titre du film"  onChangeText ={(text1)=>this.getFilm(text1)} />
                <Button style={styles.btn} title="Rechercher" onPress={()=>this.Search()}/>
                <FlatList
                    data = {this.state.biblio}
                    onEndReachedThreshold = {0.5}
                    keyExtractor = {(item) => item.id.toString()}
                    renderItem = {({item}) => <FilmItem film={item} />}
                    onEndReached = {() => {
                        if (this.state.biblio.length > 0 && this.page < this.nbrPage) {
                           this.loadFilms();
                        }
                    }}
                />
                
                <Text>salut a tous </Text>
                {this.displayLoading()}
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
    },
    activityInd:{
        position: "absolute",
        left: 0,
        right:0,
        top: 100,
        bottom:0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'

    },
})

export default Search