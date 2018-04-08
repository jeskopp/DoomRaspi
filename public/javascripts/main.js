
  var socket = io.connect('192.168.1.201:3000'); // Conecto con el servidor http 
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { usuario: 'Jesùs' });
  });

