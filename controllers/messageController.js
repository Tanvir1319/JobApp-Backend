const Message = require("../models/Message");
const User = require("../models/User");

module.exports ={
    getAllMessage : async (req, res) => {
        try {
            const pageSize = 12 ;// Number of messages per page
            const page = req.query.page || 1; //Current page number
            //Caculate the of messages to skip
            const skipMessages =(page - 1) * pageSize;
            //Find messages with messages
            var messages = await Message.find({chat:req.params.id})
              .populate("sender","username profile email")
              .populate("chat")
              .sort({createdAt: -1})
              .skip(skipMessages)
              .limit(pageSize)
              messages = await User.populate(messages,
                {
                    path: "chat.users",
                    select: "username profile email"
                }
                );
                res.json(messages);
        
        } catch (error) {
            res.status(500).json({error: "Couldn't retrive message"});
        }
    },

    sendMessage: async (req, res) => {
        const {content,chatId, receiver} = req.body;
        if(
            !content || chatId
        ){
            console.log("Invalid error");
            return res.status(400).json("Invalid message");
        }
        var newMessage = {
            sender: req.user.id,
            content: content,
            receiver: receiver,
            chatId: chatId
        };
        
        try {
            var message = await Message.create(newMessage);
            message = await message.populate("sender","username profile email")
            message = await message.populate("chat")
            message = await User.populate(message, {
                path: "chat.users",
                select: "username profile email"
            });
            await Chat.findByIdAndUpdate(req.body.chatId, {latestMessage:message});
            response.json(message);
        }
        catch (error) {
            res.status(400).json({error:error});
        }
    }
}