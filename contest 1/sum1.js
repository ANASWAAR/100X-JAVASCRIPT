let d=[
    [1,2,3],[3,4,5]
]
let ans = []
for (let i=0;i<d.length;i++) {
    let total=0;
    for (let j=0;j<d[i].length; j++) {
        total=total+d[i][j];
    }
    if(total>0){
        ans.push(total)
    }
    else
        ans.push(0)
}
console.log(ans);

