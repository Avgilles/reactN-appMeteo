import React, { useState,useEffect } from 'react';
import { Text, View, ScrollView, TextInput,StyleSheet, Button, Image } from 'react-native';
import Prevision from './prevision'
import {SetDate, setDate} from './Script';
import { now,annee,mois,jour, heure,minute,seconde,date,joursemaine,days,months,day,month,globalStyles } from './style.jsx'


export default function Home (props) {
  
const key = '8d937ada21412cefa14b958644910f95';
const ville = 'Paris';
const [city, setCity] = useState('');
const [meteo, setMeteo] = useState('');
const [temp, setTemps] = useState('');
const [pays, setPays] = useState('');
const [img, setImg] = useState('');

useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ville}&APPID=${key}&lang=fr&units=metric`)
    .then(res => res.json())
    .then(data => {
        setCity(data.name);
        setMeteo(data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1));
        setTemps(data.main.temp.toFixed(1));
        setPays(data.sys.country);
        setImg(data.weather[0].main);
    });
});
console.log(`./img/${img}.png`)

    return (
        <ScrollView style={{flex:1}}> 
            <Text style={[globalStyles.h1Day,{marginTop:20}]}>{city}</Text>
            <View style={globalStyles.img}>
             <Image source={require('./img/Rain.png')} style={{width:200,height:200, alignItems:"center"}} />
          </View>
            <View style={globalStyles.container}>
              <Text style={globalStyles.temp}>{temp}</Text>
                <View style={globalStyles.container2}>
    <Text style={globalStyles.title}>{meteo}</Text>
                <Text style={globalStyles.hour}>Mise à jour {date}</Text>


                </View>
              <Text style={globalStyles.h1Day}>{day+" "+jour+" "+month}</Text>

              {/* <Text>{meteoImg[0].txtRain}</Text> */}
            </View>
            <Prevision/>

        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
  
});

