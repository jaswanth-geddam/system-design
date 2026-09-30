

//learning builder pattern basic example
class user{
    constructor(
        public name: string, 
        public email: string,
        public age?: number
    ){}
}
export class userBuilder{
    public name!: string;
    public email!: string;
    public age?: number;

    setName(name: string){
        this.name = name;
        return this;
    }
    setEmail(email: string){
        this.email = email;
        return this;
    }
    setAge(age: number){
        this.age = age;
        return this;
    }
    build(){
        return new user(this.name,this.email,this.age);
    }
}

const user1 = new userBuilder()
    .setName("John Doe")
    .setEmail("john.doe@example.com")
    .build();
console.log(user1);

// learning builder pattern advance example
class Booking {
  constructor(
    public userId: string,
    public courtId: string,
    public date: string,
    public startTime: string,
    public endTime: string,
    public players: number,
    public paymentStatus?: string,
    public notes?: string
  ) {}
}
export class BookingBuilder {
  private userId!: string;
  private courtId!: string;
  private date!: string;
  private startTime!: string;
  private endTime!: string;
  private players!: number;
  private paymentStatus?: string;
  private notes?: string;
    setUserID(userID:string){
      
        this.userId = userID;
        return this;
    }
     setCourtId(courtId: string) {
    this.courtId = courtId;
    return this;
  }

  setDate(date: string) {
    this.date = date;
    return this;
  }

  setStartTime(startTime: string) {
    this.startTime = startTime;
    return this;
  }

  setEndTime(endTime: string) {
    this.endTime = endTime;
    return this;
  }

  setPlayers(players: number) {
    this.players = players;
    return this;
  }

  setPaymentStatus(paymentStatus: string) {
    this.paymentStatus = paymentStatus;
    return this;
  }

  setNotes(notes: string) {
    this.notes = notes;
    return this;
  }
  build() {
      if(!this.userId) {
            throw new Error("User ID is required");
        }
    return new Booking(
            
      this.userId,
      this.courtId,
      this.date,
      this.startTime,
      this.endTime,
      this.players,
      this.paymentStatus,
      this.notes
    );
  }
}


const booking = new BookingBuilder()
 
  .setCourtId("C10")
  .setDate("2026-09-25")
  .setStartTime("18:00")
  .setEndTime("19:00")
  .setPlayers(4)
  .setPaymentStatus("PAID")
  .setNotes("Need extra racket")
  .build();

console.log(booking);

// assigment