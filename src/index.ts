import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoMeshGradient.web.ts
// and on native platforms to ExpoMeshGradient.ts
import ExpoMeshGradientModule from './ExpoMeshGradientModule';
import ExpoMeshGradientView from './ExpoMeshGradientView';
import { ChangeEventPayload, ExpoMeshGradientViewProps } from './ExpoMeshGradient.types';

// Get the native constant value.
export const PI = ExpoMeshGradientModule.PI;

export function hello(): string {
  return ExpoMeshGradientModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoMeshGradientModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoMeshGradientModule ?? NativeModulesProxy.ExpoMeshGradient);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoMeshGradientView, ExpoMeshGradientViewProps, ChangeEventPayload };
