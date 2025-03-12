const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process if the connection fails (optional)
  }
};

connectDB();

// Movie schema
const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true, index: true },
  releaseDate: { type: Number, min: [1900, 'Must be greater than 1899'], max: [2100, 'Must be less than 2100']},
  genre: {
    type: String,
    enum: [
      'Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Thriller', 'Western', 'Science Fiction'
    ],
  },
  actors: [{
    actorName: String,
    characterName: String,
  }],
});

module.exports = mongoose.model('Movie', MovieSchema);

const movies = [
  {
    title: "The Matrix",
    releaseDate: 1999,
    genre: "Science Fiction",
    actors: [
      { actorName: "Keanu Reeves", characterName: "Neo" },
      { actorName: "Laurence Fishburne", characterName: "Morpheus" }
    ]
  },
  {
    title: "The Shawshank Redemption",
    releaseDate: 1994,
    genre: "Drama",
    actors: [
      { actorName: "Tim Robbins", characterName: "Andy Dufresne" },
      { actorName: "Morgan Freeman", characterName: "Ellis Boyd 'Red' Redding" }
    ]
  },
  {
    title: "Inception",
    releaseDate: 2010,
    genre: "Thriller",
    actors: [
      { actorName: "Leonardo DiCaprio", characterName: "Cobb" },
      { actorName: "Joseph Gordon-Levitt", characterName: "Arthur" }
    ]
  },
  {
    title: "Parasite",
    releaseDate: 2019,
    genre: "Mystery",
    actors: [
      { actorName: "Song Kang-ho", characterName: "Kim Ki-taek" },
      { actorName: "Lee Sun-kyun", characterName: "Park Dong-ik" }
    ]
  },
  {
    title: "Interstellar",
    releaseDate: 2014,
    genre: "Adventure",
    actors: [
      { actorName: "Matthew McConaughey", characterName: "Cooper" },
      { actorName: "Anne Hathaway", characterName: "Amelia Brand" }
    ]
  }
];