import React from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import { getFilmsFromApiWithSearchedText, getImageFromApi } from "../API/TMDBApi.js";

class FilmItem extends React.Component{
    render(){
        const film = this.props.film;
        return(
            <View style={styles.main1}>
                <View style={styles.image1}>
                    <Image style={styles.picture} source ={{uri: getImageFromApi(film.poster_path)}} />
                </View>
                <View style={styles.textBox}>
                    <View style={styles.titreBox}>
                        <View style={styles.filmtitre}>
                            <Text style={styles.text_title}>{film.original_title}</Text>
                        </View>
                        <View style={styles.votetitre}>
                            <Text style={styles.text_title}>{film.vote_average}</Text>
                        </View>
                    </View>
                    <View style={styles.description}>
                        <Text style={styles.text_title} numberOfLines={2}>{film.overview}</Text>
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.text_date}> Sorti le  {film.release_date}</Text>
                    </View>
                    
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main1: {
        flex: 1,
        flexDirection:"row",
        height: 120,
        marginBottom: 10,
        marginTop: 5,
        borderBottomWidth: 2,
        borderTopWidth: 1
    },
    image1:{
        flex:1,
        
    },
    picture:{
        flex:1,
        height: 120,
    },
    description:{
        flex:1,
        padding: 5,
    },
    footer:{
        flex:1,
        padding: 5,
        
    },
    titreBox:{
        flex:1,
        flexDirection:"row",
    },
    filmtitre:{
        flex:5,
        padding: 5,
    },
    votetitre:{
        flex:1,
        
    },
    textBox:{
        flex:3,
        flexDirection:"column",
    },
    text_title:{

    },
    text_date:{
        textAlign:"right",
    }
})

export default FilmItem