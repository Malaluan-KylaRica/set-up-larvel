import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';
import { Employee } from './employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  employees:any;
  employee = new Employee();

  constructor (private dataService:DataService){}

  ngOnInit(): void {
    this.getEmployeesData();
  }

  getEmployeesData(){
    this.dataService.getData().subscribe(res => {
      this.employees = res;
    })
  }

  insertData(){
   this.dataService.insertData(this.employee).subscribe(res => {
    this.getEmployeesData();
   })
  }

  deleteData(id){
    this.dataService.deleteData(id).subscribe(res => {
      this.getEmployeesData();
    })
  }


  
}
