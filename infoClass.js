class info{
    constructor(Sfirstname,Ssecondname,Sage,Sheight,Sweight){
        this.Fname=Sfirstname;
        this.Sname=Ssecondname;
        this.Age=Sage;
        this.Height=Sheight;
        this.Weight=Sweight;
    }
    name(){
        return  `${this.Fname} ${this.Sname}`;
    }
    BMI() {
        const heightInMeters = this.Height / 100; // Height in meters
        const weightInKilograms = this.Weight;     // Weight in kilog
        const heightInmeterSquare=heightInMeters**2;
        let bmiValue = (weightInKilograms / heightInmeterSquare);
        return  (bmiValue);
    }
    display(){
        console.log(`Hi ${this.name()} your height is ${this.Height} and ur weight is ${this.Weight} also your BMI value is ${this.BMI()}`)
    }
}
let details =new info("Ram","Kumar",35,180,70)
details.display();