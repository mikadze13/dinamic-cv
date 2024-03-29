import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { Router , ParamMap, ActivatedRoute, NavigationExtras } from '@angular/router';
import { asapScheduler } from 'rxjs';
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
  imageUrl!:string
  imgAddres:any
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
      yourFullName:new FormControl('',Validators.required),
      Age:new FormControl('',[Validators.required]),
      AboutMe:new FormControl('', [Validators.required]),
      Url:new FormControl('',[Validators.required]),
      Address:new FormControl('',[Validators.required]),
      phoneNumber:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.email]),
      companyName: new FormControl('',[Validators.required]),
      companyWorkDescription: new FormControl('',[Validators.required]),
      workExps: this.fBuilder.array([])
    }) 
  }
  
  // required input
  get yourFullName(){ 
    // return this.jobForm.value.jobs[0].get('yourFullName')
    // return this.jobForm.value.get('yourFullName')
    return this.jobForm.get('yourFullName')  
  }
  get Age(){
    // return this.jobForm.value.jobs[0].get('yourFullName')
    return this.jobForm.get('Age') 
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
    // const queryParams:any ={}
    // queryParams.myArray = JSON.stringify(this.jobForm.value.jobs[0].workExps[0])
    

    // Navigate to component B
    // const NavigationExtras:NavigationExtras = {
    //   queryParams
    // }
    // const workexpArray=this.jobForm.value.jobs[0].workExps[0].workExps[0]
    this.router.navigate(['/cvprofile'],{queryParams:{
      name:this.jobForm.value.jobs[0].yourFullName,
      age:this.jobForm.value.jobs[0].Age,
      address:this.jobForm.value.jobs[0].Address,
      aboutme:this.jobForm.value.jobs[0].AboutMe,
      PhotoUrl:this.imgAddres,
      phoneNumber:this.jobForm.value.jobs[0].phoneNumber,
      email:this.jobForm.value.jobs[0].email,
      companyName:this.jobForm.value.jobs[0].companyName,
      companyWorkDescription:this.jobForm.value.jobs[0].companyWorkDescription,

      // workExps:JSON.stringify(this.jobForm.value.jobs[0].workExps[0].workExps[0])
      // workExps:...workexpArray
      // myArray:this.jobForm.value.jobs[0].workExps[0]
      // position:this.jobForm.value.jobs[0].workExps[0].position,
      // startDate:this.jobForm.value.jobs[0].workExps[0].startAt,
      // endDate:this.jobForm.value.jobs[0].workExps[0].endAt 
     }})   
    console.log(this.router) 
    console.log(this.SendInfo , this.jobForm.value)
    this.jobForm.reset()
  }
  
  onFileSelected(event:any){
    this.selectedFile = <File>event.target.files[0];
  }
  onUpload(){
    const reader = new FileReader()
    // const fd = new FormData();
    reader.readAsDataURL(this.selectedFile);
   this.imgAddres = reader.onload = () =>{
      this.imageUrl = reader.result as string;
      // this.router.navigate(['/cvprofile'],{state:{imageUrl:this.imageUrl}})
    }
    // fd.append('image',this.selectedFile, this.selectedFile.name)
 
  }


  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
    this.router.navigate(['/auth'])
  }



}
