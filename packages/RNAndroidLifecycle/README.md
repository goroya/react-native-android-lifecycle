
# react-native-android-lifecycle

## Getting started

`$ npm install react-native-android-lifecycle --save`

### Mostly automatic installation

`$ react-native link react-native-android-lifecycle`

### Manual installation

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNAndroidLifecyclePackage;` to the imports at the top of the file
  - Add `new RNAndroidLifecyclePackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-android-lifecycle'
  	project(':react-native-android-lifecycle').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-android-lifecycle/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-android-lifecycle')
  	```

## Usage
```javascript
import RNAndroidLifeCycle from 'react-native-android-lifecycle';

RNAndroidLifeCycle.on(RNAndroidLifeCycle.event.ON_NEW_INTENT, () => {
  console.log("ON_NEW_INTENT");
});
RNAndroidLifeCycle.on(RNAndroidLifeCycle.event.ON_ACTIVITY_RESULT, (e) => {
  console.log("ON_ACTIVITY_RESULT", e);
});
RNAndroidLifeCycle.on(RNAndroidLifeCycle.event.ON_HOST_RESUME, () => {
  console.log("ON_HOST_RESUME");
});
RNAndroidLifeCycle.on(RNAndroidLifeCycle.event.ON_HOST_PAUSE, () => {
  console.log("ON_HOST_PAUSE");
});
RNAndroidLifeCycle.on(RNAndroidLifeCycle.event.ON_HOST_DESTROY, () => {
  console.log("ON_HOST_DESTROY");
});
```
  