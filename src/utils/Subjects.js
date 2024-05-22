import Stars from "../assets/stars.svg";
import Verb from "../assets/verbs.png";
import Phonics from "../assets/phonics.png";
import Speech from "../assets/speech.png";
import Maths from "../assets/maths.png";
import Count from "../assets/count.png";
import Square from "../assets/square.png";
import Senses from "../assets/senses.png";
import Matter from "../assets/matter.png";
import Plant from "../assets/plant.png";
import Body from "../assets/body.png";
import Manners from "../assets/manners.png";
import Elders from "../assets/elders.png";

const English = [
  {
    id: 1,
    subjectTitle: "Parts of Speech",
    subjectDescription:
      "Start the basics of English by learning the 9 parts of speech",
    imgURL: `${Speech}`,
    rating: `${Stars}`,
  },
  {
    id: 2,
    subjectTitle: "Phonics for Kiddies",
    subjectDescription:
      "Basic vowel and consonant sound and alphabets in a fun way!",
    imgURL: `${Phonics}`,
    rating: `${Stars}`,
  },
  {
    id: 3,
    subjectTitle: "Verbs by Story",
    subjectDescription:
      "Learn about actions words in this story about Mickey and Tom. ",
    imgURL: `${Verb}`,
    rating: `${Stars}`,
  },
];

const Math = [
  {
    id: 1,
    subjectTitle: "Counting to 100",
    subjectDescription:
      "Start the basics of learning numbers by counting to 100. ",
    imgURL: `${Maths}`,
    rating: `${Stars}`,
  },
  {
    id: 2,
    subjectTitle: "Decimal Fractions",
    subjectDescription:
      "Have a fun and easy go on these fractions. Learn with fun!",
    imgURL: `${Count}`,
    rating: `${Stars}`,
  },
  {
    id: 3,
    subjectTitle: "Squares of Numbers",
    subjectDescription:
      "Have a fun and easy go on these fractions. Learn with fun!",
    imgURL: `${Square}`,
    rating: `${Stars}`,
  },
];

const BasicScience = [
  {
    id: 1,
    subjectTitle: "The Five Senses",
    subjectDescription:
      "Understand the sight, hearing, smell, taste, touch of the body.",
    imgURL: `${Senses}`,
    rating: `${Stars}`,
  },
  {
    id: 2,
    subjectTitle: "State of Matter",
    subjectDescription: "Matter comes in different states, let us find out!  ",
    imgURL: `${Matter}`,
    rating: `${Stars}`,
  },
  {
    id: 3,
    subjectTitle: "Parts of a Plant",
    subjectDescription:
      "Did you know that there are parts of a plant called stems, roots, leaves?",
    imgURL: `${Plant}`,
    rating: `${Stars}`,
  },
];

const General = [
  {
    id: 1,
    subjectTitle: "Table manners",
    subjectDescription:
      "Have you ever been at the table? Here is how to behave.",
    imgURL: `${Manners}`,
    rating: `${Stars}`,
  },
  {
    id: 2,
    subjectTitle: "Care of the Body",
    subjectDescription:
      "Your body needs to be taken care of. Take this lesson to see how!",
    imgURL: `${Body}`,
    rating: `${Stars}`,
  },
  {
    id: 3,
    subjectTitle: "Greeting your Elders",
    subjectDescription:
      "There is a way to greet anyone older than you. Take this lesson now!",
    imgURL: `${Elders}`,
    rating: `${Stars}`,
  },
];

export { English, Math, BasicScience, General };
