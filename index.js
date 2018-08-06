class Dog {
    
    constructor(name){
        this.name=name;
    }
    speak(){
        var a;
        a='woof';
        return a;
    }
    print(){
        console.log(this.speak());
    }
    
}

class Labrador extends Dog{

    constructor(name,color,Bodywieght){
        super(name);
        this.color=color;
        this.Bodywieght=Bodywieght;
        

    }

    //method is overrideen
    speak(){
        var a;
        a='Labrador says WOOF';
        return a;


    }


}

let Lab=new Labrador('red',10);
Lab.print();