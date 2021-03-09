module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log(`Connect from Client: ${socket}`);

        socket.on('chat', (data) => {
            console.log(`message from Client: ${data.message}`);
            const rtnMessage = {
                message: data.message,
                socketId: data.socketId
            };
            socket.broadcast.emit('chat', rtnMessage);
        });
    });
};
