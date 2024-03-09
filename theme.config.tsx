import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>دانشنامه نادین سافت</span>,
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
