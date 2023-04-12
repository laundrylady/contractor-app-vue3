import type { Socket } from 'socket.io-client'
import { io } from 'socket.io-client'

interface ServerToClientEvents {
  newRelease: () => void;
}

interface ClientToServerEvents {
  noArg: () => void;
}

class SocketIOService {
  socket: Socket<ServerToClientEvents, ClientToServerEvents>
  constructor () {
    let url = ''
    if (process.env.NODE_ENV === 'development') {
      url = 'http://localhost:3334'
    } else {
      url = `https://${window.location.hostname}`
    }
    this.socket = io(url)
  }
}

// create an instance/connection here
export const socket = new SocketIOService().socket
