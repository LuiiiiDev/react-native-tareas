import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

export default function CardStudent({ 
  fullName, 
  age, 
  image, 
  carnet, 
  section, 
  email 
}) {
  return (
    <View style={styles.card}>
      {/* Header de la card */}
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>Información del Estudiante</Text>
      </View>

      {/* Contenido de la card */}
      <View style={styles.cardContent}>
        {/* Imagen del estudiante */}
        <View style={styles.imageContainer}>
          {image ? (
            <Image 
              source={{ uri: image }} 
              style={styles.studentImage}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.imagePlaceholder}>
              <Text style={styles.imagePlaceholderText}>
                {fullName ? fullName.charAt(0).toUpperCase() : '?'}
              </Text>
            </View>
          )}
        </View>

        {/* Información del estudiante */}
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Nombre Completo:</Text>
            <Text style={styles.value}>{fullName || 'No especificado'}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Edad:</Text>
            <Text style={styles.value}>{age ? `${age} años` : 'No especificado'}</Text>
          </View>

          {carnet && (
            <View style={styles.infoRow}>
              <Text style={styles.label}>Carnet:</Text>
              <Text style={styles.value}>{carnet}</Text>
            </View>
          )}

          {section && (
            <View style={styles.infoRow}>
              <Text style={styles.label}>Sección:</Text>
              <Text style={styles.value}>{section}</Text>
            </View>
          )}

          {email && (
            <View style={styles.infoRow}>
              <Text style={styles.label}>Email:</Text>
              <Text style={styles.value}>{email}</Text>
            </View>
          )}
        </View>
      </View>

      {/* Footer de la card */}
      <View style={styles.cardFooter}>
        <Text style={styles.footerText}>
          Instituto Técnico Ricaldone - 2025
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  cardHeader: {
    backgroundColor: '#2196F3',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  cardContent: {
    padding: 25,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
  studentImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#2196F3',
  },
  imagePlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#2196F3',
  },
  imagePlaceholderText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#666',
  },
  infoContainer: {
    gap: 15,
  },
  infoRow: {
    flexDirection: 'column',
    gap: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2196F3',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  value: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    paddingLeft: 10,
  },
  cardFooter: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  footerText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});