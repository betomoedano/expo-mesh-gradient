import { requireNativeViewManager } from "expo-modules-core";
import * as React from "react";

import { ExpoMeshGradientProps } from "./ExpoMeshGradient.types";

const NativeView: React.ComponentType<ExpoMeshGradientProps> =
  requireNativeViewManager("ExpoMeshGradient");

export default function ExpoMeshGradientView(props: ExpoMeshGradientProps) {
  return <NativeView {...props} />;
}
