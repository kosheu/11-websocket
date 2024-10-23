const WebSoket= require('ws');

const wss = new WebSoket.Server({port: 8080});

wss.on('connection', (ws) =>{
    console.log('Новое соединение установлено')
    ws.on('message', (message)=>{
        console.log('полученно собщение:', message.toString);
        ws.send(message.toString);
    });
    ws.send('добро пожаловать на websoket сервер');
});
console.log('Websoket сервер запущен на localhost:8080')