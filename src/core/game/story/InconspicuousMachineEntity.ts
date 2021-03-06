import machineLone from '../../../assets/img/sprites/machine, lone.png';
import machineWithCrumbs from '../../../assets/img/sprites/machine, w. crumbs.png';
import { AlertComponent } from '../components/ui/AlertComponent';
import { InteractivePropEntity } from '../entities/InteractivePropEntity';
import { Sprite } from '../sprite/Sprite';

export class InconspicuousMachineEntity extends InteractivePropEntity.for(
	new Sprite(machineLone),
	new Sprite(machineWithCrumbs),
	[16, 8, 2, 2],
	{
		heading: 'Wack.',
		message:
			'Dr. Charles accidentally breaks the machine whilst cleaning it out. There goes his summer bonus.',
		options: ['ouchy pockets...'],
		sprite: new Sprite(machineWithCrumbs),
	},
	[3, 2, 0],
) {
	protected override async onUnconsumedInteraction() {
		await this.component(AlertComponent)!.alert(
			'Machine go brr...',
			'You activate the machine. The machine moves & cleans the table.',
		);

		await this.onConsumedInteraction();
	}

	protected override async onConsumedInteraction() {
		this.position.update((v) => (v[0] === 16 ? [18, v[1]] : [16, v[1]]));
	}
}
