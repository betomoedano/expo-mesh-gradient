//
//  MeshGradientSwiftUIView.swift
//  ExpoMeshGradient
//
//  Created by Beto on 8/11/24.
//

import SwiftUI

struct MeshGradientSwiftUIView: View {
  @ObservedObject var props: MeshGradientProps
  
  var body: some View {
    if #available(iOS 18.0, *) {
      MeshGradient(
        // This would be a 3 by 3 grid
        width: 3,
        height: 3,
        // Points in the grid are defined using SIMD2 foat valus
        // this take an x and y axis
        points: [
          .init(0, 0), .init(0.5, 0), .init(1, 0),
          .init(0, 0.5), .init(0.9, 0.3), .init(1, 0.5),
          .init(0, 1), .init(0.5, 1.0), .init(1, 1.0)
        ], colors: [
          .red, .purple, .indigo,
          .orange, .white, .blue,
          .yellow, .green, .mint
        ])
//      .ignoresSafeArea(.all)
      .modifier(IgnoreSafeAreaModifier(ignore: props.ignoreSafeAreaInsets))
      .onAppear {
        print("MeshGradientSwiftUIView props:")
        print("ignoreSafeAreaInsets: \(props.ignoreSafeAreaInsets)")
        // Print other properties as needed
      }
      .onChange(of: props.ignoreSafeAreaInsets) { newValue in
        print("ignoreSafeAreaInsets changed to: \(newValue)")
      }
    } else {
      // Fallback on earlier versions
      Text("Mesh gradient requires iOS 18.0+")
        .onAppear {
          print("MeshGradientSwiftUIView: Fallback view for iOS < 18.0")
        }
    }
  }
}

struct IgnoreSafeAreaModifier: ViewModifier {
  let ignore: Bool
  
  func body(content: Content) -> some View {
    if ignore {
      if #available(iOS 14.0, *) {
        content.ignoresSafeArea(.all)
      }
    } else {
      content
    }
  }
}

// This does not work for some reason :(
//#Preview {
//  MeshGradientSwiftUIView()
//}
