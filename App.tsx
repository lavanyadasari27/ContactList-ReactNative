import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  ListRenderItem,
} from 'react-native';

const imageUrl = 'https://static.thenounproject.com/png/3137368-200.png';

export type details = {
  name: string;
  address: string;
  id: number;
  img: string;
};


export const staticData: details[] = [
  {
    name: 'Kathryn Murphy',
    address: '6391 Elgin St. Celina, Delaware',
    img: 'https://user-images.githubusercontent.com/1954752/120525494-2b195500-c3a6-11eb-9b00-ad81434be18d.png',
    id: 1,
  },
  {
    name: 'Eleanor Pena',
    address: '2464 Royal Ln. Mesa, New Jersey 454663',
    img: 'https://raw.githubusercontent.com/tom555my/react-native-avataaars/HEAD/avataaars.png',
    id: 2,
  },
  {
    name: 'Marvin McKinney',
    address: '2715 Ash Dr. San Jose, South Dakota 83475',
    img: 'https://raw.githubusercontent.com/Shiroi-shi/avataaars/HEAD/avataaars-example.png?raw=true',
    id: 3,
  },
  {
    name: 'Ronald Richards',
    address: '3891 Ranchview Dr. Richardson, California 62639',
    img: 'https://pbs.twimg.com/media/DPFz5pjWsAA9bjE.png',
    id: 4,
  },
  {
    name: 'Theresa Webb',
    address: '2118 Thornidge Cir. Syracuse, Connecticut 35624',
    img: 'https://koolinus.files.wordpress.com/2019/03/avataaars-e28093-koolinus-1-12mar2019.png',
    id: 5,
  },
  {
    name: 'Floyd Miles',
    address: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
    img: 'https://raw.githubusercontent.com/lek890/avataaars/HEAD/avataaars-example-pic.png?raw=true',
    id: 6,
  },
];

const App = () => {
  const renderEachItem: ListRenderItem<details> = ({item, index}: any) => (
    <View
      style={[
        styles.margins,
        styles.nameAddressContainer,
        index % 2 === 0 ? styles.tealColor : styles.peachColor,
      ]}>
      <View>
        <Image style={styles.avatarImage} source={{uri: item.img}} />
      </View>
      <View style={[styles.textContainer]}>
        <View>
          <Text style={{fontWeight: '800'}}>{item.name}</Text>
          <Text>{item.address}</Text>
        </View>
      </View>
      <Image style={styles.ellipsis} source={{uri: imageUrl}} />
    </View>
  );
  return (
    <SafeAreaView>
      <View style={styles.backgroundColor}>
        <Text style={styles.contact}>Contact List</Text>
        <FlatList
          style={styles.contact}
          data={staticData}
          renderItem={renderEachItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  margins: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  contact: {
    fontFamily: 'Open Sans',
    fontSize: 27,
    fontWeight: '700',
    marginVertical: 10,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  peachColor: {
    backgroundColor: '#FFE5B4',
    padding: 10,
    borderRadius: 20,
    marginVertical: 10,
  },
  tealColor: {
    backgroundColor: '#B6E2D3',
    padding: 10,
    borderRadius: 20,
  },
  nameAddressContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ellipsis: {
    height: 30,
    width: 30,
  },
  avatarImage: {
    height: 30,
    width: 30,
    margin: 10,
    padding: 20,
  },
  tealBorderColor: {
    borderColor: '#000000',
    borderRadius: 60,
  },
  peachBorderColor: {
    borderColor: '#FFFFFF',
    borderRadius: 10,
  },
});

export default App;