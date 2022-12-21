import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(SuppressLongpressGesturePlugin)
public class SuppressLongpressGesturePlugin: CAPPlugin {
    private let implementation = SuppressLongpressGesture()
    var longPressRecognizerActivated: Bool = false

    @objc func activateService(_ call: CAPPluginCall) {

        if longPressRecognizerActivated == false {
            print("activateService!")
            let webView = self.bridge?.webView
            // recognize long-press gesture to prevent haptic feedback (selection start, standard behavior in Safari)
            let recognizeLongPressGesture = UILongPressGestureRecognizer(target: self, action: #selector(handleLongpressGesture))
            recognizeLongPressGesture.minimumPressDuration = 0.45
            recognizeLongPressGesture.allowableMovement = 100.0
            // add this in main thread
            DispatchQueue.main.async {
                // add gesture recognizer from above
                webView?.addGestureRecognizer(recognizeLongPressGesture)
                // resolve plugin call
                call.resolve()
            }
        longPressRecognizerActivated = true;
        }
    }

    @objc func deactivateService(_ call: CAPPluginCall) {
    
    if longPressRecognizerActivated == true {
        print("DEactivate Service!")
        let webView = self.bridge?.webView

        // add this in main thread
        DispatchQueue.main.async {
            for recognizer in webView?.gestureRecognizers ?? [] {
                webView?.removeGestureRecognizer(recognizer)
            }
            // resolve plugin call
            call.resolve()
        }
        longPressRecognizerActivated = false
    }
}

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }

    @objc func handleLongpressGesture() {
    }
}
