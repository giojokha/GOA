def exclamation(word):
    if word == "spam":
      print(word)
    elif word == "maristvis":
       print(word + " <3")
    else:
      print(word + "!")


exclamation("spam")
exclamation("nikastvis")
exclamation("maristvis")


def family_members_infos(name, age):
   print(name + " არის " + age + " წლის ")


family_members_infos("Gio ", str( 15 ))
family_members_infos("Tamuna ", str( 16 ))
family_members_infos("Kaxa ", str( 17 ))



def my_sum(x,y):   #იქმნება ფუნქცია და გადავეცით მას ორი პარამეტრი
   return x+y #აბრუნებს გამოთვლილ მნიშვნელობას და ინახავს მეხსიერებაში
 #რეთურნი შესრულებისას ის ასრულებს ფუნქციის სიცოცხლეს

my_sum(5,8)
print(my_sum(5,8))



