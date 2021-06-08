import React, {useEffect} from 'react';

import {ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TouchableHighlight} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/Ionicons';

const book ="https://postfiles.pstatic.net/MjAyMTA2MDdfMTk0/MDAxNjIzMDY3OTkzMTYz.Uyg7r1zEBbPKA-CfVHU0R5ojbmozb02GJzMRapgcP1cg.flIv0UKSYHpE_CHNSOi2huGzv3svilsmEmMFy1G9zH0g.PNG.asj0611/book.png?type=w773"
const bookBackground = "https://postfiles.pstatic.net/MjAyMTA2MDdfMTE1/MDAxNjIzMDY2NDQwOTUx.N4v5uCLTMbsT_2K1wPR0sBPZRX3AoDXjBCUKFKkiC0gg.BXjLzL7CoF2W39CT8NaYTRvMCD2feaVCy_2EWOTkMZsg.PNG.asj0611/bookBackground.png?type=w773"
const MakeNewBook = ({navigation,route}) => {

 
  return ( 
 <View style={styles.container}>
    <ImageBackground style={styles.bookBackgroundImage} source={{uri:bookBackground}} >

      <View style={styles.openButtonContainer}>
          <TouchableOpacity style={styles.openButton}>
            <Text style={styles.openButtonText}>공개</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.bookContainer}>

      <ImageBackground style={styles.bookImage} source={{uri:book}} >

  
      <View style={styles.bookContainer}>
        <View style={styles.titleInput}>
            <Text style={styles.titleInputText}>제목은 2줄로 </Text>
            <View style={{borderBottomColor: "#d3d3d3" ,borderBottomWidth: "1%", width:"60%",marginLeft:"8%", marginBottom:"3%" }}/>
            <Text style={styles.titleInputText}>작성해 주세요 </Text>
            <View style={{borderBottomColor: "#d3d3d3" ,borderBottomWidth: "1%", width:"60%",marginLeft:"8%", }}/>
            <Text style={styles.writer}> 이별록 지은이 </Text>

        </View>
        <TouchableOpacity style={styles.photoInputContainer}>
            <Icon name="add" size={30} color="black" style={styles.addIcon}/>
            <Text style={styles.photoInputText}>이별집 표지 이미지를 넣어주세요</Text>
        </TouchableOpacity>
      </View>

    </ImageBackground>
    </View>
    </ImageBackground>
</View>


  )}

  const styles = StyleSheet.create({ 
    container:{
        flex:1,
        flexDirection: "column"
    },
    bookContainer:{
      marginTop:"11%",
      marginRight:"6%",
      marginLeft:"6%",

      height:"92%",
    },

    bookBackgroundImage:{
      height:"100%",
        resizeMode: "cover",
        

    },
    bookImage:{
      height:"100%",
      resizeMode: "cover",

    },
    openButtonContainer:{
      height: "8%",
      width:"100%",
      justifyContent:"flex-end",
      alignItems:"flex-end",
      
  },
  openButton:{
      height:"40%",
      width:"22.67%",
      backgroundColor:"#c4c4c4",
      borderRadius:5,
      marginRight:"6%" ,
      justifyContent:"center",

  
  },
  openButtonText:{
      marginLeft:"15%",
      fontSize:14,

  },
  titleInput: {
    height:"12%"
  },
  titleInputText:{
    fontSize: 20,
    marginLeft: "10%",
  },

  writer:{

    alignSelf: "flex-end",
    marginRight:"5%",
    marginTop:"5%"

  },
  photoInputContainer:{
    marginTop:"17%",
    height:"50%",
    width:"85%",
    marginLeft:"5%",
    alignSelf:"center",
    justifyContent: "center",
    alignItems: "center"


  }




  })


  export default MakeNewBook;
