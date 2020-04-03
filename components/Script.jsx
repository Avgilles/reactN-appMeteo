function SetDate(){
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
  // return( "Nous sommes le "+jour+"/"+mois+"/"+annee+" et il est "+heure+" heure "+minute+" minutes "+seconde+" secondes" );
  return date


}


  
  
 

// // setTimeout(setDate, 5000);
// var i=0;

// if(i<5){
//   setInterval(function (){setDate(i)},1000);
//   i++
// }else{
//   i=0;
// }



export default SetDate;