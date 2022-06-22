import { ShapedArrayStore } from '../../blocks/store/stores/ShapedArrayStore';
import { AlertComponent } from '../components/ui/AlertComponent';
import { InteractivePropEntity } from '../entities/InteractivePropEntity';
import { NullSprite } from '../sprite/NullSprite';
import { PlaceholderSprite } from '../sprite/PlaceholderSprite';
import type { TPositionStore } from '../types/TPositionStore';
import { SlatheredPenOnFloor } from './SlatheredPenOnFloor';

export class StainedPenOnFloor extends InteractivePropEntity.for(
	new PlaceholderSprite(),
	new NullSprite(),
	[2, 2],
	{
		heading: 'WHERE IS IT',
		message:
			'Charles can’t find the black pen, he writes in blue ink from now',
		options: ['ok'],
		sprite: new PlaceholderSprite(),
	},
) {
	public override position: TPositionStore = new ShapedArrayStore([6, 6]);

	protected override async onUnconsumedInteraction() {
		await this.component(AlertComponent)!.alert(
			'Red Colored Paper! But is it though?',
			'You find a red-stained pen on the floor,You pick it up & try writing with it. You find out the ink is black, & put it back down on the floor',
		);
		this.round.next?.entityPool.push(new SlatheredPenOnFloor(this.round));
	}
}
