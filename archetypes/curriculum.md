---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
author: "{{ $.Site.Params.author_name }}"
format: "curriculum"
excerpt: ""

---

*tell me about yourself*