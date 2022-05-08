import type { TScreenPosition } from '../../../types/TScreenPosition';
import { TouchableListenerKinds } from './TouchableListenerKinds';

export interface ITouchableListenerSignatures {
	[TouchableListenerKinds.CONFINED]: (
		touches: AsyncIterable<TScreenPosition[]>,
	) => Promise<void>;

	[TouchableListenerKinds.UNCONFINED]: (
		touches: AsyncIterable<TScreenPosition[]>,
	) => Promise<void>;
}
