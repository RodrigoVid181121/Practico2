import React, { useState, useCallback } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import YoutubePlayer from "react-native-youtube-iframe";
import Colors from '../utils/Colors';

export default function Proximamente(props){
    const{navigation} = props;
    const [video, setVideo] = useState(false);

    const StateChange = useCallback((state)=>{
        if(state === "ended"){
          setVideo(false);
          Alert.alert('El video ha terminado');
        }
      },[]);
    return(
        <ScrollView>
            <View style={styles.contendor}>
            <YoutubePlayer
                    height={300}
                    play={video}
                    videoId={'MczMB8nU1sY'}
                    onChangeState={StateChange}
                />
                <Text style={styles.titulo}>Doctor House</Text>
                <Text style={styles.subtitulo}>8 Temporadas</Text>
                <Text style={styles.subtitulo}>Drama/Comedia</Text>
                <Text style={styles.des}>En el Princenton Plainsboro de Nueva Jersey,
                 el Dr. Gregory House, un singular genio de la medicina,
                 se encarga de resolver casos como lo haría Sherlock Holmes.</Text>

                 <YoutubePlayer
                    height={300}
                    play={video}
                    videoId={'9fbo_pQvU7M'}
                    onChangeState={StateChange}
                />
                <Text style={styles.titulo}>Ted</Text>
                <Text style={styles.subtitulo}>1h 46min</Text>
                <Text style={styles.subtitulo}>Comedia</Text>
                <Text style={styles.des}>Cuando John Bennett era un niño pequeño,
                 pidió el deseo de que Ted, 
                 su querido oso de peluche, 
                 cobrara vida. Treinta años más tarde, 
                 Ted continúa siendo el compañero de John, ante el disgusto de Lori, la novia de John.</Text>

                 <YoutubePlayer
                    height={300}
                    play={video}
                    videoId={'p8HQ2JLlc4E'}
                    onChangeState={StateChange}
                />
                <Text style={styles.titulo}>Rápidos y Furiosos: Reto Tokyo</Text>
                <Text style={styles.subtitulo}>1h 44min</Text>
                <Text style={styles.subtitulo}>Accion</Text>
                <Text style={styles.des}>Sean Boswell siempre se ha sentido como un intruso, 
                pero él se define a sí mismo a través de sus victorias como corredor callejero de autos.</Text>

                <YoutubePlayer
                    height={300}
                    play={video}
                    videoId={'-bfAVpuko5o'}
                    onChangeState={StateChange}
                />
                <Text style={styles.titulo}>Invincible</Text>
                <Text style={styles.subtitulo}>1 Temporada</Text>
                <Text style={styles.subtitulo}>Accion</Text>
                <Text style={styles.des}>Mark Grayson, de 17 años, es como cualquier otro chico de su edad, 
                excepto que su padre es el superhéroe más poderoso del planeta, 
                Omni-Man. Mark descubre que el legado de su padre puede no ser tan heroico como parece.</Text>

                <YoutubePlayer
                    height={300}
                    play={video}
                    videoId={'d_f-htgnr-M'}
                    onChangeState={StateChange}
                />
                <Text style={styles.titulo}>La Máscara</Text>
                <Text style={styles.subtitulo}>1h 41min</Text>
                <Text style={styles.subtitulo}>Comedia/Fantasia</Text>
                <Text style={styles.des}>Una máscara antigua transforma a un monótono
                 empleado bancario en un Romeo sonriente con poderes sobrehumanos.</Text>

                 <YoutubePlayer
                    height={300}
                    play={video}
                    videoId={'omxOIbjdgUQ'}
                    onChangeState={StateChange}
                />
                <Text style={styles.titulo}>Mentiroso Mentiroso</Text>
                <Text style={styles.subtitulo}>1h 27min</Text>
                <Text style={styles.subtitulo}>Comedia</Text>
                <Text style={styles.des}>Un abogado queda inhabilitado para mentir durante 24 horas, 
                y tratará de hacer que el mayor deseo de su hijo se cumpla.</Text>
            </View>        
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    contendor:{
        padding: 10,
        marginBottom: 10,
        backgroundColor: Colors.fondo       
    },
    titulo:{
        fontSize:30,
        fontWeight: 'bold',
        color: Colors.titulo,
        textAlign: 'center'
    },
    subtitulo:{
        fontSize: 24,
        fontStyle: 'italic',
        color: Colors.titulo
    },
    des:{
        fontSize: 18,
        color: Colors.titulo
    }
})