import { ShapedArrayStore } from '../../blocks/store/stores/ShapedArrayStore';
import { AlertComponent } from '../components/ui/AlertComponent';
import { InteractivePropEntity } from '../entities/InteractivePropEntity';
import { NullSprite } from '../sprite/NullSprite';
import { PlaceholderSprite } from '../sprite/PlaceholderSprite';
import type { TPositionStore } from '../types/TPositionStore';
import { AnotherCrumpledPaper } from './AnotherCrumpledPaper';

export class CrumpledPaperOnFloor extends InteractivePropEntity.for(
	new PlaceholderSprite(),
	new NullSprite(),
	[2, 2],
	{
		heading: 'Re-Tick!',
		message: 'Charles appreciates the compliment, & decides to write more',
		options: ['Natural Writer'],
		sprite: new PlaceholderSprite(),
	},
) {
	public override position: TPositionStore = new ShapedArrayStore([6, 6]);

	protected override async onUnconsumedInteraction() {
		await this.component(AlertComponent)!.alert(
			'WORLD’ BEST DETECTIVE',
			'You find the essay written by Charles on the floor, after reading it you find it very detailed and compliment Charles about it.',
		);
		this.round.next?.entityPool.push(new AnotherCrumpledPaper(this.round));
	}
}
