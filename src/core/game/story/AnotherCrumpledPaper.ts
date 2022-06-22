import { ShapedArrayStore } from '../../blocks/store/stores/ShapedArrayStore';
import { AlertComponent } from '../components/ui/AlertComponent';
import { InteractivePropEntity } from '../entities/InteractivePropEntity';
import { NullSprite } from '../sprite/NullSprite';
import { PlaceholderSprite } from '../sprite/PlaceholderSprite';
import type { TPositionStore } from '../types/TPositionStore';
import { CrumpledPapersOnFloor } from './CrumpledPapersOnFloor';

export class AnotherCrumpledPaper extends InteractivePropEntity.for(
	new PlaceholderSprite(),
	new NullSprite(),
	[2, 2],
	{
		heading: 'HAPPY CHARLES FACE :) ',
		message:
			'Charles appreciates the compliment, & decides to write even more',
		options: ['Hm...'],
		sprite: new PlaceholderSprite(),
	},
) {
	public override position: TPositionStore = new ShapedArrayStore([6, 6]);

	protected override async onUnconsumedInteraction() {
		await this.component(AlertComponent)!.alert(
			'WHO THROWS TRASH HERE?',
			'You find another essay written by Charles on the floor and read it again, it is a really detailed paper about video game violence! Charles is obsessed with this. You compliment him again',
		);
		this.round.next?.entityPool.push(new CrumpledPapersOnFloor(this.round));
	}
}
