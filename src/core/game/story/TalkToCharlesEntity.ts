import { ShapedArrayStore } from '../../blocks/store/stores/ShapedArrayStore';
import { AlertComponent } from '../components/ui/AlertComponent';
import { InteractivePropEntity } from '../entities/InteractivePropEntity';
import { NullSprite } from '../sprite/NullSprite';
import { PlaceholderSprite } from '../sprite/PlaceholderSprite';
import type { TPositionStore } from '../types/TPositionStore';
// import { TissueEntity } from './TissueEntity';

export class TalkToCharlesEntity extends InteractivePropEntity.for(
	new PlaceholderSprite(),
	new NullSprite(),
	[2, 2],
	{
		heading: 'Look at Charles in the eyes.',
		message:
			'You try to talk to Charles as he looks out the window',
		options: ['ok'],
		sprite: new PlaceholderSprite(),
	},
) {
	public override position: TPositionStore = new ShapedArrayStore([5, 7]);

	protected override async onUnconsumedInteraction() {
		await this.component(AlertComponent)!.alert(
			'Ehe',
			'He turns to you & spills his drink on himself',
		);

		// this.round.next?.entityPool.push(new TissueEntity(this.round));
	}
}
