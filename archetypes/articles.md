---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
type: post
author: "{{ $.Site.Params.author_name }}"
format: ""
excerpt: ""
featured_image: "/img/default_article.jpg"
categories:
  - "add"
  - "yours"
tags:
  - "tag me"

---

*enjoy your new article*