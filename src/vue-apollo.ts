import Vue from 'vue';
import VueApollo from 'vue-apollo';
import { createApolloClient } from 'vue-cli-plugin-apollo/graphql-client';

// https://github.com/Akryum/vue-apollo/issues/444#issuecomment-439645471
import { ApolloClient } from 'apollo-client';
// import { SubscriptionClient } from 'subscriptions-transport-ws';
import { InMemoryCache } from 'apollo-cache-inmemory';

type TVueApolloClient = ApolloClient<InMemoryCache>;
// type TVueApolloClient = ApolloClient<InMemoryCache> & {
//   wsClient: SubscriptionClient;
// };

// Install the vue plugin
Vue.use(VueApollo);

// Name of the localStorage item
const AUTH_TOKEN = 'apollo-token';

// Http endpoint
// Files URL root
// export const filesRoot = process.env.VUE_APP_FILES_ROOT
// || httpEndpoint.substr(0, httpEndpoint.indexOf('/graphql'));
// Vue.prototype.$filesRoot = filesRoot;

// Config
const defaultOptions = {
  // You can use `https` for secure connection (recommended in production)
  // httpEndpoint,
  // You can use `wss` for secure connection (recommended in production)
  // Use `null` to disable subscriptions
  // wsEndpoint: process.env.VUE_APP_GRAPHQL_WS || 'ws://localhost:4000/graphql',
  // LocalStorage token
  tokenName: AUTH_TOKEN,
  // Enable Automatic Query persisting with Apollo Engine
  persisting: false,
  // Use websockets for everything (no HTTP)
  // You need to pass a `wsEndpoint` for this to work
  websocketsOnly: false,
  // Is being rendered on the server?
  ssr: false,

  // Override default apollo link
  // note: don't override httpLink here, specify httpLink options in the
  // httpLinkOptions property of defaultOptions.
  // link: myLink

  // Override default cache
  // cache: myCache

  // Override the way the Authorization header is set
  // getAuth: (tokenName) => ...

  // Additional ApolloClient options
  // apollo: { ... }

  // Client local data (see apollo-link-state)
  // clientState: { resolvers: { ... }, defaults: { ... } }
};

// Catalog API
const clientCatalogOptions = {
  httpEndpoint: 'https://localhost:5001/graphql/',
};

// Call this in the Vue app file
export function createProvider(options = {}) {
  // Create apollo client
  const createCatalog = createApolloClient<TVueApolloClient>({
    ...defaultOptions,
    ...clientCatalogOptions,
    ...options,
  });

  const catalogClient = createCatalog.apolloClient;
  // catalogClient.wsClient = wsClient;

  // Create vue apollo provider
  return new VueApollo({
    defaultClient: catalogClient,
    clients: {
      catalogClient,
    },
    defaultOptions: {
      $query: {
        // fetchPolicy: 'cache-and-network',
      },
    },
    errorHandler(error) {
      // eslint-disable-next-line no-console
      console.log(
        '%cError',
        'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;',
        error.message,
      );
    },
  });
}

export async function dummy() {
  console.log('dummy');
}

// // Manually call this when user log in
// export async function onLogin(apolloClient: TVueApolloClient, token: string) {
//   if (typeof localStorage !== 'undefined' && token) {
//     localStorage.setItem(AUTH_TOKEN, token);
//   }
//   if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient);
//   try {
//     await apolloClient.resetStore();
//   } catch (e) {
//     // eslint-disable-next-line no-console
//     console.log('%cError on cache reset (login)', 'color: orange;', e.message);
//   }
// }
//
// // Manually call this when user log out
// export async function onLogout(apolloClient: TVueApolloClient) {
//   if (typeof localStorage !== 'undefined') {
//     localStorage.removeItem(AUTH_TOKEN);
//   }
//   if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient);
//   try {
//     await apolloClient.resetStore();
//   } catch (e) {
//     // eslint-disable-next-line no-console
//     console.log('%cError on cache reset (logout)', 'color: orange;', e.message);
//   }
// }
