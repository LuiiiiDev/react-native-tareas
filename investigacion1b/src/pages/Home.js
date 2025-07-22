import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import Button from '../components/Button';

export default function Home({ navigation }) {
  const handleNavigateToStudent = () => {
    navigation.navigate('Student');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Logo o imagen del instituto */}
        <View style={styles.logoContainer}>
          <Image 
            source={{ uri: 'https://core.ricaldone.edu.sv/static/media/logo.0e91b447.png' }} 
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>

        {/* Información del módulo */}
        <View style={styles.moduleInfo}>
          <Text style={styles.moduleTitle}>
            Módulo 3.5: Desarrollo de componentes para dispositivos móviles
          </Text>
          
          <Text style={styles.moduleDescription}>
            Este módulo se enfoca en el desarrollo de aplicaciones móviles utilizando 
            React Native, abordando conceptos fundamentales como la navegación entre 
            pantallas, creación de componentes reutilizables y manejo de props.
          </Text>

          <View style={styles.detailsContainer}>
            <Text style={styles.detailText}>
              <Text style={styles.boldText}>Instituto:</Text> Instituto Técnico Ricaldone
            </Text>
            <Text style={styles.detailText}>
              <Text style={styles.boldText}>Docente:</Text> Ing. Wilfredo Granados
            </Text>
            <Text style={styles.detailText}>
              <Text style={styles.boldText}>Nivel:</Text> 3° año de Desarrollo de Software
            </Text>
          </View>
        </View>

        {/* Botón de navegación */}
        <View style={styles.buttonContainer}>
          <Button
            title="Ver Información del Estudiante"
            onPress={handleNavigateToStudent}
            backgroundColor="#4CAF50"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logoImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  moduleInfo: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    marginBottom: 30,
  },
  moduleTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  moduleDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 20,
    textAlign: 'justify',
  },
  detailsContainer: {
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingTop: 15,
  },
  detailText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    marginBottom: 20,
  },
});