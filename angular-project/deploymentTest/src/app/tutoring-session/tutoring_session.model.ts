export class Session {



  location:string

  date:Date


  studentName:string

  subject:string

  sessionDetail:string

  studentRequirement:string

  expectDuration:number

  teachingMethod:string

  report:string



  actualDuration:number



  state:string




  public constructor(location:string, date:Date, studentName:string, subject:string, sessionDetail:string, expectDuration:number, teachingMethod:string, report:string, actualDuration:number, state:string, studentRequirement:string){

    this.location=location
    this.date=date

    this.studentName=studentName
    this.subject=subject

    this.sessionDetail=sessionDetail
    this.studentRequirement=studentRequirement

    this.expectDuration=expectDuration
    this.teachingMethod=teachingMethod

    this.report=report
    this.actualDuration=actualDuration

    this.state=state
  }
}
