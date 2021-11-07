first_num = int(input("First Number: "))
calculation = input("Addifier: ")
second_num = int(input("Second Number: "))
answer = int
if calculation == "+":
    answer = first_num + second_num
elif calculation == "-":
    answer = first_num - second_num
elif calculation == "*":
    answer = first_num * second_num
elif calculation == "/":
    answer = first_num / second_num

print(answer)