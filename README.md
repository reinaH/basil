# KeystoneJS DevOps Set Up Sample App

# Project: KeystoneJS Todo List

This project contains an example of a basic Todo list. Look at the `index.js` file to see how the list is configured. It also contains a StaticApp that provides an example of simple front-end application that makes use of the graphQL API. Take a look at the `public` folder to see how this application is built.


## Running the Project.

Once running, the app is reachable via `localhost:3000`.


## Scripts

- `npm run-script init` : builds containers/ connects web container to database container. takes care of any db set up.

- `npm run` : starts up web server. if `init` has not yet run or if container definition has changed, this runs the `init` step.

- `npm test` : runs the test runner. if `init` has not yet run or if container definition has changed, this runs the `init` step.


## GitHub Actions

Project is set up with GitHub actions that:
1. verify the `prettier` formatter passes
2. verify the test runner passes


## High Level Planning

Features to come:

- Add production/staging environments:

Would need different docker-compose and/or Dockerfiles depending on the differences between all three environments. It could be the case that we  only need separate docker-compose files if environment differences are slim. For example, the Docker files woul be named as such: docker-compose.staging.yml and docker-compose.prod.yml or Dockerfile.staging and Dockerfile.prod.


- Use staging data in development environments: As a developer when focusing on testing across environments I would focus on smoke testing. Since performance related things like traffic and volume are handled later. The staging data should probably encompass the test driven process we use in dev as well as making sure any sentitive data - that may as well overlap with prod- is abstracted. It would be most important to pick a sample of staging data from testing to dev to cover these bases. The benefit of using the same or mostly the same data from dev to staging is that it would make it easier to pinpoint feature vs environment issues.


- Monitoring/alerting in production: To get started I would set up GraphQL caching and performance monitoring as suggested by the KeystoneJS Docs via the Apollo Engine- a GraphQL gateway. This gateway provides features such as performance monitoring for GraphQL.







