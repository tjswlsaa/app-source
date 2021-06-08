import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TouchableHighlight} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/Ionicons';




  const aboutImage = "http://file.newswire.co.kr/data/datafile2/thumb_480/2010/05/2039103817_20100527105820_1069435867.jpg"
  const aboutBookImage = "http://ojsfile.ohmynews.com/STD_IMG_FILE/2018/0309/IE002297749_STD.jpg"
  const settingImage = "https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-cartoon-gear-icon-download-image_1251421.jpg"

const MyPage = ({navigation,route}) => {

 
 {/*useEffect(()=>{
  navigation.setOptions({
    title:'나의 이별록'})
  }) */}

  return (
      <View style={styles.container}>
        <StatusBar style="white" />

        <View style={styles.profileContainer}>
      
              <View style={styles.settingPlusUserName}>
                <Text style={styles.profileUserName}>나작가</Text>  
                <TouchableOpacity onPress={()=>{navigation.navigate('setting')}}>
                   <Image style={styles.settingButtonImage} source={{uri:settingImage}} />
                </TouchableOpacity>
              </View>
              <Text style={styles.profileUserDesc}> 상태 메세지 2줄까지 가능</Text>  
              <TouchableOpacity style={styles.profileEditButton}>
                <Text style={styles.profileEditButtonText}>프로필 수정</Text>
              </TouchableOpacity>
        </View>

        <ScrollView style={styles.bookContainer}>
          <TouchableOpacity style={styles.bookContainerOne} onPress={()=>{navigation.navigate('MyBook')}}>
            <View style={styles.bookContainerOneDesc}>
              <Text style={styles.bookTitle}>이별 일기</Text>  
              <Text style={styles.bookDesc}>당신을 떠올리면 손 끝에 맺히는 문장들이 제법 있습니다. 당신이 나의 글을 살펴주는 그 날을 상상하며 글을 적어봅니다.</Text> 
              <Text style={styles.bookIndex}>22화</Text> 

            </View>
            <View style={styles.bookContainerOnePhoto}>
              <Image style={styles.bookContainerOnePhoto} source={{uri:aboutBookImage}}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addBookContainer} onPress={()=>{navigation.navigate('MakeNewBook')}}>
              <Icon name="add" size={30} color="black" style={styles.addIcon}/>
              <Text style={styles.addBookText}> 새 이별집 만들기 </Text>  

          </TouchableOpacity>
        
        </ScrollView>
      </View>
  )}

  const styles = StyleSheet.create({
    container: {
      //앱의 배경 색
      backgroundColor: '#fff',
      flex:1
    },
    title: {
      //폰트 사이즈
      fontSize: 20,
      //폰트 두께
      fontWeight: '700',
      //위 공간으로 부터 이격
      marginTop:"15%",
      //왼쪽 공간으로 부터 이격
      marginLeft:20
    },
    settingButtonImage:{
      width:"20%",
      height:30,
      padding:"2%",
      backgroundColor:"#fe8d6f",
      borderRadius:50,
      margin:"2%",
      marginLeft: "70%",
      marginRight: "0%",
      flexDirection: 'row',
      alignItems: 'center',
    },

    settingButtonText:{
      fontSize: 14,
      color:"#fff",
      fontWeight:"400",
      //텍스트의 현재 위치에서의 정렬 
      textAlign:"center"


    },
    profileContainer:{
      //컨텐츠의 넓이 값
      flexDirection:"row",
      width:'95%',
      //컨텐츠의 높이 값
      height:"30%",
      //컨텐츠의 모서리 구부리기
      //컨텐츠 자체가 앱에서 어떤 곳에 위치시킬지 결정(정렬기능)
      //각 속성의 값들은 공식문서에 고대로~ 나와 있음
      alignSelf:"center",
      backgroundColor:"yellow"
    },

    profileDesc:{
    
      marginTop:"5%",
      marginLeft:"10%",
      height:"100%"
    },

    settingPlusUserName:{
      flexDirection:"row",

    },

    profileUserName:{
      fontSize: 18,
      marginTop:"10%"


    },
    profileUserDesc: {
      fontSize: 16,
      marginTop:"5%",


    },
    profileEditButton: {
      width:"100%",
      height:"20%",
      padding:"2%",
      backgroundColor:"#fe8d6f",
      borderRadius:15,
      margin:"2%",
      marginLeft: "0%",
      marginTop: "6%"

    

    },
    profileEditButtonText: {
      fontSize: 14,
      color:"#fff",
      fontWeight:"400",
      //텍스트의 현재 위치에서의 정렬 
      textAlign:"center"

    },
    bookContainer:{
      marginTop: "2%"
    },
    bookContainerOne:{
      flex:1,
      flexDirection:"row",
      backgroundColor:"#dedede",
      marginTop:"5%",
      marginLeft:"3%",
      marginRight:"3%",
      marginBottom:"5%",
      height: 170

    },
    bookContainerOneDesc: {
      flex:2,
      fontSize: 20,
      marginTop:"3%",

    },
    bookTitle:{
      fontSize: 17,
      marginTop:"5%",
      marginLeft:"8%",
      marginRight:"8%",



    },
    bookDesc:{
      fontSize: 14,
      marginTop:"5%",
      marginLeft:"8%",
      marginRight:"8%",



    },
    bookIndex:{
      fontSize: 15,
      marginTop:"5%",
      marginLeft:"8%",
      marginRight:"8%",

    },
    bookContainerOnePhoto:{

    },


  
    bookContainerOnePhoto:{
      flex:1
    },

    addBookContainer:{
      flex:1,
      height: 170,
      backgroundColor:"#dedede",
      marginLeft:"3%",
      marginRight:"3%",
      justifyContent: "center",
      alignItems: "center"
  


    },

  
  addIcon:{



  },
    addBookText:{
      fontSize: 15,
 


    }

  })

  export default MyPage;
