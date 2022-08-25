
import { createChatBotMessage } from 'react-chatbot-kit';
import DogPicture from './UserGadgets/DogPicture';
import Avatar from './UserGadgets/Avatar';

const botName = "Mice";

const config = {
  initialMessages: [createChatBotMessage(`Hi!, I'm ${botName}`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#8e7ce0',
    },
    chatButton:{
        backgroundColor: '#110988',
    }
  },
  widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    },
    {
        widgetName: 'Avatar',
        widgetFunc: (props) => <Avatar {...props} />,
      },
  ],
  

};

export default config;