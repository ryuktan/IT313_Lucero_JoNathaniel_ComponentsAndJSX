import { View, Text, StyleSheet } from 'react-native';

export default function StudentCard({ name, course, units, isFullLoad }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.detail}>{course}</Text>
      <Text style={styles.detail}>{units} units</Text>
      
      {isFullLoad && <Text style={styles.fullLoad}>Full Load</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f2',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  name: { fontSize: 18, fontWeight: 'bold' },
  detail: { fontSize: 14, color: '#333' },
  fullLoad: { marginTop: 8, color: 'green', fontWeight: 'bold' },
});