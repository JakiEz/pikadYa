//app/review.tsx
import { router, useLocalSearchParams } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import quizImages from "../constants/quizImages";
import questionsData from "../data/questions.json";
import { QuizData } from "../types/quiz";
export default function ReviewScreen() {
  const { answers } = useLocalSearchParams<{ answers: string }>();
  const userAnswers = JSON.parse(answers || "{}");

  const questions = (questionsData as QuizData).posttest;

  return (
    <View style={{ flex: 1 }}>
    <ScrollView style={styles.container}   contentContainerStyle={styles.scrollContent}>
      {questions.map((q) => {
        const userAnswer = userAnswers[q.id];
        const isCorrect = userAnswer === q.correctAnswer;

        return (
          <View key={q.id} style={styles.card}>
            <Text style={styles.question}>
              {q.id}. {q.question}
            </Text>

            {q.image && quizImages[q.image] && (
              <Image
                source={quizImages[q.image]}
                style={{ width: "100%", height: 200 }}
                resizeMode="contain"
              />
            )}

            {q.options.map((opt) => {
              const isUser = userAnswer === opt.label;
              const isRight = q.correctAnswer === opt.label;

              return (
                <View
                  key={opt.label}
                  style={[
                    styles.option,
                    isRight && { backgroundColor: "#4CAF50" }, // ✅ เฉลย
                    isUser && !isRight && { backgroundColor: "#F44336" }, // ❌ ผิด
                  ]}
                >
                  <Text style={styles.optionText}>
                    {opt.label}. {opt.text}
                  </Text>

                  {opt.image && quizImages[opt.image] && (
                    <Image
                      source={quizImages[opt.image]}
                      style={{ width: "100%", height: 120 }}
                      resizeMode="contain"
                    />
                  )}
                </View>
              );
            })}

            <Text style={{ marginTop: 10 }}>
              คำตอบของคุณ: {userAnswer || "-"}
            </Text>
            <Text>เฉลย: {q.correctAnswer}</Text>
            {q.explanation && (
              <View style={styles.explanationBox}>
                <Text style={styles.explanationTitle}>💡 คำอธิบาย</Text>

                {q.explanation.split("\n").map((line, index) => (
                  <Text
                    key={index}
                    style={[
                      styles.explanationText,
                      index === 0 && { color: "red", fontWeight: "bold" },
                    ]}
                  >
                    {line}
                  </Text>
                ))}
              </View>
            )}
            {q.explanationImage && quizImages[q.explanationImage] && (
              <Image
                source={quizImages[q.explanationImage]}
                style={{ width: "100%", height: 300, marginTop: 10 }}
                resizeMode="contain"
              />
            )}
            
          </View>
          
        );
        
      })}
      
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
    backgroundColor: "#f5d742",
    padding: 12,
   
  },
  card: {
    backgroundColor: "#fff",
    marginBottom: 15,
    
    padding: 15,
    borderRadius: 10,
  },
  question: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  option: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    backgroundColor: "#eee",
  },
  optionText: {
    fontSize: 14,
  },
  explanationBox: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#fff3f3",
    borderRadius: 10,
    borderLeftWidth: 5,
    borderLeftColor: "red",
  },

  explanationTitle: {
    fontWeight: "bold",
    color: "red",
    marginBottom: 5,
  },

  explanationText: {
    color: "#333",
    lineHeight: 20,
  },
  scrollContent: {
    paddingTop: 40,     // ⭐ เว้นบน
    paddingBottom: 40, // ⭐ เว้นล่าง (เผื่อปุ่มย้อนกลับ)
  },
});
