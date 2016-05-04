---
layout: post
title:  "Upgrade Node.js and NPM"
date:   2014-6-25
categories: Tools
---

###### upgrade Node.js

```bash
sudo npm cache clean -f
```

```bash
sudo npm install n -g
```

```bash
sudo n stable
```

or

```bash
sudo n 6.0.0
```

###### upgrade NPM

```bash
sudo npm install npm -g
```

###### upgrade packages

```bash
npm outdated -g
```

```bash
npm update -g
```
