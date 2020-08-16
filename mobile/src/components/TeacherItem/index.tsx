import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem (){
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://scontent.fgig4-1.fna.fbcdn.net/v/t1.0-1/p160x160/61041709_10205446974251415_3108963560982577152_n.jpg?_nc_cat=106&_nc_sid=dbb9e7&_nc_ohc=IQFtyJLMqoEAX8T1dSU&_nc_ht=scontent.fgig4-1.fna&_nc_tp=6&oh=37fdb73eb1092bc3e14fcadb5f84d1f0&oe=5F601494' }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Raphael Mesquita</Text>
          <Text style={styles.subject}>Matemática</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Estudante de Ciência da Computação na UFRJ. 
        {'\n'}{'\n'}
        Aprendendo dev web
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'    '}
          <Text style={styles.priceValue}>R$ 41,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon}/> */}
            <Image source={unfavoriteIcon}/>            
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon}/>
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;