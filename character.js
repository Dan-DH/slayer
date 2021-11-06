//Use this script to generate your character
export class Clase {
    constructor(clase, weapon, name, player) {
        this.clase = clase;
        this.weapon = weapon;
        this.name = name;
        this.player = player;
        //Basic stats
        this.currentHealth = 0;
        this.maxHealth = 0;
        this.damage = 0;
        this.precision = 0;
        this.crit = 0;
        this.dodge = 0;
        this.deflect = 0;
        //Extra mile stats
        this.DmgInflicted = 0;
        this.DmgTaken = 0;
        this.DmgHealed = 0;
        //Char functions
/*         this.attack = function(){};
        this.heal = function(){};
        this.surrender = function(){}; */
    }
}