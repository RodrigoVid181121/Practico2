import React, { useState, useCallback } from 'react';
import {View,Text,Image, ScrollView, StyleSheet, Modal, Button, TouchableHighlight} from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";
import Colors from '../utils/Colors';


export default function Series(props){
    const{navigation} = props;
    const [video,setVideo] = useState({
        vid1:'V4J5uXO6cbc',
        vid2: 'gYp4cKumTwU',
        vid3: 'u9aKPEPIF3M',
        vid4: 'Z0fGRrgVPjE',
        vid5: 'hQi9zEaCMYI',
        vid6:'OunbSfc5iQk',
        vid7: 'GXM7SRdos2A',
        vid8: 'Wji_GTTjPLM',
        vid9: 'PatIeEN93Wc',
        vid10: 'VwOPA2upeCA',
        vid11:'I1UaFtNE4Rw',
        vid12: 'I1UaFtNE4Rw',
        vid13: 'i1eJMig5Ik4',
        vid14: 'rCj-Fb1OmXg',
        vid15: 'kkEdpbznHAM',
        vid16: '9AVt5oyzMbw',
        vid17: '-pdCvr2sQw4',
        vid18: 'fU2K2Y_LKx0'

    });
    const [pel, setPel] = useState();
    const [vid, setVid] = useState();

    const StateChange = useCallback((state)=>{
        if(state === "ended"){
          setVideo(false);
          Alert.alert('El video ha terminado');
        }
      },[]);

      const selectedComponent = (key) =>{
        switch(key){
            case "vid1":
                setPel(!pel)
                setVid(
                    <>
                        <YoutubePlayer
                    height={300}
                    play={video}
                    videoId={video.vid1}
                    onChangeState={StateChange}
                />
                <Text style={styles.subtitulo}>Cantidad de temporadas: 2</Text>
                    </>
                
                )
                break;
            case "vid2":
                setPel(!pel)
                setVid(
                    <>
                <YoutubePlayer
                   height={300}
                    play={video}
                    videoId={video.vid2}
                    onChangeState={StateChange}
                />
                <Text style={styles.subtitulo}>Cantidad de temporadas: 1</Text>
                </>)
                break;
            case "vid3":
                setPel(!pel)
                setVid(
                    <>
                <YoutubePlayer
                   height={300}
                    play={video}
                    videoId={video.vid3}
                    onChangeState={StateChange}
                />
                <Text style={styles.subtitulo}>Cantidad de temporadas: 1</Text>
                </>)
                break;

            case "vid4":
                setPel(!pel)
                setVid(
                    <>
                <YoutubePlayer
                   height={300}
                    play={video}
                    videoId={video.vid4}
                    onChangeState={StateChange}
                />
                <Text style={styles.subtitulo}>Cantidad de temporadas: 1</Text>
                </>)
                break;

            case "vid5":
                setPel(!pel)
                setVid(
                    <>
                <YoutubePlayer
                   height={300}
                    play={video}
                    videoId={video.vid5}
                    onChangeState={StateChange}
                />
                <Text style={styles.subtitulo}>Cantidad de temporadas: 1</Text>
                </>)
                break;

            case "vid6":
                setPel(!pel)
                setVid(
                    <>
                <YoutubePlayer
                   height={300}
                    play={video}
                    videoId={video.vid6}
                    onChangeState={StateChange}
                />
                <Text style={styles.subtitulo}>Cantidad de temporadas: 2</Text>
                </>)
                break;
            case "vid7":
                setPel(!pel)
                setVid(
                    <>
                <YoutubePlayer
                   height={300}
                    play={video}
                    videoId={video.vid7}
                    onChangeState={StateChange}
                />
                <Text style={styles.subtitulo}>Cantidad de temporadas: 3</Text>
                </>)
                break;

            case "vid8":
                setPel(!pel)
                setVid(
                    <>
                <YoutubePlayer
                   height={300}
                    play={video}
                    videoId={video.vid8}
                    onChangeState={StateChange}
                />
                <Text style={styles.subtitulo}>Cantidad de temporadas: 10</Text>
                </>)
                break;

            case "vid9":
                setPel(!pel)
                setVid(
                    <>
                <YoutubePlayer
                   height={300}
                    play={video}
                    videoId={video.vid9}
                    onChangeState={StateChange}
                />
                <Text style={styles.subtitulo}>Cantidad de temporadas: 5</Text>
                </>)
                break;

            case "vid10":
                setPel(!pel)
                setVid(
                    <>
                <YoutubePlayer
                   height={300}
                    play={video}
                    videoId={video.vid10}
                    onChangeState={StateChange}
                />
                <Text style={styles.subtitulo}>Cantidad de temporadas: 5</Text>
                </>)
                break;
            case "vid11":
                setPel(!pel)
                setVid(
                    <>
                <YoutubePlayer
                   height={300}
                    play={video}
                    videoId={video.vid11}
                    onChangeState={StateChange}
                />
                <Text style={styles.subtitulo}>Cantidad de temporadas: 24</Text>
                </>)
                break;
            case "vid12":
                setPel(!pel)
                setVid(
                    <>
                <YoutubePlayer
                   height={300}
                    play={video}
                    videoId={video.vid12}
                    onChangeState={StateChange}
                />
                <Text style={styles.subtitulo}>Cantidad de temporadas: 2</Text>
                </>)
                break;
            case "vid13":
                setPel(!pel)
                setVid(
                    <>
                <YoutubePlayer
                   height={300}
                    play={video}
                    videoId={video.vid13}
                    onChangeState={StateChange}
                />
                <Text style={styles.subtitulo}>Cantidad de temporadas: 6</Text>
                </>)
                break;
            case "vid14":
                setPel(!pel)
                setVid(
                    <>
                <YoutubePlayer
                   height={300}
                    play={video}
                    videoId={video.vid14}
                    onChangeState={StateChange}
                />
                <Text style={styles.subtitulo}>Cantidad de temporadas: 12</Text>
                </>)
                break;
            case "vid15":
                setPel(!pel)
                setVid(
                    <>
                <YoutubePlayer
                   height={300}
                    play={video}
                    videoId={video.vid15}
                    onChangeState={StateChange}
                />
                <Text style={styles.subtitulo}>Cantidad de temporadas: 6</Text>
                </>)
                break;
            case "vid16":
                setPel(!pel)
                setVid(
                    <>
                <YoutubePlayer
                   height={300}
                    play={video}
                    videoId={video.vid16}
                    onChangeState={StateChange}
                />
                <Text style={styles.subtitulo}>Cantidad de temporadas: 6</Text>
                </>)
                break;
            case "vid17":
                setPel(!pel)
                setVid(
                    <>
                <YoutubePlayer
                   height={300}
                    play={video}
                    videoId={video.vid17}
                    onChangeState={StateChange}
                />
                <Text style={styles.subtitulo}>Cantidad de temporadas: 34</Text>
                </>)
                break;
            case "vid18":
                setPel(!pel)
                setVid(
                    <>
                <YoutubePlayer
                   height={300}
                    play={video}
                    videoId={video.vid18}
                    onChangeState={StateChange}
                />
                <Text style={styles.subtitulo}>Cantidad de temporadas: 2</Text>
                </>)
                break;
        }
      }
    return(
        <ScrollView style={styles.principal}>
            <View style={{flexDirection: 'row'}}>
                <Image 
                    style= {styles.banner}
                    source = {require('../utils/serie.png')} />                  
            </View>    
            <Text style={styles.titulo}>Romance</Text>    
            <ScrollView horizontal>
            <Modal transparent={true} animationType="slide" visible={pel} onRequestClose={()=>{
                    alert('Modal cerrado');
                          }}>
                    <View style={styles.vistamodal}>
                        <View style={styles.modal}>
                        <View>
                        {
                            vid
                        }
               </View>
               <Button title='Cerrar' onPress={() => (setPel(!pel))}></Button>
            </View>
          </View>
        </Modal>
            <View>
            <TouchableHighlight onPress={()=>{selectedComponent("vid1")}}>
                <Image 
                   style={styles.pelicula}
                  source = {require('../utils/romance/series/dulces_magnolias.jpg')}
                 />
                 </TouchableHighlight>
            </View>
            <View>
            <TouchableHighlight onPress={()=>{selectedComponent("vid2")}}>
                <Image 
                   style={styles.pelicula}
                  source = {require('../utils/romance/series/25_21.jpg')}
                 />
                </TouchableHighlight>
            </View>
            <View>
            <TouchableHighlight onPress={()=>{selectedComponent("vid3")}}>
                <Image 
                   style={styles.pelicula}
                  source = {require('../utils/romance/series/startup.jpg')}
                 />
            </TouchableHighlight>
            </View>
            <View>
            <TouchableHighlight onPress={()=>{selectedComponent("vid4")}}>
                <Image 
                   style={styles.pelicula}
                  source = {require('../utils/romance/series/bajo_lluvia.jpg')}
                 />
                </TouchableHighlight>
            </View>
            <View>
            <TouchableHighlight onPress={()=>{selectedComponent("vid5")}}>
                <Image 
                   style={styles.pelicula}
                  source = {require('../utils/romance/series/chacha.jpg')}
                 />
            </TouchableHighlight>
            </View>
            <View>
            <TouchableHighlight onPress={()=>{selectedComponent("vid6")}}>
                <Image 
                   style={styles.pelicula}
                  source = {require('../utils/romance/series/primer_amor.jpg')}
                 />
            </TouchableHighlight>
            </View>
            </ScrollView>

            <Text style={styles.titulo}>Accion</Text>
            <ScrollView horizontal>
            <View>
            <TouchableHighlight onPress={()=>{selectedComponent("vid7")}}>
                <Image 
                   style={styles.pelicula}
                  source = {require('../utils/accion/series/boys.jpg')}
                 />
            </TouchableHighlight>
            </View>
            <View>
            <TouchableHighlight onPress={()=>{selectedComponent("vid8")}}>
                <Image 
                   style={styles.pelicula}
                  source = {require('../utils/accion/series/chicago.jpg')}
                 />
            </TouchableHighlight>
            </View>
            <View>
            <TouchableHighlight onPress={()=>{selectedComponent("vid9")}}>
                <Image 
                   style={styles.pelicula}
                  source = {require('../utils/accion/series/cobra.jpg')}
                 />
            </TouchableHighlight>
            </View>
            <View>
            <TouchableHighlight onPress={()=>{selectedComponent("vid10")}}>
                <Image 
                   style={styles.pelicula}
                  source = {require('../utils/accion/series/gotham.jpg')}
                 />
            </TouchableHighlight>
            </View>
            <View>
            <TouchableHighlight onPress={()=>{selectedComponent("vid11")}}>
                <Image 
                   style={styles.pelicula}
                  source = {require('../utils/accion/series/uve.jpg')}
                 />
            </TouchableHighlight>
            </View>
            <View>
            <TouchableHighlight onPress={()=>{selectedComponent("vid12")}}>
                <Image 
                   style={styles.pelicula}
                  source = {require('../utils/accion/series/witcher.jpg')}
                 />
            </TouchableHighlight>
            </View>
            </ScrollView>
            <Text style={styles.titulo}>Comedia</Text>
            <ScrollView horizontal>
            <View>
            <TouchableHighlight onPress={()=>{selectedComponent("vid13")}}>
                <Image 
                   style={styles.pelicula}
                  source = {require('../utils/Comedia/series/bojack.jpg')}
                 />
            </TouchableHighlight>
            </View>
            <View>
            <TouchableHighlight onPress={()=>{selectedComponent("vid14")}}>
                <Image 
                   style={styles.pelicula}
                  source = {require('../utils/Comedia/series/bigbang.jpg')}
                 />
            </TouchableHighlight>
            </View>
            <View>
            <TouchableHighlight onPress={()=>{selectedComponent("vid15")}}>
                <Image 
                   style={styles.pelicula}
                  source = {require('../utils/Comedia/series/rick.jpg')}
                 />
            </TouchableHighlight>
            </View>
            <View>
            <TouchableHighlight onPress={()=>{selectedComponent("vid16")}}>
                <Image 
                   style={styles.pelicula}
                  source = {require('../utils/Comedia/series/sheldon.jpg')}
                 />
            </TouchableHighlight>
            </View>
            <View>
            <TouchableHighlight onPress={()=>{selectedComponent("vid17")}}>
                <Image 
                   style={styles.pelicula}
                  source = {require('../utils/Comedia/series/simpson.jpg')}
                 />
            </TouchableHighlight>
            </View>
            <View>
            <TouchableHighlight onPress={()=>{selectedComponent("vid18")}}>
                <Image 
                   style={styles.pelicula}
                  source = {require('../utils/Comedia/series/ted.jpg')}
                 />
            </TouchableHighlight>
            </View>            
            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    principal:{
        backgroundColor: Colors.fondo
    },
    banner:{
     height:250,
     flex:1
    },
    titulo:{
        fontWeight: 'bold',
        fontSize: 30,
        marginVertical: 10,
        color: Colors.titulo
    },
    pelicula:{
        width: 250,
        height: 250,
        marginRight: 10
    },
    contenedor:{
        marginHorizontal: 10,
    },
    vistamodal:{
        backgroundColor: 'yellow',
        flex: 1
    },
    modal:{
        backgroundColor: '#fff',
        margin: 5,
        padding:20,
        borderRadius: 10,
        flex: 1
    },
    subtitulo:{
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.titulo
    }
});