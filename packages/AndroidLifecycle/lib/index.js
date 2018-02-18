import { EventEmitter2 } from 'eventemitter2';
import { NativeModules } from 'react-native';
import { DeviceEventEmitter } from 'react-native';
const { RNAndroidLifecycle } = NativeModules;

class JNAndroidLifecycle extends EventEmitter2 {
  constructor(){
    super();
    const event = RNAndroidLifecycle.EVENT;
    for(const key in event){
      if(event.hasOwnProperty(key)){
        DeviceEventEmitter.addListener(event[key], (param) => {
          this.emit(event[key], param);
        });
      }
    }
  }
  get event() {
    return RNAndroidLifecycle.EVENT;
  }
}
function createInstance() {
  return new JNAndroidLifecycle();
}
const JSAndroidLifecycle = createInstance();
JSAndroidLifecycle.create = function () {
  return createInstance();
};

export default JSAndroidLifecycle;
