console.log('hii')
window.addEventListener('load',(cheackconnect)=>{
    const connect=document.getElementById('statustext');
    const ipAdd=document.getElementById('ipaddrestext');
    const netstren=document.getElementById('network');
    connect.textContent='cheacking......';
    if(navigator.onLine){
        fetch('https://api.ipify.org?format=json')
        .then((Response)=> Response.json())
        .then((data)=>{
            ipAdd.textContent=data.ip;
            connect.textContent='connected'

            const connection= navigator.connection;
            const networkstren= connection ? connection.downlink
            +'Mbps' : 'unknown';
            netstren.textContent=networkstren

        })
        .catch(()=>{
                connect.textContent='Disconnected';
                ipAdd.textContent='-'
                netstren.textContent='-'
             })

    } else{
        connect.textContent='Disconnected';
        ipAdd.textContent='-'
        netstren.textContent='-'
    }
})