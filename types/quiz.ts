//types/quiz.ts
export interface Question {
  id: number;
  question: string;
  image?: string;
  options: {
    label: string;
    text: string;
    image?: string;
  }[];
  correctAnswer: string;
}

export interface QuizData {
  pretest: Question[];
  posttest: Question[];
}