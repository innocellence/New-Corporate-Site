---
title: Sitemap
layout: page
ref: sitemap
exclude: true
redirect_from:
  - /d/sitemap.html
  - /sitemap.html
---


## Sitemap

View this page in <a href="{{ site.baseurl }}/sitemap.xml" target="_blank"><code>.xml</code></a> format.

---
  
<div class="grid grid--3">
  <div class="card t no--h__pad">
    <h4>{{ site.data.menus.en.main.title }}</h4>
    <ul>
      {% for item in site.data.menus.en.main.items %}
      <li><a href="{{ site.baseurl }}{{ item[1].url }}" title="{{ item[1].name }}">{{ item[1].name }}</a></li>
      {% endfor %}
    </ul>
  </div>
  <div class="card t no--h__pad">
    <h4>{{ site.data.menus.en.updates.title }}</h4>
    <ul>
      {% for item in site.data.menus.en.updates.items %}
      <li><a href="{{ site.baseurl }}{{ item[1].url }}" title="{{ item[1].name }}">{{ item[1].name }}</a></li>
      {% endfor %}
    </ul>
  </div>
  <div class="card t no--h__pad">
    <h4>{{ site.data.menus.en.legal.title }}</h4>
    <ul>
      {% for item in site.data.menus.en.legal.items %}
      <li><a href="{{ site.baseurl }}{{ item[1].url }}" title="{{ item[1].name }}">{{ item[1].name }}</a></li>
      {% endfor %}
    </ul>
  </div>
</div>

---
  
<div class="grid grid--3">
  <div class="card t no--h__pad">
    <h4>{{ site.data.menus.zh.main.title }}</h4>
    <ul>
      {% for item in site.data.menus.zh.main.items %}
      <li><a href="{{ site.baseurl }}{{ item[1].url }}" title="{{ item[1].name }}">{{ item[1].name }}</a></li>
      {% endfor %}
    </ul>
  </div>
  <div class="card t no--h__pad">
    <h4>{{ site.data.menus.zh.updates.title }}</h4>
    <ul>
      {% for item in site.data.menus.zh.updates.items %}
      <li><a href="{{ site.baseurl }}{{ item[1].url }}" title="{{ item[1].name }}">{{ item[1].name }}</a></li>
      {% endfor %}
    </ul>
  </div>
  <div class="card t no--h__pad">
    <h4>{{ site.data.menus.zh.legal.title }}</h4>
    <ul>
      {% for item in site.data.menus.zh.legal.items %}
      <li><a href="{{ site.baseurl }}{{ item[1].url }}" title="{{ item[1].name }}">{{ item[1].name }}</a></li>
      {% endfor %}
    </ul>
  </div>
</div>

---
  
<div class="grid grid--3">
  <div class="card t no--h__pad">
    <h4>{{ site.data.menus.jp.main.title }}</h4>
    <ul>
      {% for item in site.data.menus.jp.main.items %}
      <li><a href="{{ site.baseurl }}{{ item[1].url }}" title="{{ item[1].name }}">{{ item[1].name }}</a></li>
      {% endfor %}
    </ul>
  </div>
  <div class="card t no--h__pad">
    <h4>{{ site.data.menus.jp.updates.title }}</h4>
    <ul>
      {% for item in site.data.menus.jp.updates.items %}
      <li><a href="{{ site.baseurl }}{{ item[1].url }}" title="{{ item[1].name }}">{{ item[1].name }}</a></li>
      {% endfor %}
    </ul>
  </div>
  <div class="card t no--h__pad">
    <h4>{{ site.data.menus.jp.legal.title }}</h4>
    <ul>
      {% for item in site.data.menus.jp.legal.items %}
      <li><a href="{{ site.baseurl }}{{ item[1].url }}" title="{{ item[1].name }}">{{ item[1].name }}</a></li>
      {% endfor %}
    </ul>
  </div>
</div>

--- 

### News

<ul>
  {% assign n = site.news | reverse %} 
  {% for item in n %}
  <li><a href="{{ site.baseurl }}{{ item.url }}" title="{{ item.title }}">{{ item.title }}</a></li>
  {% endfor %}
</ul>

--- 

### Whitepapers

<ul>
  {% assign w = site.whitepaper | reverse %}
  {% for item in w %}
  <li><a href="{{ site.baseurl }}{{ item.url }}" title="{{ item.title }}">{{ item.title }}</a></li>
  {% endfor %}
</ul>