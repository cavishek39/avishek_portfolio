# Avishek Chatterjee — Portfolio

Personal portfolio built with Next.js, React, and styled-components. The site is
exported as static files for deployment on AWS Amplify Hosting.

## Development

- Use Node.js 20.9 or newer.
- Install dependencies with `yarn install`.
- Start the development server with `yarn dev`.
- Create a static production build with `yarn build`. The deployable files are
  written to `out/`.

## Updating the resume

Open `/admin/` on the Netlify site and sign in with a GitHub account that can
write to `cavishek39/avishek_portfolio`. In **Site settings → Resume**, upload
the latest PDF and publish. Publishing commits the PDF and its active path to
`main`, which triggers the connected Netlify and AWS Amplify deployments.

The first-time setup requires a GitHub OAuth app with callback URL
`https://api.netlify.com/auth/done`. Install its client ID and client secret in
the Netlify site's **Project configuration → Security → OAuth → Authentication
providers** under GitHub. Keep the client secret in Netlify settings; do not add
it to this repository. The CMS uses GitHub repository permissions for access.
