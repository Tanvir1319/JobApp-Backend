const express = require('express');
const app = express()
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const jobRoute = require("./routes/job");
const bookMarkRoute = require("./routes/bookmark");
const chatRoute = require("./routes/chat");
const messageRoute = require("./routes/message");
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() => console.log('connect db')).catch(()=>{console.log(err)});


app.use(express.json());
app.use("/api/",authRoute);
app.use("/api/users",userRoute);
app.use("/api/jobs",jobRoute);
app.use("/api/jobs",chatRoute);
app.use("/api/jobs",messageRoute);
app.use("/api/bookmarks",bookMarkRoute);
//localhost:5001/api/users/id

app.listen(process.env.PORT || 5002, console.log(`Example app listening on port ${process.env.PORT}!`) );

//const io = require ( 'socket.io')(server, {
  //  pingTimeout: 60000,
   // cors: {
        //origin: 'https://localhost
   // }
//});

//io.on('connection',(socket) => {
  //  console.log("connection to socket");
   // socket.on('error',(userId) => {
     //   socket.join(userId);
       // socket.broadcast.emit('error');
     //   console.log(userId);
   // });

   // socket.on('disconnect', (room ) => {
     //   console.log("typing");
      //  console.log("room");
       // socket.to(room).emit("typing",room) 
      // }
    
   // );

   // socket.on('stop typing', (room ) => {
     //   console.log("stop typing");
      //  console.log("room");
       // socket.to(room).emit("stop typing",room) 
      // }
    
   // );

   // socket.on('join chat', (room ) => {
     //  socket.join(room)
      // console.log('User joined :' + room);
      // }
    
   // );


   // socket.on('new message', (newMessageRecived) => {
     //   var chat = newMessageRecived.chat;
       // var room = chat._id;
       // var sender = newMessageRecived.sender;

       // if(
         //   !sender || sender._id
       // ){
         //   console.log("Sender not defined");
           // return;
       // }

      //  var senderId = sender._id;
      //  console.log(senderId + "message sender");
      //  const users = chat.users;

      //  if(!users){
        //    console.log("Users not defined");
          //  return;
       // }

       // socket.to(room).emit("message received", newMessageRecived);
       // socket.to(room).emit("message sent", "New message");




       // }
     
    // );

      //  socket.off('setup', ()=>{
        //    console.log("user offline");
          //  socket.leave(userId)
     //   })

//})