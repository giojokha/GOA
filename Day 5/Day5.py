#Day 5 Homework
student_score1 = float(input("enter score Number1: ")) 
student_score2 = float(input("enter score Number2: "))
student_score3 = float(input("enter score Number3: "))
student_score4 = float(input("enter score Number4: "))

avg_score = (student_score1 + student_score2 + student_score3 + student_score4) / 4

if avg_score>=9 and avg_score<=10:
    print("გილოცავ, მატრიცელო. შენი ქულაა: " + str(avg_score) + " შენ გადმოგეცა 300 ლარიანი ბანძი ტოსტერი, რასაც შეალიე შენი ცხოვრების წლები")
elif avg_score <=5 and avg_score >= 0:
    print("შენი ქულაა: " + str(avg_score) + " გილოცავ გაექეცი მატრიცას")
elif avg_score >5 and avg_score <9:
    print("შენი ქულაა: " + str(avg_score) + " YOU ARE MID")
else:
    print("შენი ქულაა: " + str(avg_score) + " there is something wrong with you")