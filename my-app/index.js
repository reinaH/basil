const { Keystone } = require("@keystonejs/keystone");
const { Text } = require("@keystonejs/fields");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { StaticApp } = require("@keystonejs/app-static");
const { MongooseAdapter: Adapter } = require("@keystonejs/adapter-mongoose");
const PROJECT_NAME = "my-keystone";

const expressSession = require("express-session");
const MongoStore = require("connect-mongo")(expressSession);

// default: mongodb://localhost/my-keystone
const adapterConfig = { mongoUri: "mongodb://mongo:27017" };

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  cookieSecret: "ImG2PbQVMXdmuLat6S9u",
  sessionStore: new MongoStore({ url: "mongodb://mongo:27017" }),
});

keystone.createList("Todo", {
  schemaDoc: "A list of things which need to be done",
  fields: {
    name: { type: Text, schemaDoc: "This is the thing you need to do" },
  },
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new StaticApp({ path: "/", src: "public" }),
    new AdminUIApp({ name: PROJECT_NAME, enableDefaultRoute: true }),
  ],
};

