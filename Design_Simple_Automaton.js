function Automaton()
{
   this.states = [];
}

Automaton.prototype.readCommands = function(commands)
{
  this.state = this.states[0];
  for(let i = 0; i<commands.length; i++){
    if(commands[i].indexOf(" ")!=-1||isNaN(commands[i])){return false;}
    if(this.state === this.states[0]){
      if(Number(commands[i])===1){
        this.state = this.states[1];
      }
      if(Number(commands[i])===0){
        continue;
      }
    }
  if(this.state === this.states[1]){
      if(Number(commands[i])===1){
        continue;
      }
      if(Number(commands[i])===0){
        this.state = this.states[2];
        continue;}
    }
     if(this.state === this.states[2]){
      if(Number(commands[i])===1 || Number(commands[i])===1 ){
        this.state = this.states[1];}
    }
  }
  if(this.state === "q2"){return true;}
      else{return false;}
  // Return true if we end in our accept state, false otherwise.
}

var myAutomaton = new Automaton();
myAutomaton.states = ["q1", "q2", "q3"];
console.log(myAutomaton.readCommands(["1"])=== true);
console.log(myAutomaton.readCommands(["1", "0", "0", "1"])=== true);
console.log(myAutomaton.readCommands(["1", "1", "1", "1"])=== true);
console.log(myAutomaton.readCommands(["1", "1", "1", "0"])=== false);
console.log(myAutomaton.readCommands(["1", "1", "0"])=== false);
console.log(myAutomaton.readCommands(["0", "0", "0", "0"])=== false);
console.log(myAutomaton.readCommands(["1", "0", "1"])=== true);
console.log(myAutomaton.readCommands([" 1", "0", "1"])=== false);
console.log(myAutomaton.readCommands(["a-1", "0", "1"])=== false);
console.log(myAutomaton.readCommands([" 1", "!", "1"])=== false);



