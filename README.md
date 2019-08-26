# Email Composer Example Application

This project is an example UI of an Email Composer application using React and Redux.

## Requirements

NPM 6.9+
Node 10.15+

## Setup

This is a development exercise in user interface and not intended for production use. As a result, no production build process is included and only local development build is provided.

To get started, navigate to the project root and install dependencies:

```shell
    npm install
```

To start the development environment, run:

```shell
    npm start
```

This will start the local server at `http://localhost:9000/`.

Live reloading is enabled, the page should reload with changes as you edit files.

## Usage

The app starts with a simple email composer window.

For an email to be 'sendable', it must have:

- At least 1 'To' recipient.
- A subject (at least 1 character)
- A message body (at least 1 character)

'CC' and 'BCC' recipients, and attachments are optional.

Attachments may be of any format __but no validation is carried out__.

Clicking the 'send' button does not actually send any emails. This app is solely a UI demonstration.

When the send button is clicked, the composer window will change to a confirmation state. To reset the app after this, the window must be manually reloaded.