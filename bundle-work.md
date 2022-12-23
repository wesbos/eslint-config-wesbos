ESLint configs can't have dependencies, so we rely on people using peerDeps. which is

1. Hard to install. We need to use npx install-peerDeps just to use it
2. Makes unnecessary installs - you shouldn't have to install the react or typescript deps if you aren't using them in your project, but right now it's hard to give people an easy install command for their specific type of project.

I'd love to offer:

1. Plain ol JavaSCript + Node.js
2. 1, but in TypeScript
3. React in JavaSCript
4. 3, but in TypeScript
5. This will open it up for other frameworks like Svelte and custom elements

Investigate if we can bundle parts of this config so we don't need all the peer deps.

There is:

1. Configs
2. Plugins

I'd imagine the configs could be easily merged.

The plugins are actual JS - so could potentially be "bundled"

Collecting info: https://twitter.com/wesbos/status/1605933451802284034
