import React from "react";
import {Modal, Button, StyleSheet, View} from 'react-native';

export default function Modals(pel, setPel, vid){
    return(
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
    )
}

const styles = StyleSheet.create({
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

