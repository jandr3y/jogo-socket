const player = {
    color: "red",
    xpos: 5,
    ypos: 0,
    size: 40,
    render: function () {
        screen.beginPath();
        screen.arc(((this.xpos * this.size) + 20), ((this.ypos * this.size) + 20), (this.size - 20), 0, 2 * Math.PI, false)
        screen.fillStyle = this.color;
        screen.lineWidth = 40;
        screen.fill();
    
    },
    clear: function () {
        screen.clearRect(this.xpos * this.size, this.ypos * this.size, this.size, this.size);
    },
    colision: function (type) {

        switch (type) {

            case 39:
                if (map.stadium[this.ypos][this.xpos + 1] != 1){
                for(var i = 0; i < blockedTiles.length; i++){
                    if(blockedTiles[i].x == (this.xpos + 1) && blockedTiles[i].y == (this.ypos)) return false;
                }
                return true;
                }
                break;
            case 37:
                if (map.stadium[this.ypos][this.xpos - 1] != 1){
                for(var i = 0; i < blockedTiles.length; i++){
                    if(blockedTiles[i].x == (this.xpos - 1) && blockedTiles[i].y == (this.ypos)) return false;
                }
                return true;
                }
                break;
            case 40:
                if (map.stadium[this.ypos + 1][this.xpos] != 1){
                for(var i = 0; i < blockedTiles.length; i++){
                    if(blockedTiles[i].x == (this.xpos) && blockedTiles[i].y == (this.ypos + 1)) return false;
                }
                return true;
                }
                break;
            case 38:
                if (map.stadium[this.ypos - 1][this.xpos] != 1){
                for(var i = 0; i < blockedTiles.length; i++){
                    if(blockedTiles[i].x == (this.xpos) && blockedTiles[i].y == (this.ypos - 1)) return false;
                }
                return true;
                }
                break;
            };
        }
    }


const population = {
    render : function(data){

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        blockedTiles.forEach(x => {
            ctx.beginPath();
            ctx.arc(((x.x * 40) + 20), ((x.y * 40) + 20), (40 - 20), 0, 2 * Math.PI, false);
            ctx.lineWidth = 40;
            ctx.fillStyle = x.color;
            ctx.fill();
        })
    }
}