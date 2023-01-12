import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../models/Skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

    url:String = "http://localhost:8080/api/";
    constructor(private http:HttpClient) {
    }
  
    createSkill(skill:Skill){
      return this.http.post<any>(this.url + "create/skill", skill);
    }
  
    viewSkill():Observable<Skill[]>{
      return this.http.get<Skill[]>(this.url + "view/skill");
    }
  
    deleteSkill(id:number){
      return this.http.delete<any>(this.url + "delete/skill/" + id);
    }
  
    editSkill(skill:Skill, id:number){
      console.log(skill)
      return this.http.put<any>(this.url + "edit/skill/" + id, skill)
    }
  
}
