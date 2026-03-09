import { Component, inject, signal } from '@angular/core';

import { AppCard } from '@app/components/ui/card/card';
import { CharacterList } from '@app/components/character-list/character-list';
import { CharacterForm } from '@app/components/character-form/character-form';
import { DragonballService } from '@app/services/dragonball/dragonball';

@Component({
  selector: 'app-dragonball-page',
  imports: [AppCard, CharacterList, CharacterForm],
  templateUrl: './dragonball-page.html',
})
export class DragonballPage {
  readonly dragonballService = inject(DragonballService);
}
