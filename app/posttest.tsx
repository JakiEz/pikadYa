import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, Image } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';
import QuizOption from '../components/QuizOption';
import questionsData from '../data/questions.json';
import { Question } from '../types/quiz';
import quizImages from '../constants/quizImages';

export default function PostTestScreen() {
  const questions: Question[] = questionsData.posttest;
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  const handleSelectOption = (questionId: number, label: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: label,
    }));
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const handleSubmit = () => {
    const unanswered = questions.filter(q => !answers[q.id]);

    if (unanswered.length > 0) {
      Alert.alert(
        'ยังตอบไม่ครบ',
        `กรุณาตอบคำถามข้อที่ ${unanswered.map(q => q.id).join(', ')}`,
        [{ text: 'ตกลง' }]
      );
      return;
    }

    const score = calculateScore();
    router.push({
      pathname: '/result',
      params: {
        score: score.toString(),
        total: questions.length.toString(),
        type: 'posttest',
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Post-test</Text>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {questions.map((question) => (
          <View key={question.id} style={styles.questionContainer}>
            <Text style={styles.questionText}>
              {question.id}. {question.question}
            </Text>
            {question.image && quizImages[question.image] && (
              <Image source={quizImages[question.image]} style={styles.questionImage} resizeMode="contain" />
            )}

            {question.options.map(option => (
              <QuizOption
                key={option.label}
                label={option.label}
                text={option.text}
                image={option.image ? quizImages[option.image] : undefined}
                isSelected={answers[question.id] === option.label}
                onSelect={() => handleSelectOption(question.id, option.label)}
              />
            ))}
          </View>
        ))}

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>ส่งคำตอบ</Text>
        </TouchableOpacity>

       
      </ScrollView>

      <TouchableOpacity
          onPress={() => router.back()}
          style={{
            position: "absolute",
            bottom: 30,
            left: 20,
            backgroundColor: "#5a3e1b",
            paddingVertical: 12,
            paddingHorizontal: 18,
            borderRadius: 30,
            shadowColor: "#000",
            shadowOpacity: 0.3,
            shadowRadius: 5,
            shadowOffset: { width: 0, height: 3 },
            elevation: 5,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
            ← ย้อนกลับ
          </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5d742',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#8B6914',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  questionContainer: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  questionImage: {
    width: '100%',
    height: 200,
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: '#4a7c20',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#d4d4d4',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
  },
  backButtonText: {
    fontSize: 18,
  },
});
