import React from 'react';
import { Text, View, ScrollView, TextInput,StyleSheet, Button, Image } from 'react-native';
import { now,annee,mois,jour, heure,minute,seconde,date,joursemaine,days,months,day,month,globalStyles,dayPrevsion } from './style.jsx'



export default function Prevision (props) {
    return (
              <View style={styles.container2}>
                <View style={styles.boxPrev}>
                  <Text style={styles.textPrev}>{days[dayPrevsion(1)]}</Text>
                  <Image style={styles.prev}   source={require(`./img/sunny.png`)}/>
                  <Text style={styles.textPrev}>8° </Text>
                </View>
                <View style={styles.boxPrev}>
                  <Text style={styles.textPrev}></Text>
                  <Image style={styles.prev}   source={require(`./img/sunny.png`)}/>
                  <Text style={styles.textPrev}>8° </Text>
                </View>
                <View style={styles.boxPrev}>
                  <Text style={styles.textPrev}>{}</Text>
                  <Image style={styles.prev}   source={require(`./img/sunny.png`)}/>
                  <Text style={styles.textPrev}>8° </Text>
                </View>
                
                

              </View>
        
    );
    

}

const styles = StyleSheet.create({
  container2: {
      alignItems: 'baseline',
      flexDirection:'row'
  },
  title: {
      padding: 8,
      fontSize: 28,
      fontWeight: 'bold',
  },
  label: {
      padding: 6,
      fontSize: 20,
  },
  boxInput:{
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#000000',
    minWidth:100,
    minHeight:20,
  },
boxPrev:{
  backgroundColor:'lavender',
  padding:15,
  margin:5,
  alignItems:'center',
  borderWidth:2,
},
textPrev:{
  margin:10,
  fontSize:20,
},
prev:{
  width: 80,
    height: 80,
}
});

