<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: 张泽涛
 * @LastEditors: 张泽涛
 * @LastEditTime: 2021-04-26 20:30:23
-->
<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item" v-if="user">
                <nuxt-link 
                  :to="{ name: 'home',query: { tab :'your_feed' }}" 
                  class="nav-link" 
                  exact
                  :class="{ active: tab === 'your_feed' }"
                >Your Feed</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link 
                  exact
                  :to="{ name: 'home',query: { tab:'global_feed' }}"
                  :class="{ active: tab === 'global_feed' }"  
                  class="nav-link"
                >Global Feed</nuxt-link>
              </li>
              <li class="nav-item" v-if="tag">
                <nuxt-link 
                  exact
                  :to="{ name: 'home',query: { tab:'tag',tag:tag }}"
                  :class="{ active: tab === 'tag' }"  
                  class="nav-link"
                >#{{ tag }}</nuxt-link>
              </li>
            </ul>
          </div>

          <div
            class="article-preview"
            v-for="article in articles"
            :key="article.slug"
          >
            <div class="article-meta">
              <nuxt-link
                :to="{
                  name: 'profile',
                  params: { username: article.author.username },
                }"
                ><img :src="article.author.image"
              /></nuxt-link>
              <div class="info">
                <nuxt-link
                  class="author"
                  :to="{
                    name: 'profile',
                    params: { username: article.author.username },
                  }"
                  >{{ article.author.username }}</nuxt-link
                >
                <span class="date">{{ article.createdAt | date('MMM DD,YYYY')}}</span>
              </div>
              <button
                class="btn btn-outline-primary btn-sm pull-xs-right"
                :class="{ active: article.favorited }"
                :disabled="article.favoriteDisabled"
                @click="onFavorite(article)"
              >
                <i class="ion-heart"></i> {{ article.favoritesCount }}
              </button>
            </div>
            <nuxt-link
              :to="{ name: 'article', params: { slug: article.slug } }"
              class="preview-link"
            >
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span>Read more...</span>
            </nuxt-link>
          </div>

          <!-- 分页列表 -->
          <nav>
            <ul class="pagination">
              <li
                class="page-item"
                v-for="item in totalPage"
                :key="item"
                :class="{ active: item === page }"
              >
                <nuxt-link
                  :to="{ name: 'home', query: { page: item, tag: $route.query.tag, tab: tab } }"
                  class="page-link"
                  >{{ item }}</nuxt-link
                >
              </li>
            </ul>
          </nav>
          <!-- /分页列表 -->
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <nuxt-link
                v-for="item in tags"
                :key="item"
                :to="{ name: 'home', query: { tab: 'tag', tag: item } }"
                class="tag-pill tag-default"
              >{{ item }}</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getArticles,getFeedArticles, addFavorite,deleteFavorite } from "@/api/article";
import { getTags } from "@/api/tag";
export default {
  name: "HomeIndex",
  async asyncData({ query,store }) {
    const page = Number.parseInt(query.page || 1);
    const limit = Number.parseInt(query.limit || 10);
    const { tag,tab = 'global_feed' } = query
    const loadArticles = store.state.user && tag === 'your_feed'? getFeedArticles: getArticles
    const [articleRes, tagRes] = await Promise.all([
      loadArticles({
        limit,
        offset: (page - 1) * limit,
        tag,
      }),
      getTags(),
    ]);
    const { articles, articlesCount } = articleRes.data;
    const { tags } = tagRes.data;
    articles.forEach(article=> article.favoriteDisabled = false)
    return {
      limit,
      page,
      articles,
      articlesCount,
      tags,
      tag,
      tab
    };
  },
  computed: {
    ...mapState(['user']),
    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    },
  },
  watchQuery: ["page","tag","tab"],
  methods: {
    async onFavorite(article){
      article.favoriteDisabled = true
      if(article.favorited){
        // 取消点赞
        await deleteFavorite(article.slug)
        article.favorited = false;
        article.favoritesCount -= 1;
      }else{
        // 添加点赞
        await addFavorite(article.slug)
        article.favorited = true
        article.favoritesCount += 1;
      }
      article.favoriteDisabled = false
    }
  }
};
</script>

<style>
</style>