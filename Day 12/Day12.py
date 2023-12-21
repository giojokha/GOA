#davaleba 1
def check_triangle(a,b,c):
    if a+b>c and a + c > b and b + c>a:
        print("This triangle is valid")
    else:
        print("This triangle is invalid")


check_triangle(7,5,5)



#davaleba 2

def split_string(names_list):
    names = names_list.split()
    print(names)
names = "Kaxa Tamuna Ana"
split_string(names)
    