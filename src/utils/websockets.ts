import io from 'socket.io-client';
import { WEBSOCKET_GATEWAY } from 'appConstant/apiEndpoint';

let socket = null;

if (typeof window !== 'undefined') {
  socket = io(WEBSOCKET_GATEWAY)
}

export default socket;