import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Router , ParamMap, ActivatedRoute, NavigationExtras } from '@angular/router';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-cvmaker',
  templateUrl: './cvmaker.component.html',
  styleUrls: ['./cvmaker.component.css']
})
export class CvmakerComponent {
  jobForm!: FormGroup;
  show:boolean=false;
  selectedFile!:File;
  @Output() isLogout = new EventEmitter<void>()
  @Output()  SendInfo:EventEmitter<any> = new EventEmitter()
  // Form initialization
  constructor(private fBuilder: FormBuilder, private router:Router,public firebaseService:FirebaseService) {
    this.jobForm = this.fBuilder.group({
      jobs: this.fBuilder.array([])
    })
  }
   


  // getJobs() function returns the jobs array
  getjobs(): FormArray {
    return this.jobForm.get('jobs') as FormArray
  }
  // newJob() function returns new template that allows to add a new job
  newJob(): FormGroup {
    return this.fBuilder.group({ 
      yourFullName:'',
      Age:'',
      phoneNumber:'',
      email:'',
      companyName: '',
      companyWorkDescription: '',
      workExps: this.fBuilder.array([])
    })
  }
  // getWorkExps()function returns already added job index 
  getWorkExps(jobIndex: number): FormArray {
    return this.getjobs().at(jobIndex).get('workExps') as FormArray
  }
  //newWorkExp()   function returns new template that allows to add a new experience
  newWorkExp(): FormGroup {
    return this.fBuilder.group({
      position: '',
      startAt: '',
      endAt: ''
    })
  }
  // brings existing arrays from getJobs() and adds in newJobs
  addNewJob() {
    this.getjobs().push(this.newJob())
    this.show=true
  }
  // remove job funciton
  deleteJob(JobIndex:number){
    this.getjobs().removeAt(JobIndex)
    this.show=false
  }

  // add new experience
  addNewWorkExp(jobIndex:number){
    this.getWorkExps(jobIndex).push(this.newWorkExp())
  }
  // remove job experience
  deleteJobExp(jobIndex:number,expIndex:number){
    this.getWorkExps(jobIndex).removeAt(expIndex)
  }

  // send Photo in firebase 
  // button that prints final array
  onFormSubmit(){  
    console.log(this.jobForm.value)
     this.router.navigate(['/cvprofile'],{queryParams:{
      name:this.jobForm.value.jobs[0].yourFullName,
      age:this.jobForm.value.jobs[0].Age,
      phoneNumber:this.jobForm.value.jobs[0].phoneNumber,
      email:this.jobForm.value.jobs[0].email,
      companyName:this.jobForm.value.jobs[0].companyName,
      companyWorkDescription:this.jobForm.value.jobs[0].companyWorkDescription,
      // position:this.jobForm.value.jobs[0].workExps[0].position,
      // startDate:this.jobForm.value.jobs[0].workExps[0].startAt,
      // endDate:this.jobForm.value.jobs[0].workExps[0].endAt
      
     }})
    // this.router.queryParams.subscribe(params =>{
    //   this.jobForm.value.yourFullName = params['name'];
    //   this.jobForm.value.Age = params['age'];
      
    // })
    // this.router.snapshot.paramMap.get()
    console.log(this.router)
    // this.router
    console.log(this.SendInfo , this.jobForm.value)
    this.jobForm.reset()
  }
  
  onFileSelected(event:any){
    this.selectedFile = <File>event.target.files[0];
  }
  onUpload(){
    const fd = new FormData();
    fd.append('image',this.selectedFile, this.selectedFile.name)
 
  }


  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
  }



}
