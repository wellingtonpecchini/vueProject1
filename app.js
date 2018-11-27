new Vue({
    el: '#app',
    data: {
        playerHealth : 100,
        monsterHealth: 100,
        gameIsRunning: false, 
        turns: []
        
        
    },
    methods: {
        startGame: function(){
            this.gameIsRunning= true;
            this.playerHealth = 100;
            this.monsterHealth= 100;
        },
        attack: function(){
            damagePlayer = this.calculateDamage(10, 3);
            this.monsterHealth -= damagePlayer;
            if(this.checkWin()){
                return;
            }
            damageMoster = this.calculateDamage(15, 5);
            this.playerHealth -= damageMoster;

            if(this.monsterHealth <= 0){
                this.monsterHealth = 0;
            } 
            if(this.playerHealth <= 0){
                this.playerHealth = 0;
            }
            this.turnsHits(damagePlayer,damageMoster );
            this.checkWin();  
        },

        specialAttack: function(){
            damagePlayer = this.calculateDamage(25, 10);
            this.monsterHealth -= damagePlayer;

            if(this.checkWin()){
                return;
            }
            damageMoster = this.calculateDamage(25, 10);
            this.playerHealth -= damageMoster;

            if(this.monsterHealth <= 0){
                this.monsterHealth = 0;
            }if (this.playerHealth <= 0){
                this.playerHealth = 0;
            }
            this.turnsHits(damagePlayer,damageMoster );
            this.checkWin();
            

        },
        heal: function(){
            let heal = 5;
            this.playerHealth += heal;
            if(this.playerHealth >= 100){
                this.playerHealth = 100;
            }
        },
        giveUp: function(){
            if(confirm('Are you sure?')){
                this.gameIsRunning = false;
                this.monsterHealth = 100;
                this.playerHealth = 100;
                this.turns = [];
            }           
        },

        turnsHits: function(player, monster){
            this.turns.unshift({
                isPlayer:  true,
                text:'player hits normal attack monster' + player
            });
            this.turns.unshift({
                isPlayer:  false,
                text:'monster hits normal attack monster' + monster
            })
        },

        calculateDamage: function(max, min){
            return Math.floor((Math.random()*max) + 1, min);
        },
        checkWin: function(){

            if(this.monsterHealth ==0 ){
                if(confirm('You Won! Start again?')){
                    this.turns = [];
                    this.startGame();
                    
                } else {
                    this.turns = [];
                    this.gameIsRunning = false;
                }
                return true;
            } else if(this.playerHealth ==0 ){
                
                if(confirm('You Lose! Start again?')){
                    this.turns = [];
                    this.startGame();
                    
                } else {
                    this.turns = [];
                    this.gameIsRunning = false;
                    
                }
                return true;
            }
            return false;
        }
    }    
});