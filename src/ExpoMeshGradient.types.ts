import { ViewProps } from "react-native";

export type ChangeEventPayload = {
  value: string;
};

export interface ExpoMeshGradientProps extends ViewProps {
  ignoreSafeAreaInsets?: boolean;
}
