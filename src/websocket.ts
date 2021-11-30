import { io } from './http';

io.on("connection", socket => {
    console.log('connected - ' + socket.id);

    socket.emit('message', { msg: 'teste' });
});