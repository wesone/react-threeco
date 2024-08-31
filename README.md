<div align="center">
<img src="img/Threeco.svg" alt="Logo" title="Threeco Logo" width="200"  />

# Threeco
</div>

**Threeco** provides a simple way to create a render loop inside a [React](https://reactjs.org/) application.  
That loop can be used to animate (interactive) 3D and 2D graphics e.g. for a presentation, a web app or a browser game.  

What to do with the render loop is up to you. You may create a [WebGL](https://www.khronos.org/webgl/) or [Three.js](https://threejs.org/) project or simply animate with the [canvas](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) element.
# Get started
First install the npm package to your React project:
```sh
$ npm i react-threeco
```

Now you have access to the [`useThreeco`](#usethreeco) hook:
```javascript
import {useThreeco} from 'react-threeco';

const MyComponent = () => {
    useThreeco(() => {
        // setup your canvas, scene or whatever

        return {
            // update your values that depend on deltaTime
            onUpdate: deltaTime => {},
            // redraw your canvas
            onRender: () => {},
            // remove listeners, elements from DOM, ...
            onUnmount: () => {}
        };
    });

    return (
        <div>
            Hello World
        </div>
    );
};

export default MyComponent;
```

Alternatively you can use the [Threeco](#threeco-1) component that works pretty similar:
```javascript
import {Threeco} from 'react-threeco';

const MyComponent = () => {
    const setup = () => {
        // setup your canvas, scene or whatever

        return {
            // update your values that depend on deltaTime
            onUpdate: deltaTime => {},
            // redraw your canvas
            onRender: () => {},
            // remove listeners, elements from DOM, ...
            onUnmount: () => {}
        };
    };

    return (
        <Threeco setup={setup}>
            Hello World
        </Threeco>
    );
};

export default MyComponent;
```

# Documentation

## useThreeco
`useThreeco(setup: (...context?: unknown[]) => object, ...context?: unknown[]): object`

The `useThreeco` hook takes a [`setup`](#setup-function) function as first argument.  
All other arguments (if any) are passed to that setup function.

```javascript
const arg1 = 'Number:';
const arg2 = 42;

useThreeco(
    (label, num) => {
        return {
            onUpdate: deltaTime => {},
            onRender: () => console.log(`${label} ${num++}`)
        };
    },
    arg1,
    arg2
);
```

### Return
The hook returns an object of the following shape:

Key | Description
:--- | :---
`run: () => void` | This function starts the render loop (if it's not already running).
`pause: () => void` | This function pauses the render loop (if it's not already paused).
`setRunning: (running: boolean) => void` | This function starts (`running === true`) or pauses (`running === false`) the render loop.
`isRunning: boolean` | This boolean value indicates if the render loop is currently running or not.

```javascript
const {run, pause, isRunning} = useThreeco(() => ({
    onUpdate: deltaTime => {},
    onRender: () => {},
    autorun: false
}));
```

## Threeco
The `Threeco` component functionality is similar to that of the [`useThreeco`](#usethreeco) hook.  
It can have the following properties:

Property | Description
:--- | :---
`setup` | A mandatory [`setup`](#setup-function) function to setup the scene.
`context` | An optional context that will be passed to the setup function.<br>If the value of this property is an array it will be spreaded.
`isRunning` | An optional flag to control the render loop.

```tsx
<Threeco
    setup={(first, second) => ({onRender: () => {}})} 
    context={['first', 'second']}
    isRunning={true}
/>
```

The component can have children too.

```tsx
<Threeco setup={() => ({onRender: () => {}})}>
    <canvas id="canvas" width="800" height="450"></canvas>
</Threeco>
```

## Setup function
The setup function is used to prepare your scene or canvas and register the listeners you need (`click`, `mousedown`, `touchstart`, ...).  
It may receive arguments (the context).  
The function must then return an object of the following shape:

Key | Description
:--- | :---
`onUpdate?: (deltaTime: number, timestamp: DOMHighResTimeStamp) => void` | A function to update your scene. Time-based values should be multiplied by `deltaTime` (the time in seconds since the last `onUpdate` was called). The second parameter `timestamp` is the timestamp in milliseconds of the last call to `onUpdate`.<br><br>If you don't set `onUpdate`, there won't be a render loop and your scene will render only once (which may be desired if you want a static scene).
`onRender: () => void` | A function that is used to render (or redraw) your scene.<br><br>While `onUpdate` should do all the math, this function should be responsible for displaying everything.<br><br>The `onRender` function will be called after `onUpdate`. If there is no `onUpdate` function, `onRender` will be called only once.
`onUnmount?: () => void` | If your setup added elements to the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) or registered listeners, this function is used to tidy up. It will be called when your component gets unmounted.
`autorun?: boolean` | An optional flag to determine if the render loop should start automatically after the setup. This is `true` by default.
