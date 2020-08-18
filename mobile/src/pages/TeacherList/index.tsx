import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import { Picker } from '@react-native-community/picker';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import api from '../../services/api';

import styles from './styles';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const [week_day, setWeekDay] = useState('');
  const [subject, setSubject] = useState('');
  const [time, setTime] = useState('');

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if(response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersId = favoritedTeachers.map((teacher: Teacher) => teacher.id)

        setFavorites(favoritedTeachersId);
      }
    });
  }

  useFocusEffect(() => {
    loadFavorites();
  });

  function handleToggleFilter() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleFiltersSubmit() {
    loadFavorites();

    const response = await api.get('classes', {
      params: {
        week_day,
        subject,
        time
      }
    });

    setIsFiltersVisible(false);
    setTeachers(response.data);
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={(
          <BorderlessButton onPress={handleToggleFilter}>
            <Feather name="filter" size={20} color="#FFF"/>
          </BorderlessButton>
        )}
      >
        { isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matérias</Text>
            <Picker
              style={styles.input}
              mode="dropdown"
              selectedValue={subject}
              onValueChange={(text, itemIndex) => setSubject(text as string)}
            >
              <Picker.Item color="#c1bccc" label="Selecione uma matéria" value=""/>
              <Picker.Item color="#000" label="Artes" value="Artes"/>
              <Picker.Item label="Biologia" value="Biologia"/>
              <Picker.Item label="Geografia" value="Geografia"/>
              <Picker.Item label="História" value="História"/>
              <Picker.Item label="Matemática" value="Matemática"/>
            </Picker>

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <Picker
                  style={styles.input}
                  mode="dropdown"
                  selectedValue={week_day}
                  onValueChange={(text, itemIndex) => setWeekDay(text as string)}
                >
                  <Picker.Item color="#c1bccc" label="Selecione um dia da semana" value=""/>
                  <Picker.Item color="#000" label="Domingo" value="0"/>
                  <Picker.Item label="Segunda-feira" value="1"/>
                  <Picker.Item label="Terça-feira" value="2"/>
                  <Picker.Item label="Quarta-feira" value="3"/>
                  <Picker.Item label="Quinta-feira" value="4"/>
                  <Picker.Item label="Sexta-feira" value="5"/>
                  <Picker.Item label="Sábado" value="6"/>
                </Picker>
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  value={time}
                  onChangeText={text => setTime(text)}
                  placeholder="Qual o horário?"
                  placeholderTextColor="#c1bccc"
                />
              </View>
            </View>

            <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        {teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited={favorites.includes(teacher.id)}
            />
          )
        })}
      </ScrollView>
    </View>
  );
}

export default TeacherList;