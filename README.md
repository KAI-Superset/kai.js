# kai.js

A small API wrapper for KNRTU-KAI.

## Installation

Installation can be done with `npm`, `yarn` or `pnpm`:

```
npm install kai.js
yarn add kai.js
pnpm add kai.js
```

> Node.js 10 or newer is required

## Links

- [KNRTU-KAI website](https://kai.ru/main)
- [KAI Superset website](https://supersetkai.ru)
- [Github](https://github.com/supersetkai/kai.js)
- [Documentation](https://supersetkai.ru/kai.js)

## Usage

You can find more about API wrapper usage on [this page](https://docs.supersetkai.ru/kai.js)

In order to get started with the package, define the class:

```js
const { Schedule } = require('kai.js');

const schedule = new Schedule();
```

```ts
import { Schedule, ScheduleInterface } from 'kai.js';

const schedule: ScheduleInterface = new Schedule();
```

Now you get to use schedule API however you want:

```js
async function getScheduleOfMyGroup() {
    return await schedule.getSchedule(4131);
}

async function getMyGroupInformation() {
    return await schedule.getGroups(4131);
}

async function getRawScheduleOfMyGroup() {
    return await schedule.raw.getGroups(4131);
}

async function findRawGroups(groupNumber) {
    return await schedule.raw.getGroups(groupNumber);
}
```

> All request functions are async.