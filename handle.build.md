1.Error: C:\personals\React-Native\ChatGpt\ChatGpt\android\gradlew.bat app:assembleDebug -x lint -x test --configure-on-demand --build-cache -PreactNativeDevServerPort=8081 -PreactNativeArchitectures=arm64-v8a,armeabi-v7a exited with non-zero code: 1


Solution :-
Go to android/app/build.gradle and add the line multiDexEnabled true and set minSdkVersion to 21 inside defaultConfig like this


 minSdkVersion 23(same as androidManifesr.xml)
multiDexEnabled true


2.> Could not determine the dependencies of null.
   > SDK location not found. Define a valid SDK location with an ANDROID_HOME environment variable or by setting the sdk.dir path in your project's local properties file at 'C:\personals\React-Native\ChatGpt\ChatGpt\android\local.properties'.


   solution:-
   C:\Users\moonl\AppData\Local\Android\Sdk


   in local.properties we shoudl follow this syntax 
   sdk.dir=C:\\Users\\moonl\\AppData\\Local\\Android\\Sdk

   -->https://stackoverflow.com/questions/27620262/sdk-location-not-found-define-location-with-sdk-dir-in-the-local-properties-fil



   rnfs