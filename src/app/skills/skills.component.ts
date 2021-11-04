import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/skill';
import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[];

  constructor(private skillsService: SkillsService) {
    this.skills = skillsService.skills;
  }

  ngOnInit(): void {}
}
