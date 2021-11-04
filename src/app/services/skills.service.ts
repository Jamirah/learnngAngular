import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';
import { Level } from '../types/level';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  skills: Skill[] = [
    {
      id: 0,
      name: 'Intrapersonal and Empotional Intelligence ',
      level: Level.Expert,
    },
    {
      id: 1,
      name: 'Philosophy',
      level: Level.Advance,
    },
    {
      id: 2,
      name: 'Developing Software',
      level: Level.Intermediate,
    },
  ];

  constructor() {}
}
