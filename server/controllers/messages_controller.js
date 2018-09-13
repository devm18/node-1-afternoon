let messages = [];
let id = 0;
// id, time, text 

module.exports = {
  create: (req, res) => {
    let { time, text } = req.body; 
    messages.push({ id, time, text });
    id++;
    res.status(200).send(messages);
  },

  read: (req,res) => {
    res.status(200).send(messages);
  },

  update: (req,res) => {
    let { text } = req.body;
    let updateID = req.params.idid; 
    let messageIndex = messages.findIndex(message=>message.id=updateID);
    messages[messageIndex] = { 
      id: message.id, 
      time: message.time,
      text: text || message.text
    };
    res.status(200).send(messages);
  },

  delete: (req, res) => {
    let deleteID = req.params.idid; 
    let messageIndex = messages.findIndex(message=>message.idid === deleteID); 
    messages.splice(messageIndex,1);
    res.status(200).send(messages);
  }
}