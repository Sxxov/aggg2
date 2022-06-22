import { ShapedArrayStore } from '../../blocks/store/stores/ShapedArrayStore';
import { AlertComponent } from '../components/ui/AlertComponent';
import { InteractivePropEntity } from '../entities/InteractivePropEntity';
import { NullSprite } from '../sprite/NullSprite';
import { PlaceholderSprite } from '../sprite/PlaceholderSprite';
import type { TPositionStore } from '../types/TPositionStore';
import { YourOwnPen } from './YourOwnPen';

export class HyperventilatingCharles extends InteractivePropEntity.for(
	new PlaceholderSprite(),
	new NullSprite(),
	[2, 2],
	{
		heading: '[UNREACHABLE]',
		message: '[UNAVAILABLE]',
		options: ['ok'],
		sprite: new PlaceholderSprite(),
	},
) {
	public override position: TPositionStore = new ShapedArrayStore([6, 6]);

	protected override async onUnconsumedInteraction() {
		await this.component(AlertComponent)!.alert(
			'Who is that?',
			'You see Charles hyperventilating in the corner of the classroom, & decide to console him,He says you don’t understand, it was his only way to quench the voices in his mind, & he’s not sure if he can continue like this',
		);
		this.round.next?.entityPool.push(new YourOwnPen(this.round));
	}
}
