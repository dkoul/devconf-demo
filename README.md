# DevConf Demo

This repository contains a demo project showcasing automated testing using Playwright, a modern end-to-end testing framework.

## Features

- End-to-end testing with Playwright
- Cross-browser testing support (Chrome, Firefox, Safari)
- HTML test reports

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd devconf-demo
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

To run the tests:

```bash
npm run test
```

To run a specific test file:

```bash
npm run test:ui tests/<filename> (run single file)
```

To view the HTML report after running tests:

```bash
npm run show-report
```

## Project Structure

```
devconf-demo/
├── tests/              # Test files
│   ├── login.spec.ts   # Login test implementation
│   ├── inventory.spec.ts # Inventory test implementation
│   ├── login.abstract.spec.ts # Abstract login test
│   └── inventory.abstract.spec.ts # Abstract inventory test
├── tests-examples/     # Example test files
├── pages/             # Page objects and test utilities
├── playwright.config.ts # Playwright configuration
└── package.json       # Project dependencies and scripts
```

The project includes several key test implementations:
- `login.spec.ts` and `inventory.spec.ts`: Concrete test implementations
- `login.abstract.spec.ts` and `inventory.abstract.spec.ts`: Abstract test classes that define the test structure and common functionality

## Configuration

The project uses Playwright's configuration file (`playwright.config.ts`) with the following features:

- Parallel test execution
- HTML reporter for test results
- Cross-browser testing setup
- CI/CD specific configurations
- Trace collection for failed tests

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## Acknowledgments

- Playwright team for the amazing testing framework
- All contributors who have helped shape this project 