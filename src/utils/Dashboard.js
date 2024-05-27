import Speech from '../assets/speech.png'
import Maths from '../assets/maths.png'
import triangle from '../assets/triangle.png'
import circle from '../assets/circle.png'

const DashSubject = [
    {
        id: 1,
        imgURL: `${Speech}`,
        subjectTitle: "Parts of Speech",
        subjectDescription: "Start the basics of English by learning the 9 parts of speech",
    },
    {
        id: 2,
        imgURL: `${Maths}`,
        subjectTitle: "Counting to 100",
        subjectDescription: "Start the basics of Maths by learning 1,2,3...........20",
    }
]

const DashChallenges = [
    {
        id: 1,
        imgURL: `${triangle}`,
        challengecap: "Draw a triangle",
        rating: "💎 0/500",
    },
    {
        id: 2,
        imgURL: `${circle}`,
        challengecap: "Draw a circle",
        rating: "💎 0/500"
    }
]

const progressData = [
    { 
        id: 1, 
        value: "100%",
        subject: "English Hero",
        rate: "16/16 completed",
    },
    { 
        id: 2, 
        value: "65%",
        subject: "Rhymes",
    },
    { 
        id: 3, 
        value: "50%",
        subject: "Maths Mania",
        rate: "8/16 completed",
    },
    {
        id: 4,
        value: "30%",
        subject: "Challenges",
        rate: "3/10 completed"
    },
    {
        id: 5,
        value: "0%",
        subject: "Upgrade to level 3",
        rate: "0/16 completed",
    },
];

export {DashSubject, DashChallenges, progressData};