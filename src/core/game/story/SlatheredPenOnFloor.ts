import { ShapedArrayStore } from '../../blocks/store/stores/ShapedArrayStore';
import { AlertComponent } from '../components/ui/AlertComponent';
import { InteractivePropEntity } from '../entities/InteractivePropEntity';
import { NullSprite } from '../sprite/NullSprite';
import { PlaceholderSprite } from '../sprite/PlaceholderSprite';
import type { TPositionStore } from '../types/TPositionStore';
import { HyperventilatingCharles } from './HyperventilatingCharles';

export class SlatheredPenOnFloor extends InteractivePropEntity.for(
	new PlaceholderSprite(),
	new NullSprite(),
	[2, 2],
	{
		heading: 'No Pen, No Life :(',
		message: 'Charles doesn’t have any pens now, he is unable to write',
		options: ['Sadge'],
		sprite: new PlaceholderSprite(),
	},
) {
	public override position: TPositionStore = new ShapedArrayStore([6, 6]);

	protected override async onUnconsumedInteraction() {
		await this.component(AlertComponent)!.alert(
			'Spookie!',
			'You find a red-substance-slathered pen on the floor,You don’t dare pick it up, so you kick it a bit, breaking it in the process',
		);
		this.round.next?.entityPool.push(
			new HyperventilatingCharles(this.round),
		);
	}
}
