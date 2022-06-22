import { ShapedArrayStore } from '../../blocks/store/stores/ShapedArrayStore';
import { AlertComponent } from '../components/ui/AlertComponent';
import { InteractivePropEntity } from '../entities/InteractivePropEntity';
import { NullSprite } from '../sprite/NullSprite';
import { PlaceholderSprite } from '../sprite/PlaceholderSprite';
import type { TPositionStore } from '../types/TPositionStore';
import { CrumpledPaperOnFloor } from './CrumpledPaperOnFloor';

export class PensAndPaper extends InteractivePropEntity.for(
	new PlaceholderSprite(),
	new NullSprite(),
	[2, 2],
	{
		heading: 'Tick!',
		message:
			'Charles does not really like how the essay turned out, so he throws the essay away',
		options: ['ok'],
		sprite: new PlaceholderSprite(),
	},
) {
	public override position: TPositionStore = new ShapedArrayStore([6, 6]);

	protected override async onUnconsumedInteraction() {
		await this.component(AlertComponent)!.alert(
			'Tick!',
			'You invite Charles into a game of writing competition about video game violence in real-life and he accepts your challenge',
		);
		this.round.next?.entityPool.push(new CrumpledPaperOnFloor(this.round));
	}
}
