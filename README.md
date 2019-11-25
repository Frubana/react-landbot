# react-landbot

>

[![NPM](https://img.shields.io/npm/v/@frubana/react-landbot.svg)](https://www.npmjs.com/package/@frubana/react-landbot)
[![Bundle](https://badgen.net/bundlephobia/min/@frubana/react-landbot)](https://bundlephobia.com/result?p=@frubana/react-landbot@0.1.2) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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

## Props WrapperLandbot
|                |TYPE                          |REQUIRED                         |
|----------------|-------------------------------|-----------------------------|
|image|`string`            |Required           |
|imageClose          |`string`            |Required           |
|children          |`JSX.Element | JSX.Element[]`            |Required           |
|size          |`string`            |Optional           |
|sizeImage          |`string`            |Optional           |
|textColor          |`string`            |Optional           |
|color          |`string`            |Optional           |
|textLabel          |`string`            |Optional           |
|positionBottom          |`string`            |Optional           |
|positionRigth          |`string`            |Optional           |

## Props WrapperIframe
|                |TYPE                          |REQUIRED                         |
|----------------|-------------------------------|-----------------------------|
|image|`string`            |Required           |
|iframe|`string`            |Required           |
|name          |`string`            |Required and unique          |
|header          |`JSX.Element`            |Optional           |
|size          |`string`            |Optional           |
|sizeImage          |`string`            |Optional           |
|textColor          |`string`            |Optional           |
|color          |`string`            |Optional           |
|textLabel          |`string`            |Optional           |
|positionBottom          |`string`            |Optional           |
|positionRigth          |`string`            |Optional           |
|width          |`string (iframe)`            |Optional           |
|heigth          |`string (iframe)`            |Optional           |

## Props WrapperWhatsApp
|                |TYPE                          |REQUIRED                         |
|----------------|-------------------------------|-----------------------------|
|image|`string`            |Required           |
|whatsapp|`string`            |Required           |
|name          |`string`            |Required and unique          |
|callback          |`Function`            |Optional           |
|autoClose          |`boolean`            |Optional           |
|size          |`string`            |Optional           |
|sizeImage          |`string`            |Optional           |
|textColor          |`string`            |Optional           |
|color          |`string`            |Optional           |
|textLabel          |`string`            |Optional           |
|positionBottom          |`string`            |Optional           |
|positionRigth          |`string`            |Optional           |



## License

MIT © [](https://github.com/)
