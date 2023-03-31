# Background Image Component

Built to be used with `create-react-app`, `nextjs`, `gatsby`, or `react-static`.

This is a TypeScript/React component that allows you to add a background image to a HTML element with customizable positioning, attachment, and repeat options.

### Demo

[See it in demo](https://react-background-image-demo.vercel.app/)

### Installation

```
npm install --save react-background-image-component
```

### Usage

To use the `BackGroundImage` component in your React application, you need to first import it into the file where you want to use it. You can do this by adding the following import statement:

```
import { BackGroundImage } from 'react-background-image-component';
```

Once you have imported the component, you can use it in your JSX code by adding the <BackGroundImage> tag and passing the required imgUrl prop as shown below:

```
import { BackGroundImage } from 'react-background-image-component';

<BackGroundImage imgUrl={imgUrl}>
  // optional children elements
</BackGroundImage>

```

You can also pass in any of the optional props (attatchment, position, repeat, size) if you want to customize the background image further.

```
import { BackGroundImage } from 'react-background-image-component';

<BackGroundImage
  imgUrl={imgUrl}
  attatchment="bg-scroll"
  position="bg-center"
  repeat="bg-repeat"
  size="bg-auto"
>
  // optional children elements
</BackGroundImage>
```
