import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <img src="https://nadinsoft.com/wp-content/themes/nadin/img/general-logo.png"  alt="logo" width={300} height={150}/>,
  direction:'rtl',
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'دانشنامه نادین سافت',
  },
  head: (
      <link rel="icon" type="image/x-icon" href="https://nadinsoft.com/wp-content/uploads/2021/07/fav.png"/>
  )
}

export default config
