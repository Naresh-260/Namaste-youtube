
export const hamberger_img = "https://www.svgrepo.com/show/520760/hamburger-4.svg"

export const youtube_icon = "https://static.vecteezy.com/system/resources/previews/011/998/173/original/youtube-icon-free-vector.jpg"

export const search_icon = "https://tse4.mm.bing.net/th/id/OIP.rsZB5iKwX6totSXcV94swQHaHN?r=0&pid=Api&P=0&h=180"

export const profile_icon = "https://static.vecteezy.com/system/resources/previews/018/765/138/large_2x/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg"

export const button_list = [
  "All",
  "Podcasts",
  "live",
  "practice",
  "Resumes",
  "cloud computing",
  "Machine Learning",
  "News",
  "Telugu cinema",
  "java",
  "python",
  "recent Movies",
  "trendy"
];


const Google_API = process.env.REACT_APP_Google_API

export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + Google_API

export const Youtube_search_suggestion_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const comments = [
  {
    name: "Naresh Lingammagari",
    comment: "This video explained the concept really clearly. The examples were very helpful!",
    reply: [
      {
        name: "Raju",
        comment: "Absolutely! I finally understood the concept after watching this.",
        reply: [
          {
            name: "Kumar",
            comment: "Same here. The practical explanation made a big difference.",
            reply: []
          }
        ]
      },
      {
        name: "Priya",
        comment: "The explanation of the implementation part was excellent.",
        reply: []
      }
    ]
  },

  {
    name: "Arjun",
    comment: "Can you make a detailed video about React performance optimization?",
    reply: [
      {
        name: "Naresh Lingammagari",
        comment: "Yes, that would be a great topic for the next video.",
        reply: [
          {
            name: "Ravi",
            comment: "Please cover memoization, lazy loading, and code splitting too!",
            reply: []
          }
        ]
      }
    ]
  },

  {
    name: "Sneha",
    comment: "Your videos are getting better with every upload. Keep going!",
    reply: [
      {
        name: "Vikram",
        comment: "I agree. The recent React videos have been really useful.",
        reply: []
      },
      {
        name: "Anil",
        comment: "Especially the Redux and routing explanations 🔥",
        reply: []
      }
    ]
  },

  {
    name: "Rahul",
    comment: "I was confused about recursion before this video, but now it finally makes sense.",
    reply: [
      {
        name: "Kiran",
        comment: "Same! The nested comments example was a perfect demonstration.",
        reply: [
          {
            name: "Rahul",
            comment: "Exactly! Seeing recursion in a real component made it much easier.",
            reply: []
          }
        ]
      }
    ]
  },

  {
    name: "Meena",
    comment: "Could you also explain how this would work with data coming from an API?",
    reply: []
  }
]


// Source - https://stackoverflow.com/q/54708626
// Posted by EMILO, modified by community. See post 'Timeline' for change history
// Retrieved 2026-08-21, License - CC BY-SA 4.0

var nameList = [
  'Time', 'Past', 'Future', 'Dev',
  'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
  'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
  'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
  'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
  'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
  'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
  'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
  'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
  'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
  'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
  'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
  'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
  'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
  'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
  'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
  'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
  'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
  'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
  'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
  'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
];
export const generateName = ()=>{
return nameList[Math.floor(Math.random() * nameList.length)];
};

const messages = [
  "Hi everyone 👋",
  "Hello guys!",
  "How are you doing?",
  "React is really interesting!",
  "I am learning Redux today.",
  "Anyone here working on React?",
  "This live chat is awesome!",
  "Good morning everyone ☀️",
  "Can someone help me?",
  "Just finished my React project!",
  "Learning something new every day 🚀",
  "Hello from India 🇮🇳",
];

export const generateMessage = () => {
  return messages[Math.floor(Math.random() * messages.length)];
};