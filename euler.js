alert("Load euler.js");
a=3;
b=5;
num=1000;
c=0;
d=0;
sum=0;
for(i=1;i<num;i++)
{
    if(i%a==0)
    {
        c=c+i;
    }
    if(i%b==0)
    {
        d=d+i;
    }
}
sum=c+d;
alert(sum);










