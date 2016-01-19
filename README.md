# NHS e-Referral Service Prototyping Kit

This kit is adapted from the [GOV.UK prototyping kit.](https://github.com/alphagov/govuk_prototype_kit).

The kit provides a simple way to make interactive prototypes for NHS e-Referral Service. These prototypes can be used to show ideas to people you work with, and to do user research.

It's built on the [Express](http://expressjs.com/) framework and contains code adapted from these GOV.UK resources:

- [NHS.UK Alpha template](https://github.com/nhsalpha/nhs_prototype_kit)
- [GOV.UK template](https://github.com/alphagov/govuk_template)
- [GOV.UK front end toolkit](https://github.com/alphagov/govuk_frontend_toolkit)
- [GOV.UK elements](https://github.com/alphagov/govuk_elements)

## Requirements

#### [Node](http://nodejs.org/)

You may already have it, try:

```
node --version
```

Your version needs to be at least v0.10.0.

If you don't have Node, download it here: [http://nodejs.org/](http://nodejs.org/).

## Getting started

Install Node.js (see requirements)

#### Clone this repo

```
git clone git@github.com:bencullimore/nhsers.git

```

#### Install dependencies

```
npm install
```

This will install folders containing programs described by the package.json file to a folder called `node_modules`.

#### Run the app

```
node start.js
```

Go to [localhost:3000](http://localhost:3000) in your browser.

#### Hot reload

Any code changes should update in the browser without you restarting the app.

The app recompiles app/assets/stylesheets/application.scss everytime changes are observed.

## Documentation

Find out how to work with the prototyping application.

* [Getting started](docs/getting-started.md) (Read this first)
* [Creating routes](docs/creating-routes.md)
* [Making pages](docs/making-pages.md)
* [Writing CSS](docs/writing-css.md)
* [Deploying (getting your work online)](docs/deploying.md)

This project is built on top of Express, the idea is that it is straightforward to create simple static pages out of the box. However, you're not limited to that - more dynamic sites can be built with more understanding of Express. Here's a good [Express tutorial.](http://code.tutsplus.com/tutorials/introduction-to-express--net-33367)

