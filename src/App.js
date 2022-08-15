import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ChatPage from './components/ChatPage';
import socketIO from 'socket.io-client';

const socket = socketIO.connect('http://localhost:4001');
socket.on("connect_error", (err) => {
  console.log(`connect_error due to ${err.message}`);
});
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home socket={socket} />}></Route>
          <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
