# src/config

This folder holds centralized configuration and small helper config files for the project.

Purpose:

- Provide a single place to add project-level constants and environment templates.
- Make it easy to import configuration across the app (e.g. `import appConfig from 'src/config/appConfig'`).

Starter files:

- `index.js` re-exports config objects.
- `appConfig.js` general site-level settings.
- `i18nConfig.js` light wrapper for i18n-related paths/settings.
- `env.example.js` example env variables you can copy into `.env`.

How to use:

- Add values to these files as needed. Keep secrets in `.env` and do not commit them.
- If you want additional environment-specific configs (development / staging / production), create files like `appConfig.dev.js` and load them based on NODE_ENV.
