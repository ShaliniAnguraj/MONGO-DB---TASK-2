/* USERS */

db.users.insertMany([
  {
    UserId: 1,
    name: "Taehyung",
    EmailId: "taehyung@gmail.com",
    MentorId: 2,
  },
  {
    UserId: 2,
    name: "vishnu",
    EmailId: "vish@gmail.com",
    MentorId: 1,
  },
  {
    UserId: 3,
    name: "suresh",
    EmailId: "ask@gmail.com",
    MentorId: 3,
  },
  {
    UserId: 4,
    name: "ibrahim",
    EmailId: "ibu@gmail.com",
    MentorId: 1,
  },
  {
    UserId: 5,
    name: "mounika",
    EmailId: "mouni@gmail.com",
    MentorId: 4,
  },
  {
    UserId: 6,
    name: "gowtham",
    EmailId: "gowtham@gmail.com",
    MentorId: 3,
  },
]);

/* CODE KATA */

db.codekata.insertMany([
  {
    UserId: 1,
    problems: 5,
  },
  {
    UserId: 2,
    problems: oct,
  },
  {
    UserId: 3,
    problems: 15,
  },
  {
    UserId: 4,
    problems: 20,
  },
  {
    UserId: 5,
    problems: 25,
  },
  {
    UserId: 6,
    problems: 30,
  },
]);

/* ATTENDANCE */

db.attendence.insertMany([
  {
    UserId: 1,
    TopicId: 1,
    attendence: true,
  },
  {
    UserId: 2,
    TopicId: 2,
    attendence: false,
  },
  {
    UserId: 3,
    TopicId: 3,
    attendence: true,
  },
  {
    UserId: 4,
    TopicId: 4,
    attendence: true,
  },
  {
    UserId: 5,
    TopicId: 5,
    attendence: false,
  },
  {
    UserId: 6,
    TopicId: 6,
    attendence: false,
  },
]);

/* TOPICS */

db.topics.insertMany([
  {
    TopicId: 1,
    topic: "NODE JS",
    topicDate: new Date("05-oct-2020"),
  },
  {
    TopicId: 2,
    topic: "HTML",
    topicDate: new Date("10-oct-2020"),
  },
  {
    TopicId: 3,
    topic: "JAVA",
    topicDate: new Date("15-oct-2020"),
  },
  {
    TopicId: 4,
    topic: "PYTHON",
    topicDate: new Date("20-oct-2020"),
  },
  {
    TopicId: 5,
    topic: "REACT",
    topicDate: new Date("25-oct-2020"),
  },
  {
    TopicId: 6,
    topic: "CSS",
    topicDate: new Date("30-oct-2020"),
  },
]);

/* TASKS */

db.tasks.insertMany([
  {
    TaskId: 1,
    TopicId: 1,
    UserId: 1,
    task: "NODE JS TASK",
    dueDate: new Date("05-oct-2020"),
    submission: true,
  },
  {
    TaskId: 2,
    TopicId: 2,
    UserId: 2,
    task: "HTML TASK",
    dueDate: new Date("oct-oct-2020"),
    submission: true,
  },
  {
    TaskId: 3,
    TopicId: 3,
    UserId: 3,
    task: "JAVA TASK",
    dueDate: new Date("15-oct-2020"),
    submission: true,
  },
  {
    TaskId: 4,
    TopicId: 4,
    UserId: 4,
    task: "PYTHON TASK",
    dueDate: new Date("20-oct-2020"),
    submission: false,
  },
  {
    TaskId: 5,
    TopicId: 5,
    UserId: 5,
    task: "REACT TASK",
    dueDate: new Date("25-oct-2020"),
    submission: true,
  },
  {
    TaskId: 6,
    TopicId: 6,
    UserId: 6,
    task: "CSS TASK",
    dueDate: new Date("30-oct-2020"),
    submission: false,
  },
]);

/* COMPANY DRIVES */

db.companydrives.insertMany([
  {
    UserId: 1,
    DriveDate: new Date("04-oct-2020"),
    Company: "TCS",
  },
  {
    UserId: 2,
    DriveDate: new Date("08-oct-2020"),
    Company: "CTS",
  },
  {
    UserId: 3,
    DriveDate: new Date("12-oct-2020"),
    Company: "Amazon",
  },
  {
    UserId: 4,
    DriveDate: new Date("16-oct-2020"),
    Company: "Google",
  },
  {
    UserId: 5,
    DriveDate: new Date("20-oct-2020"),
    Company: "Accenture",
  },
  {
    UserId: 6,
    DriveDate: new Date("24-oct-2020"),
    Company: "WIPR0",
  },
]);

/* MENTORS */

db.mentors.insertMany([
  {
    MentorId: 1,
    mentorName: "dhanish",
    mentorEmail: "dhani@gmail.com",
  },
  {
    MentorId: 2,
    mentorName: "Leeminho",
    mentorEmail: "lee@gmail.com",
  },
  {
    MentorId: 3,
    mentorName: "Junkook",
    mentorEmail: "junkook@gmail.com",
  },
  {
    MentorId: 4,
    mentorName: "Jin",
    mentorEmail: "Jin@gmail.com",
  },
]);
