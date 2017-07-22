# KHMER 2017 APP

**1. Steps clone and run Ionic App**

* Clone from this repository
* Go to the cloned project
* Run 'npm install'
* Install all Ionic Cordova plugin below:
* ionic cordova plugin add com.telerik.plugins.nativepagetransitions
* npm install --save @ionic-native/native-page-transitions
* ionic cordova plugin add cordova-plugin-console
* ionic cordova plugin add cordova-plugin-device
* npm install --save @ionic-native/device
* ionic cordova plugin add cordova-plugin-fcm
* npm install --save @ionic-native/fcm
* ionic cordova plugin add cordova-plugin-nativeaudio
* npm install --save @ionic-native/native-audio
* ionic cordova plugin add cordova-plugin-splashscreen
* npm install --save @ionic-native/splash-screen
* ionic cordova plugin add cordova-plugin-statusbar
* npm install --save @ionic-native/status-bar
* ionic cordova plugin add cordova-plugin-whitelist
* ionic cordova plugin add ionic-plugin-keyboard
* npm install --save @ionic-native/keyboard
* npm install @ionic/cloud-angular --save

**2. Steps build APK for Fabric.io**

* Add Fabric plugin to Android Studio https://fabric.io/downloads/android
* Click Fabric button in the toolbar before "?" icon
* Login to fabric.io using your account
* Import project on Android Studio, point to swipe2/platforms/android
* Click build menu then click build APK
* Follow the guide on Fabric plugin

**3. Steps build APK for App Store**

* cordova build --release android
* cd platforms/android/build/outputs/apk/
* jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ~/Documents/Apps/swipe2/khmer2017.keystore android-release-unsigned.apk khmer2017
* Enter password: khmer2017
* /Users/didin/Library/Android/sdk/build-tools/25.0.2/zipalign -f -v 4 android-release-unsigned.apk Khmer2017.apk

> Change 'zipalign' path if not match your platforms
