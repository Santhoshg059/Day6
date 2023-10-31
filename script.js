//3)person class to hold all details
class Person{
    constructor(name,gender,age){
        this.name=name;
        this.gender=gender;
        this.age=age;
    }
    

}
var obj=new Person("sandy","Male",23);
console.log(obj.name)
console.log(obj.gender)
console.log(obj.age)
//1)Movie questions
class Movie{
    constructor(tittle,studio,rating="PG"){
        this.tittle=tittle;
        this.studio=studio;
        this.rating=rating;
    }
}
var obj1=new Movie("AAA","BBB","CCC")
console.log(`"tittle of the movie ${obj1.tittle} studio - ${obj1.studio} and rating is ${obj1.rating}"`)
var obj2=new Movie("Casino RoyaleA","Eon Productions","PG­13")
console.log(`"tittle of the movie ${obj2.tittle} studio - ${obj2.studio} and rating is ${obj2.rating}"`)
var obj3=new Movie("Casino RoyaleA","Eon Productions")
console.log(`"tittle of the movie ${obj3.tittle} studio - ${obj3.studio} and rating is ${obj3.rating}"`)

//2)
class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    get radiusCircle(){
        return this.radius;
    }
    set radiusCircle(radius){
        this.radius=radius;
    }
    get colorCircle(){
        return this.color;
    }
    set colorCircle(color){
        this.color=color;
    }
    get toString(){
        return`"Circle[radius=${this.radius},color=${this.color}]"`
    }
}
var obj4=new Circle(1.0,"red");
console.log(obj4.radiusCircle);
obj4.radiusCircle=2.2
console.log(obj4.radiusCircle);
console.log(obj4.colorCircle);
console.log(obj4.toString)

//4)write a class to calculate the uber price.
class Uber{
    constructor(amount){
        this.amount=amount;
    }
    set fair(amount){
        this.amount=amount
    }
    get fair(){
        return this.amount*2
    }
}
var obj5=new Uber(400)
console.log(obj5.fair);