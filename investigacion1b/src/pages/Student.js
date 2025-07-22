import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import CardStudent from '../components/CardStudent';
import Button from '../components/Button';

export default function Student({ navigation }) {
  // Datos del estudiante
  const studentData = {
    fullName: "Luis José Escobar Romero",
    age: 18,
    image: 'https://student-photographs.s3.us-east-2.amazonaws.com/20230639.png?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVL5BYAQGNBT62GM4%2F20250722%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T052832Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=02792e396368bc455d518d3701dcd7c7e04111fc8f5963ef8a2748d31f23f744',
    carnet: "20230639",
    section: "1-B",
    email: "20230639@ricaldone.edu.sv"
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          {/* Card del estudiante */}
          <CardStudent 
            fullName={studentData.fullName}
            age={studentData.age}
            image={studentData.image}
            carnet={studentData.carnet}
            section={studentData.section}
            email={studentData.email}
          />

          {/* Botón para regresar */}
          <View style={styles.buttonContainer}>
            <Button
              title="Regresar a Inicio"
              onPress={handleGoBack}
              backgroundColor="#FF5722"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 30,
  },
});