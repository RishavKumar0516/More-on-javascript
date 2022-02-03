class Employee {
    constructor(givenname, givenexperience, givendivision){/* this is a constructor */
        this.name = givenname;
        this.experience = givenexperience;
        this.dividion = givendivision;
    }
    slogon(){
        return `I am ${this.name} and this company woks for my country`;
    }
    joiningYear(){
        return 2021 - this.experience;
    }
    static add(a,b){
        return a+b;
    }
}
/* if you wnat to use the methods and properties of the class then you have to create object of those classes to use them. */
harry = new Employee("Rishav", "10", "division");
console.log(harry);
console.log(harry.slogon());
console.log(harry.joiningYear());
/* we can also use the class methods without using the object */
console.log(Employee.add(34, 56));


/* Inheritence: these helps you to create a template from another ones. */

/* constructor is a type of function which runs when object is created. and when the object is created, super() function gets called. these super function calls the constructor from which the programmer class inherited.  */

/* using inheritence we have created another class which has all the properties of employee class, but also has some new members */
class programmer extends Employee{
     constructor(givenname, givenexperience, givendivision, language, github){
         super(givenname, givenexperience, givendivision);
         this.language = language;
         this.github = github;
     }

        favouriteLanguage(){
         if(this.language == 'python'){
             return "python";
         }else{
             return 'c++';
         }
     }

     static multiply(a, b){/* whenever we use static we not use this inside the function because static function can directly accessable. */
         return a*b;
     }
}

rohan = new programmer("rohan", 3, "lays", "go", "rohan420")
console.log(rohan);
console.log(rohan.favouriteLanguage());
console.log(programmer.multiply(6, 5));

