const players = [
  { name: "Aman", score: 320 },
  { name: "Riya", score: 410 },
  { name: "Kabir", score: 410 },
  { name: "Arjun", score: 250 },
  { name: "Sneha", score: 320 }
];

players.sort((a,b)=>b.score-a.score)
for(let i=0;i<players.length;i++)
{
    if (i==0){
        players[i].rank=1
    }   
    else if (players[i].score === players[i - 1].score) {
        players[i].rank = players[i - 1].rank;
    }
    else{
        players[i].rank=i+1;
    }
    console.log(players[i]);
}
