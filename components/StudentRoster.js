import { View, Text, StyleSheet } from 'react-native';
import StudentCard from './StudentCard';

const students = [
  { id: 's1', name: 'Ana Cruz', course: 'IT313', units: 21, isFullLoad: true },
  { id: 's2', name: 'Bea Santos', course: 'IT313', units: 15, isFullLoad: false },
  { id: 's3', name: 'Cid Ramos', course: 'IT313', units: 18, isFullLoad: true },
  { id: 's4', name: 'Dex Alonzo', course: 'IT313', units: 12, isFullLoad: false },
];

export default function StudentRoster() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{`${students.length} students`}</Text>
      
      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          course={student.course}
          units={student.units}
          isFullLoad={student.isFullLoad}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingTop: 24 },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginBottom: 8,
  },
});