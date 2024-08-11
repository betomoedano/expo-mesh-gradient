import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoMeshGradientViewProps } from './ExpoMeshGradient.types';

const NativeView: React.ComponentType<ExpoMeshGradientViewProps> =
  requireNativeViewManager('ExpoMeshGradient');

export default function ExpoMeshGradientView(props: ExpoMeshGradientViewProps) {
  return <NativeView {...props} />;
}
