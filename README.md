# Templater Unsplash API Proxy

This is a basic express app to act as a proxy for the
[Unsplash APIs](https://unsplash.com/developers) random image endpoint. It is
used in the obsidian Templater plugin for the `tp.web.random_picture` command.
The express app is deployed on [fly.io](https://fly.io).

## To run

- You'll need an access key from [Unsplash](https://unsplash.com/developers).
  Set this as an env variable: `UNSPLASH_ACCESS_KEY`
- `pnpm run` will launch the server locally
- `http://localhost:3030` should display an object with values from the Unsplash
  API.

## To deploy

Follow instructions to get an account and add secrets at
[fly.io](https://fly.io)
