<div align="center">
<picture>
<img alt="Branding" src="./public/assets/images/logo.png">
</picture>

[![GitHub Contributors][github_contributors]][github_contributors_url]
[![GitHub Release][github_release]][github_release_url]
[![GitHub License][github_license]][github_license_url]
[![GitHub Issues or Pull Requests][github_issues]][github_issues_url]
[![][github_linkedin]][github_linkedin_url]

##### An online web app where users can read and share books and stories.

**[Official Website][website] &middot; [Request Feature][request_feature] &middot; [Report Bug][report_bug]**

</div>

<details>
<summary>Table of contents</summary>
<ol>

1\. [Overview](#overview) <br>
2\. [Getting Started](#getting-started) <br>
&emsp;&bull; [Prerequisites](#prerequisites) <br>
&emsp;&bull; [Installation](#installation) <br>
3\. [Usage](#usage) <br>
4\. [License](#license) <br>

</ol>
</details>

## Overview

Bookland is an web application that creates a vibrant online community for book lovers and aspiring writers, allows users to both read and share original books and stories, fostering a collaborative environment for literary enthusiasts.

### Technologies

- [![][nextjs]][nextjs_url]
- [![][shadcn]][shadcn_url]
- [![][tailwindcss]][tailwindcss_url]
- [![][prisma]][prisma_url]
- [![][supabase]][supabase_url]
- [![][postgresql]][postgresql_url]

## Getting Started

### Prerequisites

- [Node Package Manager (npm)][npm_url]
- [PostgreSQL][postgresql_url]

### Installation

Follow the below guide to install the project locally:

1. Get requirement keys at [Supabase Dashboard][supabase_dashboard_url], [Google Cloud API & Services][google_cloud_url]

2. Clone the project repository

   ```shell
   git clone https://github.com/TG000/bookland.git
   ```

3. Install npm packages

   ```shell
   npm install
   ```

4. Create an .env file at the root folder

   ```
   # Product
   NODE_ENV="development" # development or production

   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=<your_supabase_url>
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<your_supabase_key>

   # OAuth
   GOOGLE_CLIENT_ID=<your_google_oauth_client_id>
   GOOGLE_CLIENT_SECRET=<your_google_oauth_client_secret>

   # Database
   DATABASE_URL=<your_database_url>
   DIRECT_URL=<your_direct_url>
   ```

5. Setup your database tables with Prisma

   _Feel free to remove the migrations from prisma/migrations before doing this or just leave it as it is._

   ```shell
    npx prisma migrate dev --name <migration_name>
   ```

## Usage

- For development:

```shell
npm run dev
```

- For production:

```shell
npm run start
```

## License

Distributed under the [MIT][mit_url] License. See `LICENSE` for more information.

[github_contributors]: https://img.shields.io/github/contributors/TG000/bookland?color=green
[github_contributors_url]: https://github.com/gicatran/bookland/graphs/contributors
[github_release]: https://img.shields.io/github/v/release/TG000/bookland?color=blue
[github_release_url]: https://github.com/gicatran/bookland/releases
[github_license]: https://img.shields.io/github/license/TG000/bookland?color=blue
[github_license_url]: https://github.com/gicatran/bookland/blob/master/LICENSE
[github_issues]: https://img.shields.io/github/issues/TG000/bookland?color=orange
[github_issues_url]: https://github.com/gicatran/bookland/issues
[github_linkedin]: https://img.shields.io/badge/LinkedIn-@gicatran-blue?logo=linkedin
[github_linkedin_url]: https://www.linkedin.com/in/gicatran/
[website]: http://localhost:3000/
[request_feature]: http://
[report_bug]: http://
[nextjs]: https://img.shields.io/badge/NextJS-black?style=for-the-badge&logo=nextdotjs
[nextjs_url]: https://nextjs.org/
[shadcn]: https://img.shields.io/badge/ShadCN-black?style=for-the-badge&logo=shadcn/ui
[shadcn_url]: https://ui.shadcn.com/
[tailwindcss]: https://img.shields.io/badge/TailwindCSS-161d2d?style=for-the-badge&logo=tailwindcss
[tailwindcss_url]: https://tailwindcss.com/
[prisma]: https://img.shields.io/badge/Prisma-1a202c?style=for-the-badge&logo=prisma
[prisma_url]: https://www.prisma.io/
[supabase]: https://img.shields.io/badge/Supabase-1c1c1c?style=for-the-badge&logo=supabase
[supabase_url]: https://supabase.com/
[postgresql]: https://img.shields.io/badge/PostgreSQL-3c366b?style=for-the-badge&logo=postgresql
[postgresql_url]: https://www.postgresql.org/
[npm_url]: https://www.npmjs.com/
[mit_url]: https://choosealicense.com/licenses/mit/
[supabase_dashboard_url]: https://supabase.com/dashboard/projects
[google_cloud_url]: https://console.cloud.google.com/apis/
