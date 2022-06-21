# Developer file

## .dot ENV
.env
```bash
API_URL=https://api.example.org
API_TOKEN=abc123
```

In users.js

```js
import {API_URL, API_TOKEN} from "@env"

fetch(`${API_URL}/users`, {
  headers: {
    'Authorization': `Bearer ${API_TOKEN}`
  }
})
```

## Store [Zustand](https://github.com/pmndrs/zustand)
Your store is a hook! You can put anything in it: primitives, objects, functions. The set function merges state.

```js
import create from 'zustand'

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))
```

How to interact with the store 

```bash
function BearCounter() {
  const bears = useStore((state) => state.bears)
  return <h1>{bears} around here ...</h1>
}

function Controls() {
  const increasePopulation = useStore((state) => state.increasePopulation)
  return <button onClick={increasePopulation}>one up</button>
}

// fetch everything
const state = useStore() // Warning! cause the component to update on every state change!

// Selecting multiple state slices
const nuts = useStore((state) => state.nuts)
const honey = useStore((state) => state.honey)

// construct a single object with multiple state-picks inside
import shallow from 'zustand/shallow'

// Object pick, re-renders the component when either state.nuts or state.honey change
const { nuts, honey } = useStore(
  (state) => ({ nuts: state.nuts, honey: state.honey }),
  shallow
)

// Array pick, re-renders the component when either state.nuts or state.honey change
const [nuts, honey] = useStore((state) => [state.nuts, state.honey], shallow)

// Mapped picks, re-renders the component when state.treats changes in order, count or keys
const treats = useStore((state) => Object.keys(state.treats), shallow)
```

Overwriting state
The set function has a second argument, false by default. Instead of merging, it will replace the state model. Be careful not to wipe out parts you rely on, like actions.

```js
import omit from 'lodash-es/omit'

const useStore = create((set) => ({
  salmon: 1,
  tuna: 2,
  deleteEverything: () => set({}, true), // clears the entire store, actions included
  deleteTuna: () => set((state) => omit(state, ['tuna']), true),
}))
```

Async actions
Just call set when you're ready, zustand doesn't care if your actions are async or not.

```js
const useStore = create((set) => ({
  fishies: {},
  fetch: async (pond) => {
    const response = await fetch(pond)
    set({ fishies: await response.json() })
  },
}))
```

Read from state in actions
set allows fn-updates set(state => result), but you still have access to state outside of it through get.
```js
const useStore = create((set, get) => ({
  sound: "grunt",
  action: () => {
    const sound = get().sound
    // ...
  }
})
```

## Theming
The app contains several theming packages, since one does not provide all the juices
e.g. Native Base inputs don't have Material TextInput, so you may need to mix-and-match.
Also, both of them don't provide the Material You color palette.

### Material You
For Material 3 (You) theming, you can go about it the following way
```js
const MyComponent = () => {
    const palette = useMaterialYouPalette();

    return (
        <View style={{ backgroundColor: palette.system_neutral2[2] }}>
            <Text style={{ color: palette.system_accent1[6] }}>Hello World</Text>
        </View>
    );
}
```