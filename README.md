# react-landbot

>

[![NPM](https://img.shields.io/npm/v/@frubana/react-landbot.svg)](https://www.npmjs.com/package/@frubana/react-landbot)
[![Bundle](https://badgen.net/bundlephobia/min/@frubana/react-landbot)](https://bundlephobia.com/result?p=@frubana/react-landbot@0.0.3) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-landbot
or
yarn add react-landbot
```

## Usage

```tsx
import * as React from 'react'

import { WrapperLandbot, WrapperIframe, WrapperWhatsApp } from "react-landbot";

class Example extends React.Component {
  render () {
    return (
      <WrapperLandbot image={`you-image`}>
      <WrapperIframe
        color="green"
        heigth="500px"
        image={'you-image'}
        iframe={'link-to-iframe-landbot'}
      />
      <WrapperWhatsApp
        color="blue"
        whatsapp={'link-to-WhatsApp'}
        image={'you-image'}
      />
      </WrapperLandbot>
    )
  }
}
```

## License

MIT © [](https://github.com/)
