---
layout: post
title:  "Nginx autoindex"
date:   2014-6-27
categories: Dev
---

```
sudo vi /etc/nginx/sites-enabled/homestead.app
```

###### Add autoindex in the location part

```
location / {
    autoindex on;
    autoindex_exact_size off;
    autoindex_localtime on;
    try_files $uri $uri/ /index.php?$query_string;
}
```

then

```
sudo service nginx reload
```
