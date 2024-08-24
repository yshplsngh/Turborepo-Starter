# Turborepo Docker starter

Testing turborepo Deployment on [render](render.com). Will be using this repo for future references to deploy turborepo apps on render.

## Basic Idea

Express App should be deployed to render and frontend apps on vercel or other platforms.
But this example deploys both of them to render as two web services

> [!NOTE]
> There are some problem in running the next app in docker which can be solved by specifying the port from env

## What's inside?

This Turborepo includes the following:

### Apps and Packages

- `web`: a [Next.js](https://nextjs.org/) app
- `api`: an [Express](https://expressjs.com/) server
- `@repo/ui`: a React component library
- `@repo/logger`: Isomorphic logger (a small wrapper around console.log)
- `@repo/eslint-config`: ESLint presets
- `@repo/typescript-config`: tsconfig.json's used throughout the monorepo
- `@repo/jest-presets`: Jest configurations

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

## Deployment

This repository includes a `render.yaml` file for deploying to Render using Docker.

1. Check out the Dockerfile in `apps/web` and `apps/api`
2. Go to render dashboard
3. Click on Blueprints and select `New Blueprint Instance`
4. Connect the repository and configure blueprint name
5. Click on Deploy!

### render.yaml Configuration used

```yaml
services:
  - type: web
    name: turborepo-backend
    runtime: docker
    repo: https://github.com/dead8309/turborepo-express-nextjs
    buildFilter:
      paths:
        - apps/api/**
    plan: free
    dockerContext: .
    dockerfilePath: ./apps/api/Dockerfile

  - type: web
    name: turborepo-frontend
    runtime: docker
    repo: https://github.com/dead8309/turborepo-express-nextjs
    buildFilter:
      paths:
        - apps/web/**
    plan: free
    dockerContext: .
    dockerfilePath: ./apps/web/Dockerfile
    envVars:
      - key: NEXT_PUBLIC_API_HOST
        fromService:
          name: turborepo-backend
          type: web
          property: host
version: "1"
```
