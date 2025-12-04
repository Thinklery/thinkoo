# Welcome to Thinkoo

This is the mobile application for Thinklery.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Login to EAS Build

   ```bash
   eas login
   ```

## For Development

To enable development mode with live reloading and access to the Metro bundler, you need to set `"developmentClient": true` in your `eas.json` file under the `build -> development` profile. This allows you to use features like hot reloading and debugging tools during development.

- Set `"developmentClient": true` when you want to build a development version of the app that connects to the local Metro bundler and supports live updates. This is useful for rapid development and testing.
- Set `"developmentClient": false` for production or preview builds, where you do not need live reloading or Metro bundler connectivity.

Example configuration in `eas.json`:

```json
// Development build profile
"developmentClient": true

// Production build profile
"developmentClient": false
```

Complete Development Workflow

1. Set `"developmentClient": true` in your `eas.json` under the desired build profile (usually `development`).
2. Build the app for development using EAS Build:

   ```bash
   eas build --platform android --profile development
   ```

3. Install the built app on your device or emulator.
4. Start the Metro bundler locally:

   ```bash
   npm start
   ```

5. Open the app on your device. It will connect to the Metro bundler, enabling hot reloading, live updates, and debugging tools.

**What does the development client enable?**

- Hot reloading: Instantly see code changes without rebuilding the app.
- Metro bundler: Serves your JavaScript bundle and assets locally.
- Debugging tools: Access React Native and Expo debugging features.

For more details, see the [Expo Development Builds documentation](https://docs.expo.dev/develop/development-builds/create-a-build/).

## Building the Application

### For Android Build

The steps to [run the cloud build](https://docs.expo.dev/tutorial/eas/android-development-build/) for Android is as follows:

1. Run the eas build using the following command

   ```bash
   eas build --platform android --profile development
   ```

## Linting and Checks

There will be linting and formatting checks in the CI pipeline to ensure the code quality of the repository. To run the respective checks, use the following command:

1. Run Linting Checks

   ```bash
   npm run lint
   ```

2. Fix fixable Linting Issues

   ```bash
   npm run lint:fix
   ```

3. Run Formatting Checks

   ```bash
   npm run format:check
   ```

4. Fix Formatting Issues

   ```bash
   npm run format
   ```

## More Information

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.
