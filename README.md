This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started Server
next.js server와 metro server 동시 실행할 수 있습니다.
```bash
yarn dev
```

yarn dev로 메트로 서버 후 아래 명령어로 각 OS 별 앱을 실행할 수 있습니다.
```bash
yarn android 
# or
yarn ios
```

## Script
- web 혹은 app에서 스크립트를 실행하고 싶은 경우 위치를 이동할 필요없이 아래와 같이 사용할 수 있습니다.
```bash
yarn @finfriends-frontend/app ~ 
# or
yarn @finfriends-frontend/web ~ 
# or
yarn @finfriends-frontend/common ~ 
```
- 아래 스크립트를 사용하여 전체 코드의 lint를 체크할 수 있습니다.
```bash
yarn lint
```
