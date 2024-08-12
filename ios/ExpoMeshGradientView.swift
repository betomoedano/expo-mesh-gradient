//
//  MeshGradientSwiftUIView.swift
//  ExpoMeshGradient
//
//  Created by Beto on 8/11/24.
//

import ExpoModulesCore
import SwiftUI

// This view will be used as a native component. Make sure to inherit from `ExpoView`
// to apply the proper styling (e.g. border radius and shadows).
class ExpoMeshGradientView: ExpoView {
  let props: MeshGradientProps
  
  required init(appContext: AppContext? = nil) {
    props = MeshGradientProps()
    
    let hostingController = UIHostingController(rootView: MeshGradientSwiftUIView(props: props ))
    super.init(appContext: appContext)
    setupHostingController(hostingController)
  }
}
