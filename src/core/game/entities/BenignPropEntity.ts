import { StaticSpriteComponent } from '../components/sprites/StaticSpriteComponent';
import type { AbstractSprite } from '../sprite/AbstractSprite';
import type { TCellSize } from '../types/TCellSize';
import { AbstractEntity } from './AbstractEntity';

export abstract class BenignPropEntity extends AbstractEntity {
	public static for(sprite: AbstractSprite, size: TCellSize) {
		return class extends BenignPropEntity {
			public static override readonly Components = [
				StaticSpriteComponent.for(sprite, size),
			] as const;
		};
	}
}
