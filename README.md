# Login Tests From the Pixellu Website

To set up the Playwright framework follow [Playwright DOCUMENTATION](https://playwright.dev/).

### Prerequisites

- Node.js 16.14.X

### Installation

Install dependencies

```bash
npm install
```

Install Playwright

```bash
npm init playwright@latest
```

### Running Tests

Run all e2e tests

```bash
npx playwright test
```

Testing results 

```bash
Running 2 tests using 1 worker

  ✓  1 [chromium] › main.spec.js:11:5 › Test task › Positive login check (36.0s)
  ✓  2 [chromium] › main.spec.js:19:5 › Test task › Negative login check (15.3s)

  2 passed (52.3s)
```