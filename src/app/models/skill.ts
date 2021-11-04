import {Level} from "../types/level"
export class Skill {

    id: number;
  name: string;
  level!: Level;

  constructor(id: number, name: string, level: Level) {
    this.id = id;
    this.name = name;
    this.level= level 
  }
}
