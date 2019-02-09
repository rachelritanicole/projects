let con = document.getElementById("Results");
let score = document.getElementById("Scoreboard");
let score_usr = 0;
let score_npc = 0;

const list_name = ["Rock","Paper","Scissors","Lizard","Spock"];
const list_wins = [0b00110, 0b10001, 0b01010, 0b01001, 0b10100];

document.querySelectorAll("button").forEach(b => {
    b.addEventListener("click", () => {
        RPSLS(list_name.indexOf(b.textContent));
    });
});

//                R  P  C  L  S
const keycodes = [82,80,67,76,83];
window.addEventListener("keydown", k => {
    let n = keycodes.indexOf(k.keyCode);
    if(n>=0) RPSLS(n);
});


let RPSLS = function(usr) {
    let npc = Math.floor(Math.random() * 5);

    if(usr === npc) {
        con.textContent = "Draw! Both sides chose " + list_name[usr] + "!";
        return;
    }

    if(list_wins[usr] & (16 >> npc)) {
        con.textContent = "You Win! "
                        + list_name[usr]
                        + " beats " + list_name[npc] + "!";
        score_usr++;
    } else {
        con.textContent = "You Lose! "
                        + list_name[usr]
                        + " is beaten by " + list_name[npc] + "!";
        score_npc++;
    }

    score.innerHTML = "Score:<br />Player: " + score_usr.toString() 
                    + " NPC: " + score_npc.toString();
}