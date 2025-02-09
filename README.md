# SSS
POST http://localhost:3000/register/
//tables sql
CREATE TABLE items (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
//user sql
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255) UNIQUE,
  password VARCHAR(255)
);
###
POST http://localhost:3000/login/
Content-Type: application/json

{
  "username":"JoeBiden",
  "password":"biden@123"
}
###
GET http://localhost:3000/user/tweets/feed/
Authorization: BEARER eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkpvZUJpZGVuIiwiaWF0IjoxNjc5NTYzNzMzfQ.Q8j1baMp4Wr4NH1fTlTDHHsl2PZEk9MfJj-QMQytb0E 

###
GET http://localhost:3000/user/following/
Authorization: BEARER eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkpvZUJpZGVuIiwiaWF0IjoxNjc5NTYzNzMzfQ.Q8j1baMp4Wr4NH1fTlTDHHsl2PZEk9MfJj-QMQytb0E 

###
GET http://localhost:3000/user/followers/
Authorization: BEARER eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkpvZUJpZGVuIiwiaWF0IjoxNjc5NTYzNzMzfQ.Q8j1baMp4Wr4NH1fTlTDHHsl2PZEk9MfJj-QMQytb0E 

###
GET http://localhost:3000/tweets/2/
Authorization: BEARER eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkpvZUJpZGVuIiwiaWF0IjoxNjc5NTYzNzMzfQ.Q8j1baMp4Wr4NH1fTlTDHHsl2PZEk9MfJj-QMQytb0E 

###
GET http://localhost:3000/tweets/2/likes/
Authorization: BEARER eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkpvZUJpZGVuIiwiaWF0IjoxNjc5NTYzNzMzfQ.Q8j1baMp4Wr4NH1fTlTDHHsl2PZEk9MfJj-QMQytb0E 

###
GET http://localhost:3000/tweets/2/replies/
Authorization: BEARER eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkpvZUJpZGVuIiwiaWF0IjoxNjc5NTYzNzMzfQ.Q8j1baMp4Wr4NH1fTlTDHHsl2PZEk9MfJj-QMQytb0E 

###
GET http://localhost:3000/user/tweets/
Authorization: BEARER eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkpvZUJpZGVuIiwiaWF0IjoxNjc5NTYzNzMzfQ.Q8j1baMp4Wr4NH1fTlTDHHsl2PZEk9MfJj-QMQytb0E 

###
POST http://localhost:3000/user/tweets/
Authorization: BEARER eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkpvZUJpZGVuIiwiaWF0IjoxNjc5NTYzNzMzfQ.Q8j1baMp4Wr4NH1fTlTDHHsl2PZEk9MfJj-QMQytb0E 
Content-Type: application/json

{
   "tweet": "The Mornings..."
}

###
DELETE http://localhost:3000/tweets/5/
Authorization: BEARER eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkpvZUJpZGVuIiwiaWF0IjoxNjc5NTYzNzMzfQ.Q8j1baMp4Wr4NH1fTlTDHHsl2PZEk9MfJj-QMQytb0E 

###
{"jwtToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkpvZUJpZGVuIiwiaWF0IjoxNjc5NTYzNzMzfQ.Q8j1baMp4Wr4NH1fTlTDHHsl2PZEk9MfJj-QMQytb0E