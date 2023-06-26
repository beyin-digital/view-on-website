---
marp: true
---

# Programming Languages and Tools

## Description

The main programming language used in this project is javascript on both the client and serverside. We made use of typescript which is a type safety layer used during development with javascript as javascript doesn't have type safety by default and this typescript code later gets transpiled into javascript code which the browser understands. Below is a list of all the languages and tools used in this project:

---

## Languages

- Typescript (NodeJs)
- SQL
- HTML
- CSS
- Yaml

## Tools

- React (Next.js)
- Material UI
- Nest.js
- TypeORM
- Jest
- Stripe
- AWS
- Github

---

## Use cases

This section will describe the various ways javascript was made use of through out this project in as much details as possible.

### Client side

On the client side the UI library known a React which helps in building we applications using a component based architecture. Meaning developers wouldn't need to rewrite parts of thier code and only call said components when necessary and pass the values needed for the component to function at the same time. To gain access to features such as Server Side rendering and efficient SEO capabilities, The team made use of an opinionated version of React also called a framework called Next.js which is a framework that helps in building React applications with the added benefits of ServerSide rendering and SEO capabilities.

---

For styling and access to ready made UI components such as Buttons, Switches and dropdown menus, the team made use of Material UI which is a component library that's based on the well know google material design system. It allows developers to build applications with a consistent look and feel across all platforms and devices whilst providing a wide range of components to choose from.

As mentioned in the first section of this document, all the source code in this code base was written in typescript and the client side is definitely no exception to this.

---

### Server Side

On the server side, the team made use of the NodeJs run time to run javascript code outside the a browser environment and also to gain access to the vast amount of libraries available on the npm registry. The team made use of the Nest.js framework which is a framework that helps in building NodeJs applications with a component based architecture similar to that of React. Nest.js also provides a lot of features out of the box such as dependency injection, middleware, decorators, typescript support out of the box and many more. It also comes with the added advantage of being able to be used with any other NodeJs library or framework.

---

### Database

The team made use of a PostgreSQL database which is an open source relational database management system. It is a very popular database management system and has been in use for a very long time. It is also very easy to use and has a lot of features that makes it a very good choice for this project such as the ability to create schemas and the ability to create relations between tables. The team made use of the TypeORM library which is an Object Relational Mapper(ORM) that helps in connecting to a database and also provides a lot of features such as migrations, entity relations, entity validation and many more. It also provides a lot of flexibility as it can be used with any database management system and also with any NodeJs framework or library.

---

### Testing

The team made use of the Jest testing framework which is a testing framework that helps in writing unit tests for javascript applications. It is very easy to use and also provides a lot of features such as code coverage, snapshot testing, mocking and many more. It also comes with the added advantage of being able to be used with any NodeJs library or framework.

---

### Payment Processing

The team made use of the Stripe payment processing platform which is a platform that helps in processing payments for online businesses. It is very easy to use and also provides a lot of features such as the ability to create products, the ability to create subscriptions, the ability to create coupons and many more. It also comes with the added advantage of being able to be used with any NodeJs library or framework.

### Deployment and Version Control

The team made use of the AWS cloud platform to deploy the application. The team made use of the AWS Elastic Container Service which is a service that helps in deploying containerised applications to the cloud along with Github as the main code repository. The deployment process for both the Client and Server Side are triggered based on the whether or not changes have been made to either folder in the monorepo of the project.
