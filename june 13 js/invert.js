const branchStudents = {
  CSE: ["Aman", "Riya"],
  ECE: ["Kabir"],
  ME: ["Arjun", "Sneha"]
};
let a={};
for(const branch in branchStudents){
    for(const students of branchStudents[branch]){
        a[students] = branch;
    }
}
console.log(a);