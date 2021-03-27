// import React from 'react';
// import {Text, View} from 'react-native';


// const hola = ()=>{
//   return(
//     <View
//     style={{flex:1,
//     justifyContent:'center',
//   alignItems:'center'}}>
//     <Text>HOLA , MUNDO</Text>
//   </View>
//   )
// }

// export default hola;

// import React from 'react';
// import {Text, View, StyleSheet} from 'react-native';


// const styles = StyleSheet.create({
//   center:{
//     alignItems:'center',
//     fontSize:15
//   }
// })

// const Nombre = (props) =>{
//   return (
//  <View style={styles.center}>
//    <Text>Hello {props.name}</Text>
//  </View>
//   )
// }


// const Agradecimiento = ()=>{
//   return(
//     <View style={[styles.center,{top:50}]}>
//       <Nombre name = 'juan'/>
//       <Nombre name = 'Jaina'/>
//     </View>
//   )
// }

// export default Agradecimiento;


// import React, {useState} from 'react';
// import {View, Text,Button,StyleSheet} from 'react-native';

// const Ejemplo3 = ()=>{
//   const [count,setCount] = useState(0);

//   return(
//     <View style={styles.container}>
//       <Text>HAZ CLICK {count} times</Text>
//       <Button 
//       title="HAZ CLICK"
//       onPress={()=>setCount(count +1)}
//       />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     alignItems:'center',
//    fontSize:15
//   }
// })

// export default Ejemplo3;


import React ,{useState} from 'react'
