<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: 张泽涛
 * @LastEditors: 张泽涛
 * @LastEditTime: 2021-04-26 23:17:33
-->
<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>
        <article-meta :article="article" />
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12" v-html="article.body"></div>
      </div>

      <hr />

      <div class="article-actions">
        <article-meta :article="article" />
      </div>

      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <article-comments :article="article"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MartdownIt from "markdown-it";
import { getArticle } from "@/api/article";
import ArticleMeta from "./components/article-meta";
import ArticleComments from "./components/article-comments";
export default {
  name: "ArticleIndex",
  async asyncData({ params }) {
    const { data } = await getArticle(params.slug);
    const { article } = data;
    const md = new MartdownIt();
    article.body = md.render(article.body);
    return {
      article,
    };
  },
  components: {
    ArticleMeta,
    ArticleComments
  },
  head() {
    return {
      title: `${this.article.title} - RealWord`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.description,
        },
      ],
    };
  },
};
</script>

<style>
</style>