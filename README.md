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

Navigate to `eas.json` file in the root directory. Under build -> development, set the development client to `true` accordingly.

```bash
# For viewing development changes on the fly.
"developmentClient": true

# Default
"developmentClient": false
```

Note: The command `npm start` is required to run the app when `"developmentClient": true` is being set.

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
