import * as React from 'react';

import { ExpoMeshGradientViewProps } from './ExpoMeshGradient.types';

export default function ExpoMeshGradientView(props: ExpoMeshGradientViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
