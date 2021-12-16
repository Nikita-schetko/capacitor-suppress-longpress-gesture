import Foundation

@objc public class SuppressLongpressGesture: NSObject {
    @objc public func echo(_ value: String) -> String {
        return value
    }

    @objc public func activateService() -> String {
        return "SuppressLongPress activated"
    }

    @objc public func deactivateService() -> String {
        return "SuppressLongPress deactivated"
    }
}
