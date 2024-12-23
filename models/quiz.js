const QuizSchema = new mongoose.Schema(
  {
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    questions: [
      {
        id: {
          tyep: String,
        },
        question: {
          tyep: String,
        },
        options: {
          tyep: [String],
        },
        correctAnswer: {
          tyep: String,
        },
      },
    ],
  },
  { timestamps: true }
);

const Quiz = mongoose.model("Quiz", QuizSchema);
module.exports = Quiz;
