
// import React, { useState } from 'react';
import {StyleSheet} from 'react-native';
export{now,annee,mois,jour, heure,minute,seconde,date,joursemaine,days,months,day,month}




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

export function dayPrevsion(x){
    var nbrDay=now.getDay() ;
    return nbrDay+x
  }


export const globalStyles = StyleSheet.create({
    img:{
        alignItems:'center',
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