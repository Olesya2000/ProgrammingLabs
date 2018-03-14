snail = function(array) {
if(array[0][0] ===undefined){
return [];
}
else{
 let answerArray = [];
 let n = array.length;
 let i=1,j,k,p=Math.floor(n/2);
 for(k=1;k<=p;k++)
 {
 for (j=k-1;j<n-k+1;j++) answerArray.push(array[k-1][j]);//запис значень верхнього рядка 
 for (j=k;j<n-k+1;j++) answerArray.push(array[j][n-k]);//запис значень правого вертикального стовпчика
 for (j=n-k-1;j>=k-1;--j) answerArray.push(array[n-k][j])//запис значень нижнього рядка 
 for (j=n-k-1;j>=k;j--) answerArray.push(array[j][k-1]);//запис значень лівого сповпчика
 }
 if (n%2==1) answerArray.push(array[p][p]);
 return answerArray; 
 }
}