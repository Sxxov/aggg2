import { ShapedArrayStore } from '../../blocks/store/stores/ShapedArrayStore';
import { AlertComponent } from '../components/ui/AlertComponent';
import { InteractivePropEntity } from '../entities/InteractivePropEntity';
import { NullSprite } from '../sprite/NullSprite';
import { PlaceholderSprite } from '../sprite/PlaceholderSprite';
import type { TPositionStore } from '../types/TPositionStore';
import { StainedPenOnFloor } from './StainedPenOnFloor';

export class CrumpledPapersOnFloor extends InteractivePropEntity.for(
	new PlaceholderSprite(),
	new NullSprite(),
	[2, 2],
	{
		heading: 'ANGRY CHARLES FACE ;/',
		message: 'Charles keeps writing, frantically',
		options: ['Hm...'],
		sprite: new PlaceholderSprite(),
	},
) {
	public override position: TPositionStore = new ShapedArrayStore([6, 6]);

	protected override async onUnconsumedInteraction() {
		await this.component(AlertComponent)!.alert(
			'Paper Waste!',
			'You find a lot of essays written by Charles on the floor,You read one of the essays, it is eerily detailed. You throw it back into the pile, he sees you doing that & seems slightly agitated this time',
		);
		this.round.next?.entityPool.push(new StainedPenOnFloor(this.round));
	}
}
