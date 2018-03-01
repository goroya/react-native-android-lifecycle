package com.gogoroya.reactnative.androidlifecycle

import android.app.Activity
import android.content.Intent
import android.util.Log
import com.facebook.react.bridge.*
import com.facebook.react.modules.core.DeviceEventManagerModule

class RNAndroidLifecycleModule(private val reactContext: ReactApplicationContext)
  : ReactContextBaseJavaModule(reactContext), LifecycleEventListener, ActivityEventListener {
  companion object {
    const val EVENT_ON_HOST_RESUME:String = "EVENT_ON_HOST_RESUME"
    const val EVENT_ON_HOST_PAUSE:String = "EVENT_ON_HOST_PAUSE"
    const val EVENT_ON_HOST_DESTROY:String = "EVENT_ON_HOST_DESTROY"

    const val EVENT_ON_NEW_INTENT:String = "EVENT_ON_NEW_INTENT"
    const val EVENT_ON_ACTIVITY_RESULT:String = "EVENT_ON_ACTIVITY_RESULT"
  }
  init {
    reactContext.addActivityEventListener(this)
    reactContext.addLifecycleEventListener(this)
  }
  override fun getName(): String {
    return "RNAndroidLifecycle"
  }

  override fun getConstants(): MutableMap<String, Any> {
    val constants = HashMap<String, Any>()
    val map = Arguments.createMap()
    map.putString("ON_NEW_INTENT", EVENT_ON_NEW_INTENT)
    map.putString("ON_ACTIVITY_RESULT", EVENT_ON_ACTIVITY_RESULT)
    map.putString("ON_HOST_RESUME", EVENT_ON_HOST_RESUME)
    map.putString("ON_HOST_PAUSE", EVENT_ON_HOST_PAUSE)
    map.putString("ON_HOST_DESTROY", EVENT_ON_HOST_DESTROY)
    constants["EVENT"] = map
    return constants
  }

  private fun sendEvent(eventName: String, payload: WritableMap) {
    reactApplicationContext
        .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
        .emit(eventName, payload)
  }

  override fun onHostResume() {
    sendEvent(EVENT_ON_HOST_RESUME, Arguments.createMap())
  }

  override fun onHostPause() {
    sendEvent(EVENT_ON_HOST_PAUSE, Arguments.createMap())
  }

  override fun onHostDestroy() {
    sendEvent(EVENT_ON_HOST_DESTROY, Arguments.createMap())
  }

  override fun onNewIntent(intent: Intent?) {
    sendEvent(EVENT_ON_NEW_INTENT, Arguments.createMap())
  }

  override fun onActivityResult(activity: Activity?, requestCode: Int, resultCode: Int, data: Intent?) {
    val sendData = Arguments.createMap()
    sendData.putInt("requestCode", requestCode)
    sendData.putInt("resultCode", resultCode)
    val intentData =Arguments.createMap()
    val bundle = data?.extras
    if (bundle != null) {
      for (key in bundle.keySet()) {
        val value = bundle.get(key)
        when (value) {
          is String -> {
            intentData.putString(key, value)
          }
          is Int -> {
            intentData.putInt(key, value)
          }
          is Double -> {
            intentData.putDouble(key, value)
          }
          else -> {
            intentData.putString(key, "Unkown data Type")
          }
        }
      }
    }
    sendData.putMap("data", intentData)
    sendEvent(EVENT_ON_ACTIVITY_RESULT, sendData)
  }
}