import React, { useState, useCallback } from 'react';
import {View,Text,Image, StyleSheet, TouchableHighlight, Alert, Modal, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import YoutubePlayer from "react-native-youtube-iframe";
import Colors from '../utils/Colors';



export default function Peliculas(props){
    const{navigation} = props;
    const [video,setVideo] = useState({
        vid1:'vWhX8aTj5TI',
        vid2: '-5CqS2u_jb4',
        vid3: 'iJBsgsRRvs0',
        vid4: 'oUW_iSHqgOQ',
        vid5: '45s24h98iOc',
        vid6:'77wgbw-NKnY',
        vid7: 'fWQrd6cwJ0A',
        vid8: '1vNvQqeezlA',
        vid9: 'F6pIP7IetkE',
        vid10: 'UqmYLMjP4-Y',
        vid11:'7FnbLyv2oio',
        vid12: 'm8e-FF8MsqU',
        vid13: 'YPAooIKJ3YQ',
        vid14: 'l1BF53bXP8I',
        vid15: 'bLvqoHBptjg',
        vid16: 'Zsi015h_dgQ',
        vid17: 'W27moupirnI',
        vid18: 'uHavO_xqArU'

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
                setVid(<YoutubePlayer
                    height={300}
                    play={video}
                    videoId={video.vid1}
                    onChangeState={StateChange}
                />)
                break;
            case "vid2":
                setPel(!pel)
                setVid(<YoutubePlayer
                   height={300}
                    play={video}
                    videoId={video.vid2}
                    onChangeState={StateChange}
                />)
                break;
            case "vid3":
                setPel(!pel)
                setVid(<YoutubePlayer
                    height={300}
                    play={video}
                    videoId={video.vid3}
                    onChangeState={StateChange}
                />)
                break;

            case "vid4":
                setPel(!pel)
                setVid(<YoutubePlayer
                    height={300}
                    play={video}
                    videoId={video.vid4}
                    onChangeState={StateChange}
                />)
                break;

            case "vid5":
                setPel(!pel)
                setVid(<YoutubePlayer
                    height={300}
                    play={video}
                    videoId={video.vid5}
                    onChangeState={StateChange}
                />)
                break;

            case "vid6":
                setPel(!pel)
                setVid(<YoutubePlayer
                    height={300}
                    play={video}
                    videoId={video.vid6}
                    onChangeState={StateChange}
                />)
                break;
            case "vid7":
                setPel(!pel)
                setVid(<YoutubePlayer
                    height={300}
                    play={video}
                    videoId={video.vid7}
                    onChangeState={StateChange}
                />)
                break;

            case "vid8":
                setPel(!pel)
                setVid(<YoutubePlayer
                    height={300}
                    play={video}
                    videoId={video.vid8}
                    onChangeState={StateChange}
                />)
                break;

            case "vid9":
                setPel(!pel)
                setVid(<YoutubePlayer
                    height={300}
                    play={video}
                    videoId={video.vid9}
                    onChangeState={StateChange}
                />)
                break;

            case "vid10":
                setPel(!pel)
                setVid(<YoutubePlayer
                    height={300}
                    play={video}
                    videoId={video.vid10}
                    onChangeState={StateChange}
                />)
                break;
            case "vid11":
                setPel(!pel)
                setVid(<YoutubePlayer
                    height={300}
                    play={video}
                    videoId={video.vid11}
                    onChangeState={StateChange}
                />)
                break;
            case "vid12":
                setPel(!pel)
                setVid(<YoutubePlayer
                    height={300}
                    play={video}
                    videoId={video.vid12}
                    onChangeState={StateChange}
                />)
                break;
            case "vid13":
                setPel(!pel)
                setVid(<YoutubePlayer
                    height={300}
                    play={video}
                    videoId={video.vid13}
                    onChangeState={StateChange}
                />)
                break;
            case "vid14":
                setPel(!pel)
                setVid(<YoutubePlayer
                    height={300}
                    play={video}
                    videoId={video.vid14}
                    onChangeState={StateChange}
                />)
                break;
            case "vid15":
                setPel(!pel)
                setVid(<YoutubePlayer
                    height={300}
                    play={video}
                    videoId={video.vid15}
                    onChangeState={StateChange}
                />)
                break;
            case "vid16":
                setPel(!pel)
                setVid(<YoutubePlayer
                    height={300}
                    play={video}
                    videoId={video.vid16}
                    onChangeState={StateChange}
                />)
                break;
            case "vid17":
                setPel(!pel)
                setVid(<YoutubePlayer
                    height={300}
                    play={video}
                    videoId={video.vid17}
                    onChangeState={StateChange}
                />)
                break;
            case "vid18":
                setPel(!pel)
                setVid(<YoutubePlayer
                    height={300}
                    play={video}
                    videoId={video.vid18}
                    onChangeState={StateChange}
                />)
                break;
        }
    }
    return(
        <>
        <ScrollView style={styles.principal}>
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
            <View style={{flexDirection: 'row'}}>
                <Image 
                    style= {styles.banner}
                    source = {require('../utils/cine.jpg')} />                  
            </View>

            <View vertical style={styles.contenedor}>
                <Text style={styles.titulo}>Romance</Text>
                <ScrollView horizontal>
                    <View>
                    <TouchableHighlight onPress={()=>{selectedComponent("vid1")}}>
                    <Image 
                            style={styles.pelicula}
                            source = {require('../utils/romance/pelis/2_metros.jpg')}
                            
                        />
                    </TouchableHighlight>                        
                    </View>
                    <View>
                    <TouchableHighlight onPress={()=>{selectedComponent("vid2")}}>
                        <Image 
                            style={styles.pelicula}
                            source = {require('../utils/romance/pelis/bajo_estrella.jpg')}
                        />
                        </TouchableHighlight>
                    </View>
                    <View>
                    <TouchableHighlight onPress={()=>{selectedComponent("vid3")}}>
                        <Image 
                            style={styles.pelicula}
                            source = {require('../utils/romance/pelis/gente_bah.jpg')}
                        />
                        </TouchableHighlight>
                    </View>
                    <View>
                    <TouchableHighlight onPress={()=>{selectedComponent("vid4")}}>
                        <Image 
                            style={styles.pelicula}
                            source = {require('../utils/romance/pelis/infidelidad.jpg')}
                        />
                    </TouchableHighlight>
                    </View>
                    <View>
                    <TouchableHighlight onPress={()=>{selectedComponent("vid5")}}>
                        <Image 
                            style={styles.pelicula}
                            source = {require('../utils/romance/pelis/lalaland.jpg')}
                        />
                    </TouchableHighlight>
                    </View>
                    <View>
                    <TouchableHighlight onPress={()=>{selectedComponent("vid6")}}>
                        <Image 
                            style={styles.pelicula}
                            source = {require('../utils/romance/pelis/yo_antes.jpg')}
                        />
                    </TouchableHighlight>
                    </View>
                </ScrollView>
                    <Text style={styles.titulo}>Acción</Text>
                    <ScrollView horizontal>
                    <View>
                    <TouchableHighlight onPress={()=>{selectedComponent("vid7")}}>
                        <Image 
                            style={styles.pelicula}
                            source = {require('../utils/accion/pelis/batman.jpg')}
                        />
                    </TouchableHighlight>
                    </View>
                    <View>
                    <TouchableHighlight onPress={()=>{selectedComponent("vid8")}}>
                        <Image 
                            style={styles.pelicula}
                            source = {require('../utils/accion/pelis/ejecutor.jpg')}
                        />
                    </TouchableHighlight>
                    </View>
                    <View>
                    <TouchableHighlight onPress={()=>{selectedComponent("vid9")}}>
                        <Image 
                            style={styles.pelicula}
                            source = {require('../utils/accion/pelis/libro_secretos.jpg')}
                        />
                    </TouchableHighlight>
                    </View>
                    <View>
                    <TouchableHighlight onPress={()=>{selectedComponent("vid10")}}>
                        <Image 
                            style={styles.pelicula}
                            source = {require('../utils/accion/pelis/miami.jpg')}
                        />
                    </TouchableHighlight>
                    </View>
                    <View>
                    <TouchableHighlight onPress={()=>{selectedComponent("vid11")}}>
                        <Image 
                            style={styles.pelicula}
                            source = {require('../utils/accion/pelis/transportador.jpg')}
                        />
                    </TouchableHighlight>
                    </View>
                    <View>
                    <TouchableHighlight onPress={()=>{selectedComponent("vid12")}}>
                        <Image 
                            style={styles.pelicula}
                            source = {require('../utils/accion/pelis/matrix.jpg')}
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
                            source = {require('../utils/Comedia/pelis/baby.jpg')}
                        />
                </TouchableHighlight>
                </View>
                <View>
                <TouchableHighlight onPress={()=>{selectedComponent("vid14")}}>
                        <Image 
                            style={styles.pelicula}
                            source = {require('../utils/Comedia/pelis/golpe.jpg')}
                        />
                    </TouchableHighlight>
                </View>
                <View>
                <TouchableHighlight onPress={()=>{selectedComponent("vid15")}}>
                        <Image 
                            style={styles.pelicula}
                            source = {require('../utils/Comedia/pelis/gunp.jpg')}
                        />
                    </TouchableHighlight>
                </View>
                <View>
                <TouchableHighlight onPress={()=>{selectedComponent("vid16")}}>
                        <Image 
                            style={styles.pelicula}
                            source = {require('../utils/Comedia/pelis/lluvia.jpg')}
                        />
                    </TouchableHighlight>
                </View>
                <View>
                <TouchableHighlight onPress={()=>{selectedComponent("vid17")}}>
                        <Image 
                            style={styles.pelicula}
                            source = {require('../utils/Comedia/pelis/minions.jpg')}
                        />
                    </TouchableHighlight>
                </View>
                <View>
                <TouchableHighlight onPress={()=>{selectedComponent("vid18")}}>
                        <Image 
                            style={styles.pelicula}
                            source = {require('../utils/Comedia/pelis/pixels.jpg')}
                        />
                </TouchableHighlight>
                </View>
                </ScrollView>
                    
            </View>
                    
        </ScrollView>
        </>
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
    }
});