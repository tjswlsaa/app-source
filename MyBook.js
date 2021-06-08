import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';


const MyBook = ({navigation,route}) => {

    const aboutImage = "http://ojsfile.ohmynews.com/STD_IMG_FILE/2018/0309/IE002297749_STD.jpg"
  

  
    return (
      <ScrollView style={styles.container}>

        <View  style={styles.bookCoverContainer}>
            <StatusBar style="white" />
            <Image style={styles.bookCoverImage} source={{uri:aboutImage}}></Image>
            <Text style={styles.bookLike}>구독자 10명 공감 30명</Text>  
            <Text style={styles.bookTitle}>이별일기</Text>  
            <Text style={styles.bookDesc}>이별을 겪고 그를 잊는 날까지의 짧은 일기장</Text>  
            <TouchableOpacity style={styles.writeNewButton} onPress={()=>{navigation.navigate('NewPage')}}>        
                <Text style={styles.writeNewButtonText}>이별록 쓰기</Text>
            </TouchableOpacity>
        </View>


        <View style={styles.bookIndexContainer}>
            <TouchableOpacity style={styles.bookIndexOne} onPress={()=>{navigation.navigate('MyArticle')}}>
                <Text style={styles.bookIndexOneTitle}>01 이별 그 순간</Text>  
                <Text style={styles.bookIndexOnePunchLine}>"먼 훗날 나를 읽게 된다면 너는 잠시 울어줄까"</Text>  
                <Text style={styles.bookIndexText}>날이 더웠다. 햇빛이 뜨거워서 살이 익는 것 같았다. 나를 보는 네 표정이 좋지 않은게 날씨 탓도 있지 않을까 생각했다.</Text>  
            </TouchableOpacity>
            <View style={{borderBottomColor: "gray" ,borderBottomWidth: 1,}}/>
            <TouchableOpacity style={styles.bookIndexOne}>
                <Text style={styles.bookIndexOneTitle}>01 이별 그 순간</Text>  
                <Text style={styles.bookIndexOnePunchLine}>"먼 훗날 나를 읽게 된다면 너는 잠시 울어줄까"</Text>  
                <Text style={styles.bookIndexText}>날이 더웠다. 햇빛이 뜨거워서 살이 익는 것 같았다. 나를 보는 네 표정이 좋지 않은게 날씨 탓도 있지 않을까 생각했다.</Text>  
            </TouchableOpacity>
            <View style={{borderBottomColor: "gray" ,borderBottomWidth: 1,}}/>
            <TouchableOpacity style={styles.bookIndexOne}>
                <Text style={styles.bookIndexOneTitle}>01 이별 그 순간</Text>  
                <Text style={styles.bookIndexOnePunchLine}>"먼 훗날 나를 읽게 된다면 너는 잠시 울어줄까"</Text>  
                <Text style={styles.bookIndexText}>날이 더웠다. 햇빛이 뜨거워서 살이 익는 것 같았다. 나를 보는 네 표정이 좋지 않은게 날씨 탓도 있지 않을까 생각했다.</Text>  
            </TouchableOpacity>
            <View style={{borderBottomColor: "gray" ,borderBottomWidth: 1,}}/>
            <TouchableOpacity style={styles.bookIndexOne}>
                <Text style={styles.bookIndexOneTitle}>01 이별 그 순간</Text>  
                <Text style={styles.bookIndexOnePunchLine}>"먼 훗날 나를 읽게 된다면 너는 잠시 울어줄까"</Text>  
                <Text style={styles.bookIndexText}>날이 더웠다. 햇빛이 뜨거워서 살이 익는 것 같았다. 나를 보는 네 표정이 좋지 않은게 날씨 탓도 있지 않을까 생각했다.</Text>  
            </TouchableOpacity>
            <View style={{borderBottomColor: "gray" ,borderBottomWidth: 1,}}/>

        </View>
    </ScrollView>
   );
}

const styles = StyleSheet.create({ 

    container: {
        //앱의 배경 색
        backgroundColor: '#fff',

      },


    bookCoverContainer: {
        backgroundColor:"#F5F4F4",

        width:'100%',
        //컨텐츠의 높이 값
        height:380,
        //컨텐츠의 모서리 구부리기
        //컨텐츠 자체가 앱에서 어떤 곳에 위치시킬지 결정(정렬기능)
        //각 속성의 값들은 공식문서에 고대로~ 나와 있음
        alignSelf:"center"
    },
    bookCoverImage: {
        marginTop:"7%",
        height:200,
        width: "40%",
        alignSelf:"center"


    },
    bookLike: {
        marginTop:"3%",
        height:30,
        alignSelf:"center"


    },
    bookTitle: {
        fontSize: 15,
        marginTop: "3%",
        marginLeft:"10%",
        fontSize: 15,
        



    },
    bookDesc: {
        marginTop: "4%",
        marginLeft:"10%",
    },

    writeNewButton:{
        width:"50%",
            height:30,
            padding:"2%",
            backgroundColor:"#fe8d6f",
            borderRadius:15,
            margin:"2%",
            marginLeft: "0%",
            marginTop: "3%",
            alignSelf:"center",    

    },

    writeNewButtonText: {
        color:"white",
        fontWeight:"200",
        //텍스트의 현재 위치에서의 정렬 
        textAlign:"center"
    },


    bookIndexContainer:{
        backgroundColor: '#fff',
        height:"40%",

    },
    bookIndexOne: {
        marginTop:"5%",
      marginLeft:"5%",
      marginRight:"3%",
      marginBottom:"5%",
    },

    bookIndexOneTitle: {
        fontSize: 15,


    },
    bookIndexOnePunchLine:{
        fontWeight: '700',
        marginLeft:"5%",
        marginTop:"2%",


    },
    bookIndexText :{
        marginLeft:"5%",
        marginTop:"2%",


    },
  





})

export default MyBook;
