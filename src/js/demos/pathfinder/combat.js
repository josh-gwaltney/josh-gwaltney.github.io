class Combat {
    constructor(){
        this.running = false;
        this.round = 0;
        this.combatants = [];
    }

    addCombatant(val){
        this.combatants.push(val);
    }

    nextRound(){
        this.round++;
    }

}
