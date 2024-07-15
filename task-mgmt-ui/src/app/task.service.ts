import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getTask(id: number): Observable<any> {
    return this.http.get(this.baseUrl+'/task/'+id);
  }

  createTask(task: Object): Observable<Object> {
    return this.http.post(this.baseUrl+'/task/', task);
  }

  updateTask(task: Object): Observable<Object> {
    return this.http.put(this.baseUrl+'/task/', task);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(this.baseUrl+'/task'+id);
  }

  getTasksList(): Observable<any> {
    return this.http.get(this.baseUrl+'/tasks/');
  }

}