canvas = document.getElementById('screen');
screen = canvas.getContext('2d');

maper = document.getElementById('maper');
mpc = maper.getContext('2d');

players = document.getElementById('players');
ctx = players.getContext('2d');

mouse = null;
// cd = false;
window.addEventListener('keyup', function (e) {
    // if(!cd){
    player.clear();
    // cd = true;
    // timerCd = setTimeout(cooldown, 50);
    if (e.keyCode == 37 && player.xpos > 0)
        if (player.colision(37)) player.xpos--; // <
    if (e.keyCode == 39 && player.xpos < 19)
        if (player.colision(39)) player.xpos++; // >
    if (e.keyCode == 40 && player.ypos < 9)
        if (player.colision(40)) player.ypos++; // \/
    if (e.keyCode == 38 && player.ypos > 0)
        if (player.colision(38)) player.ypos--; // /\
    if(player.xpos == 1 && player.ypos == 3){
        player.xpos = 1;
        player.ypos = 5;
        player.color = 'blue';
    }else if(player.xpos == 19 && player.ypos == 3){
        player.xpos = 19;
        player.ypos = 5;
        player.color = 'red';
    }
    player.render();
    socket.emit('movement', { x : player.xpos, y : player.ypos, name : name, color : player.color });
});

function cooldown(){
    cd = false;
}

// canvas.addEventListener('click', function (m) {
     
//     mouse = {
//         x: parseInt((m.clientX / 40)),
//         y: parseInt((m.clientY / 40))
//     };
//     player.clear();
//     // if(!cd){
//     if (Math.abs(player.xpos - mouse.x) == 1 && Math.abs(player.ypos - mouse.y) == 1) {
//         if (map.stadium[mouse.y][mouse.x] != 1 && map.stadium[mouse.y][mouse.x] != 7) {
//             // timerCd = setTimeout(cooldown, 200);
//             player.xpos = mouse.x
//             player.ypos = mouse.y
//             // cd = true; 
//             socket.emit('movement', { x : player.xpos, y : player.ypos, name : name })      
//         }
//     }
// // }
//     player.render();
//     // clearTimeout(timerCd);
//     logger.refresh(mouse);
// });

map.render();



// BOOTSTRAP