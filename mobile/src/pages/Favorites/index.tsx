import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';

function Favorites() {
  const [favoriteTeachers, setFavoriteTeachers] = useState<Teacher[]>([]);

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if(response){
        setFavoriteTeachers(JSON.parse(response));
      }
    });
  }

  useFocusEffect(() => {
    loadFavorites();
  });

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos"/>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        {
          favoriteTeachers.map((favoriteTeacher: Teacher) => {
            return (
              <TeacherItem
                key={favoriteTeacher.id}
                favorited={true}
                teacher={favoriteTeacher}
              />
            )
          })
        }
      </ScrollView>
    </View>
  );
}

export default Favorites;