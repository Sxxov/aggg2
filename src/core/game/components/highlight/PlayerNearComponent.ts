import { Store } from '../../../blocks/store';
import { AbstractComponent } from '../common/AbstractComponent';

export class PlayerNearComponent extends AbstractComponent {
	public isNear = new Store(false);
}
