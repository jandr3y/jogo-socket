var logger = {
    playerContent : document.getElementById('playerLogger'),
    mapContent : document.getElementById('mapLogger'),
    mouseContent : document.getElementById('mouseLogger'),
    refresh : function(mouse){
        this.playerContent.innerHTML = 'x Position : ' + player.xpos + ' - y Position : ' + player.ypos;
        this.mapContent.innerHTML = 'Nothing...';
        this.mouseContent.innerHTML = 'x: ' + mouse.x + " - y: " + mouse.y;
    }
}