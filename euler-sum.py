print("this is a program in python")
num1=int(input("enter the first number:"))
num2=int(input("enter the second number:"))
limit=int(input("enter the limit:"))
sum=0

for i in range (1,limit):
    if i%num1 == 0 and i%num2 == 0:
        sum=sum+i

print("the sum is : ",sum)