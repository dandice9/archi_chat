import * as express from 'express'
import * as http from 'http'
import { Server } from 'socket.io'
import * as cors from 'cors'

const app = express();

const server = http.createServer(app);
const io = new Server(server)

io.on('connection', (socket) => {
    socket.on('chat', (data) => {
      io.emit('chat', data)
    })
});

app.use(cors())
app.get('/ping', (req, res) => res.send('pong!'))
app.use(express.static('../frontend/dist'))

server.listen(3000, () => {
  console.log('listening on *:3000');
});