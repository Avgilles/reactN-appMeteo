import React from 'react';
import { Text, View, ScrollView, TextInput,StyleSheet, Button, Image , Animated} from 'react-native';


var now = new Date();

var annee   = now.getFullYear();
var mois    = ('0'+now.getMonth()+1).slice(-2);
var jour    = ('0'+now.getDate()   ).slice(-2);
var heure   = ('0'+now.getHours()  ).slice(-2);
var minute  = ('0'+now.getMinutes()).slice(-2);
var seconde = ('0'+now.getSeconds()).slice(-2);
  

function joursemaine(x){
  var nbrDay=now.getDay() ;
  return nbrDay+x
}
var date = heure+':'+minute

var days = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];

var months = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];

Date.prototype.getMonthName = function() {
    return months[ this.getMonth() ];
};
Date.prototype.getDayName = function() {
    return days[ this.getDay() ];
};

var day = now.getDayName();
var month = now.getMonthName();

let animation = new Animated.Value(0)
let animationSlow = Animated.divide(animation, 2)
let animationTranslated = Animated.add(animation, -300)
Animated.timing(
  animation,
  {
    toValue: 600,
    duration: 300,
    useNativeDriver: true
  }
).start()


export default function Prevision (props) {
    return (
              <View style={styles.container2}>
                <View style={styles.boxPrev}>
                  <Text style={styles.textPrev}>{days[joursemaine(1)]}</Text>
                  <Image style={styles.prev}   source={require(`./img/sunny.png`)}/>
                  <Text style={styles.textPrev}>8° </Text>
                </View>
                <View style={styles.boxPrev}>
                  <Text style={styles.textPrev}>{days[joursemaine(1)]}</Text>
                  <Image style={styles.prev}   source={require(`./img/sunny.png`)}/>
                  <Text style={styles.textPrev}>8° </Text>
                </View>
                <View style={styles.boxPrev}>
                  <Text style={styles.textPrev}>{days[joursemaine(1)]}</Text>
                  <Image style={styles.prev}   source={require(`./img/sunny.png`)}/>
                  <Text style={styles.textPrev}>8° </Text>
                </View>
                <View style={styles.boxPrev}>
                  <Text style={styles.textPrev}>{days[joursemaine(1)]}</Text>
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

