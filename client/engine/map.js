var tileset = new Image();

     tiles = {
        grass: function(x, y){
            console.log("Load gras..");
            return mpc.drawImage(tileset, 0, 0, 32, 32, x, y, 40, 40);
        }
    }




var map = {
    stadium: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 1],
        [1, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 1],
        [1, 11, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 10, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1, 0, 0, 7, 7, 7, 0, 7, 7, 7, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 7, 0, 7, 1, 1, 0, 1, 0, 1, 1, 7, 0, 7, 1, 0, 0, 1],
        [1, 0, 0, 1, 7, 0, 7, 1, 1, 0, 1, 0, 1, 1, 7, 0, 7, 1, 0, 0, 1],
        [1, 0, 0, 0, 1, 0, 0, 7, 7, 7, 0, 7, 7, 7, 0, 0, 1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],


    render: function render() {
        for (let i = 0; i < this.stadium.length; i++) {
            for (let j = 0; j < this.stadium[i].length; j++) {
                if(this.stadium[i][j] == 0){
                 tileset.onload = function(){
                    tiles.grass(i * 40, j * 40);
                 }
                }else if(this.stadium[i][j] == 1) {
                    mpc.fillStyle = 'black';
                    mpc.fillRect(j * 40, i * 40, 40, 40);
                }else if(this.stadium[i][j] == 9) {
                    mpc.fillStyle = 'green';
                    mpc.fillRect(j * 40, i * 40, 40, 40);
                }else if(this.stadium[i][j] == 8) {
                    mpc.fillStyle = 'gray';
                    mpc.fillRect(j * 40, i * 40, 40, 40);
                }else if(this.stadium[i][j] == 7 || this.stadium[i][j] == 6) {
                    mpc.fillStyle = 'rgba(247, 243, 2, 0.2)';
                    mpc.fillRect(j * 40, i * 40, 40, 40);
                }else if(this.stadium[i][j] == 5 || this.stadium[i][j] == 4) {
                    mpc.fillStyle = 'orange';
                    mpc.fillRect(j * 40, i * 40, 40, 40);
                }else if(this.stadium[i][j] == 10) {
                    mpc.fillStyle = 'red';
                    mpc.fillRect(j * 40, i * 40, 40, 40);
                }else if(this.stadium[i][j] == 11) {
                    mpc.fillStyle = 'blue';
                    mpc.fillRect(j * 40, i * 40, 40, 40);
                }else if(this.stadium[i][j] == 14) {
                    mpc.fillStyle = 'white';
                    mpc.fillRect(j * 40, i * 40, 40, 40);  
                  
                }
            }
        }
        }
                    
                    
    }


    tileset.src = '../resources/tileset.jpg';