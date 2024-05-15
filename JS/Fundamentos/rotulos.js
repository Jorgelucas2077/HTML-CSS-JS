var num1 = 0;
var num2 = 0;

repeticao1:
while(num1 < 10) {
console.log('iterando A');
 num1++;
while (num2 < 100);
{  
console.log('iterando B');
num2++;
if (num2 % 10 == 0)
{
    continue repeticao1;
}
}
}