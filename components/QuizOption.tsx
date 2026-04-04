import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';

interface QuizOptionProps {
  label: string;
  text: string;
  image?: any;
  isSelected: boolean;
  onSelect: () => void;
}

export default function QuizOption({ label, text, image, isSelected, onSelect }: QuizOptionProps) {
  return (
    <TouchableOpacity style={styles.optionContainer} onPress={onSelect}>
      <View style={[styles.radio, isSelected && styles.radioSelected]}>
        {isSelected && <View style={styles.radioInner} />}
      </View>
      <View style={styles.optionContent}>
        {text ? (
          <Text style={styles.optionText}>{label}. {text}</Text>
        ) : (
          <Text style={styles.optionText}>{label}.</Text>
        )}
        {image && <Image source={image} style={styles.optionImage} resizeMode="contain" />}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#666',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioSelected: {
    borderColor: '#4a7c20',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4a7c20',
  },
  optionContent: {
    flex: 1,
  },
  optionText: {
    fontSize: 18,
  },
  optionImage: {
    width: 200,
    height: 150,
    marginTop: 8,
  },
});