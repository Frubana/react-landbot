# react-landbot

>

[![NPM](https://img.shields.io/npm/v/@frubana/react-landbot.svg)](https://www.npmjs.com/package/@frubana/react-landbot)
[![Bundle](https://badgen.net/bundlephobia/min/@frubana/react-landbot)](https://bundlephobia.com/result?p=@frubana/react-landbot@0.0.6) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @frubana/react-landbot
or
yarn add @frubana/react-landbot
```

## Usage

```tsx
import * as React from 'react'

import { WrapperLandbot, WrapperIframe, WrapperWhatsApp } from "@frubana/react-landbot";

class Example extends React.Component {
  render () {
    return (
      <WrapperLandbot image={`you-image`} imageClose={'image-close'}>
      <WrapperIframe
        name="unique_name"
        positionRigth="7rem"
        positionBottom="31px"
        color="#f26522"
        heigth="500px"
        image={'you-image'}
        iframe={'link-to-iframe-landbot'}
      />
      <WrapperWhatsApp
        name="unique_name"
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
