<p align="center">
    <h3 align="center">Fullstack Countries Challenge</h3>

  <p align="center">
    An awesome README template to jumpstart your projects!
    <br />
    <a href="https://github.com/cretinaverti/countries-challenge"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/cretinaverti/countries-challenge">View Demo</a>
      ·
    <a href="https://github.com/cretinaverti/countries-challenge/issues">Report Bug</a>
      ·
    <a href="https://github.com/cretinaverti/countries-challenge/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#the-stack">The Stack</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#develop">Develop</a></li>
        <li><a href="#storybook">Storybook</a></li>
        <li><a href="#production">Production</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>


## The Stack
- [**TypeScript**](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html): the programming language for both backend and frontend;
- [**React**](https://reactjs.org/) and [**Next.js**](https://nextjs.org/): as the frontend framework and [_middle-end_](https://medium.com/the-ideal-system/next-js-is-not-what-you-may-think-it-is-8423172e7401);
- [**Apollo GraphQL client**](https://www.apollographql.com/apollo-client): the GraphQL client on the frontend;
- [**Apollo Server**](https://www.apollographql.com/docs/apollo-server/): the server framework we'll use to serve the GraphQL API;
    - [**RESTCountries**](https://restcountries.eu): Rest API which provides data;
- [**Nexus Schema**](https://nexusjs.org/): a library for building _code-first_ GraphQL APIs;
- [**GraphQL Code Generator**](https://graphql-code-generator.com): generate code from your GraphQL schema and operations;
- [**Storybook**](https://storybook.js.org): development environment & documentation for components.

## Getting Started

### Prerequisites
`Node.js > 14.8.0`

The project includes an `.nvmrc` file so you can `nvm use` to use correct Node version.

### Installation
1. Clone the repo
    ```sh
    git clone https://github.com/cretinaverti/countries-challenge.git
    ```
2. Install NPM packages
    ```sh
    cd countries-challenge \
    yarn
    ```

## Usage

### Develop
To start the development server:
```sh
yarn run develop
````

### Storybook
Storybook allows developer to code components in isolation & provides a generated documentation.
```sh
yarn run storybook
```

### Production
```sh
yarn run build
yarn run start
````

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/amazing-feature`)
3. Commit your Changes (`git commit -m 'Add some amazing-feature'`)
4. Push to the Branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.
