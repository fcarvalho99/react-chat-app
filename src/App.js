import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="8da16ccf-016f-4ae0-8ac4-0d69f6a6969b"
      userName="Hostjs"
      userSecret="koalautra1230"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  )
}

export default App;
