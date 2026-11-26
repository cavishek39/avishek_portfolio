import Head from 'next/head'
import Script from 'next/script'

const Admin = () => (
  <>
    <Head>
      <link href='/admin/config.yml' type='text/yaml' rel='cms-config-url' />
    </Head>
    <Script
      src='https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js'
      strategy='afterInteractive'
    />
  </>
)

Admin.noSiteTheme = true

export default Admin
