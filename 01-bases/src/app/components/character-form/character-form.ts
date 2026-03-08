import { Component } from '@angular/core';

@Component({
  selector: 'app-character-form',
  imports: [],
  templateUrl: './character-form.html',
})
export class CharacterForm {
  name: any;
  handleInputName: any;
  handleInputPower: any;
  power: any;
  handleAddCharacter: any;
}
