import React from 'react';
import { Text, View, ScrollView, TextInput,StyleSheet, Button, Image } from 'react-native';
import Prevision from './prevision'
import {SetDate, setDate} from './Script';


  // var i =1;
  // var d= new Date();
  // var s=[':',' ']
  // var date=d.getHours()+s[i]+d.getMinutes();
  

  // return date


var now = new Date();

var annee   = now.getFullYear();
var mois    = ('0'+now.getMonth()+1).slice(-2);
var jour    = ('0'+now.getDate()   ).slice(-2);
var heure   = ('0'+now.getHours()  ).slice(-2);
var minute  = ('0'+now.getMinutes()).slice(-2);
var seconde = ('0'+now.getSeconds()).slice(-2);
var date = heure+':'+minute
var joursemaine = now.getDay() ;

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



// // setTimeout(setDate, 5000);
// var i=0;

// if(i<5){
//   setInterval(function (){setDate(i)},1000);
//   i++
// }else{
//   i=0;
// }


export default function Home (props) {
    return (
        <ScrollView style={{width:400}}> 
            <View style={styles.img}>
             <Image source={require('./img/cloudy.png')} style={{width:200,height:200}} />
          </View>
            <View style={styles.container}>
              <Text style={styles.temp}>5°</Text>
                <View style={styles.container2}>
                <Text style={styles.title}>Ciel dégagé</Text>
                <Text style={styles.hour}>Mise à jour {date}</Text>


                </View>
              <Text style={styles.h1Day}>{day+" "+jour+" "+month}</Text>

              {/* <Text>{meteoImg[0].txtRain}</Text> */}
            </View>
            <Prevision/>

        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
  img:{
    alignItems:'center',
    marginTop:30,
  },
  container: {
    backgroundColor:'#EEFBFF',
    padding:10,
    marginTop:20,
    borderRadius:5,
    flex: 1,
    alignItems:'baseline',
  },
  container2: {
    flex: 1,
    alignItems:'baseline',
  },
  weatherBox:{
  flexDirection:'row',
  borderWidth:2,
  borderColor:'red',
  alignItems:'center',
  
  },
  h1Day:{
    fontSize:32,
  },


  title: {
      fontSize: 28,
      fontWeight: 'bold',
  },
  temp:{
    alignItems:'flex-start',
    fontSize: 72,

  },
  hour:{
    fontSize: 16,
    padding:5,
    backgroundColor:'#99E2FC',
    borderRadius:20,

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
});

