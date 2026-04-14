## 🚀 Features

- Register votes for fox images
- Store votes in MongoDB
- Return voting statistics
- Serve API for frontend

---

## 📦 Installation

```bash
npm install
⚙️ Environment Variables

Create a .env file:

PORT=5000
FOX_API_URL=https://randomfox.ca/floof/
MONGODB_URL=mongodb://localhost:27017/foxdb

npm start

## 🌐 Visit the API at
http://localhost:5000/api/fox/

📡 API Routes

🗳️ Vote for a fox
POST /api/fox/vote

Body:

{
  "winnerUrl": "image_url",
  "loserUrl": "image_url"
}

📊 Get statistics
GET /api/fox/stats

Response:

{
  "foxes": [
    {
      "imageUrl": "string",
      "votes": 10
    }
  ]
}

🦊 Get random fox
GET /api/fox/

Response:
{
  "fox1": "https://randomfox.ca/images/92.jpg",
  "fox2": "https://randomfox.ca/images/13.jpg"
}

🧠 How it works
Receives vote request
Updates winner fox votes in MongoDB
Ensures loser fox exists in database
Sends updated data back to frontend
📌 Notes
Must be running before frontend
MongoDB connection required
CORS may be needed for separate frontend setup
👨‍💻 Author

Built by Jazz 🚀
