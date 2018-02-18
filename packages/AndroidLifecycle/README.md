
# react-native-android-lifecycle

## Getting started

`$ npm install react-native-android-lifecycle --save`

### Mostly automatic installation

`$ react-native link react-native-android-lifecycle`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-android-lifecycle` and add `RNAndroidLifecycle.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNAndroidLifecycle.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

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

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNAndroidLifecycle.sln` in `node_modules/react-native-android-lifecycle/windows/RNAndroidLifecycle.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Android.Lifecycle.RNAndroidLifecycle;` to the usings at the top of the file
  - Add `new RNAndroidLifecyclePackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNAndroidLifecycle from 'react-native-android-lifecycle';

// TODO: What to do with the module?
RNAndroidLifecycle;
```
  