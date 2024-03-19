class uber{
    constructor(distance,picklocation,dropLocation){
        this.distance = distance;
        //this.time = time;
        this.picklocation=picklocation;
        this.dropLocation= dropLocation;
    }
    time(){
        var getTime= new Date()
        var hrs = getTime.getHours()
        var min = getHrs.getMinutes(); 
        var time=`${hrs}:${min}`;
        return time


    }
    rate(){
        if (this.time == "9:00"||this.time == "10:00"||this.distance<10){
            return this.distance*5;
        }else if(this.distance>10){
            return this.distance*2;

        }
        else if(this.distance==0){
            return `error`

        }
    }
    display(){
        console.log(`Hi Your ride from ${this.picklocation} to ${this.dropLocation} is confirmed you have to pay  ${this.rate()}Rs for the journey.`) 
    }
}
const booking = new uber(25,'shollinganallur','tambaram')
booking.display()
