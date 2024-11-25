# Website

私たちについてや活動内容、イベント告知、入会申請をまとめたサークルのウェブサイトです🧸

## Tech Stack

| Environments                | Languages                  | Linters                                                                     | Frameworks   | Libraries                                                                                             | Testing                             | CI/CD                 | PaaS                                                            |
| :-------------------------- | :------------------------- | :-------------------------------------------------------------------------- | :----------- | :---------------------------------------------------------------------------------------------------- | :---------------------------------- | :-------------------- | :-------------------------------------------------------------- |
| ![node-logo]<br>![npm-logo] | ![ts-logo]<br>![sass-logo] | ![eslint-logo]<br>![stylelint-logo]<br>![prettier-logo]<br>![lefthook-logo] | ![next-logo] | ![react-logo]<br>![tailwind-logo]<br>![next-themes-logo]<br>![swr-logo]<br>![zod-logo]<br>![rhf-logo] | ![vitest-logo]<br>![storybook-logo] | ![githubactions-logo] | ![vercel-logo]<br>![cloudflarepages-logo]<br>![cloudflare-logo] |

[node-logo]: https://img.shields.io/badge/-Node.js-5FA04E.svg?logo=nodedotjs&style=flat&logoColor=ffffff
[npm-logo]: https://img.shields.io/badge/-npm-CB3837.svg?logo=npm&style=flat&logoColor=ffffff
[eslint-logo]: https://img.shields.io/badge/-ESLint-4B32C3.svg?logo=eslint&style=flat&logoColor=ffffff
[stylelint-logo]: https://img.shields.io/badge/-Stylelint-263238.svg?logo=stylelint&style=flat&logoColor=ffffff
[prettier-logo]: https://img.shields.io/badge/-Prettier-F7B93E.svg?logo=prettier&style=flat&logoColor=000000
[lefthook-logo]: https://img.shields.io/badge/-Lefthook-FF1E1E.svg?logo=lefthook&style=flat&logoColor=000000
[ts-logo]: https://img.shields.io/badge/-TypeScript-3178C6.svg?logo=typescript&style=flat&logoColor=ffffff
[sass-logo]: https://img.shields.io/badge/-Sass-CC6699.svg?logo=sass&style=flat&logoColor=ffffff
[next-logo]: https://img.shields.io/badge/-Next.js-000000.svg?logo=nextdotjs&style=flat&logoColor=ffffff
[react-logo]: https://img.shields.io/badge/-React-61DAFB.svg?logo=react&style=flat&logoColor=000000
[tailwind-logo]: https://img.shields.io/badge/-Tailwind%20CSS-06B6D4.svg?logo=tailwindcss&style=flat&logoColor=ffffff
[next-themes-logo]: https://img.shields.io/badge/P-next--themes-000000.svg?logo=&style=flat&logoColor=ffffff&labelColor=000000
[swr-logo]: https://img.shields.io/badge/-SWR-000000.svg?logo=swr&style=flat&logoColor=ffffff
[zod-logo]: https://img.shields.io/badge/-Zod-3E67B1.svg?logo=zod&style=flat&logoColor=ffffff
[rhf-logo]: https://img.shields.io/badge/-React%20Hook%20Form-EC5990.svg?logo=reacthookform&style=flat&logoColor=ffffff
[vitest-logo]: https://img.shields.io/badge/-Vitest-6E9F18.svg?logo=vitest&style=flat&logoColor=ffffff
[storybook-logo]: https://img.shields.io/badge/-Storybook-FF4785.svg?logo=storybook&style=flat&logoColor=ffffff
[githubactions-logo]: https://img.shields.io/badge/-GitHub%20Actions-2088FF.svg?logo=githubactions&style=flat&logoColor=ffffff
[vercel-logo]: https://img.shields.io/badge/-Vercel-000000.svg?logo=vercel&style=flat&logoColor=ffffff
[cloudflarepages-logo]: https://img.shields.io/badge/-Cloudflare%20Pages-F38020.svg?logo=cloudflarepages&style=flat&logoColor=ffffff
[cloudflare-logo]: https://img.shields.io/badge/-Cloudflare-F38020.svg?logo=cloudflare&style=flat&logoColor=ffffff

## Architecture

イベント告知やそのほかの資料について、データベースの使用はオーバーエンジニアリング気味なため、このレポジトリのフォルダにmarkdownファイルを作り、それをHTMLにパースする構成となる。

![architecture markdown](./docs/images/architecture-markdown.png)

入会申請の通知は[Discord Webhook](https://discord.com/developers/docs/resources/webhook#execute-webhook)を利用する。

![architecture newcomer](./docs/images/architecture-newcomer.png)

## Development

1. [必須](#必須)
2. [環境変数](#環境変数)
3. [コマンド](#コマンド)

### 必須

```conf
node = ">=20.18"
npm = ">=10.9"
```

> [!TIP]
>
> 詳細は[`.prototools`](./.prototools)を参照する。

### 環境変数

```ini

```

> [!TIP]
>
> 詳細は[`.env.example`](./.env.example)を参照する。

### コマンド

#### パッケージのインストール

```sh
npm i
```

> [!IMPORTANT]
>
> 初回インストールの後（保存時のフォーマットが動作しない場合）は、VS Code (IDE)を再起動する。

> [!NOTE]
>
> 将来的にLinterとFormatterは、ESLintとPrettierの構成から[Biome](https://biomejs.dev)に移行したい。ただし、設定項目を照らし合わせて互換性をチェックする必要がある。

#### 開発サーバの起動

```sh
npm run dev
```

#### リンターのチェック

```sh
npm run lint
```

#### コードのフォーマット

```sh
npm run format
```

#### UIコンポーネントのテスト

```sh
npm run sb
```

#### その他のテスト

```sh
npm run test
```
