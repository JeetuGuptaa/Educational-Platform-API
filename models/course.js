const CourseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    duration: {
      type: String,
    },
    instructorName: {
      type: String,
    },
    language: {
      type: String,
    },
    level: {
      type: String,
    },
    price: {
      type: String,
    },
    status: {
      type: String,
    },
    visibility: {
      type: String,
    },
    chapters: [
      {
        id: {
          type: String,
        },
        title: {
          type: String,
        },
        content: {
          type: String,
        },
        description: {
          type: String,
        },
        videoLink: {
          type: String,
        },
        duration: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", CourseSchema);
module.exports = Course;
