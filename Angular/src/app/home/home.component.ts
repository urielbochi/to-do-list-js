import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor() {
    let recoverData = localStorage.getItem("tasks")

    if (recoverData) {
      this.tasks = JSON.parse(recoverData)
    }
  }
  userInput: string = ""
  tasks: string[] = [];
  selected: boolean = false

  ngOnInit(): void {}
  addTask() {
    this.tasks.push(this.userInput)
  }
  saveTask(){
    localStorage.setItem("tasks", JSON.stringify(this.tasks))
  }
  removeAllTasks() {
    this.tasks = []
    localStorage.removeItem("tasks")
  }
  removeSelectedTask(index:number){
    this.tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(this.tasks))
  }
}
