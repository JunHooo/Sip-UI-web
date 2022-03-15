<template>
  <div class="topAndBanner">
    <Nav/>
    <div class="banner">
      <h1>Sip-UI</h1>
      <h2>为极简而生</h2>
      <p class="actions">
        <a href="https://github.com">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-git"></use>
          </svg>
          GitHub</a>
        <router-link to="/Doc/Intro">
          <svg class="icon" aria-hidden="true" style="margin-right:8px">
            <use xlink:href="#icon-action"></use>
          </svg>
          开始
        </router-link>
      </p>
    </div>
  </div>
  <div class="document">
    <div class="vue">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-Vue"></use>
      </svg>
      <div class="text">
        <h2>基于Vue3</h2>
        <p>这是一段话使用了Vue3</p>
      </div>
    </div>
    <div class="ts">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-ts"></use>
      </svg>
      <div class="text">
        <h2>基于TypeScript</h2>
        <p>这也是一段话</p>
      </div>
    </div>
    <div class="light">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-light"></use>
      </svg>
      <div class="text">
        <h2>代码易读</h2>
        <p>这也是一段话</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Nav from '../components/Nav.vue';

export default {
  components: {Nav},
};
</script>
<style lang="scss" scoped>
.topAndBanner {
  background: linear-gradient(145deg, rgba(2, 0, 36, 1) 0%, rgba(157, 245, 158, 1) 0%, rgba(180, 239, 244, 1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
  //border-bottom-left-radius: 50% 40px;
  //border-bottom-right-radius: 50% 40px;
  color: rgb(68, 101, 129);
}

.banner {
  padding: 60px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > h1, h2, p {
    margin: 12px 0;
  }

  > .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: rgb(102, 177, 255);
      color: white;
      display: inline-block;
      height: 28px;
      line-height: 28px;
      border-radius: 14px;
      padding: 0 8px;
    }
  }
}

.document {
  display: flex;
  width: 100%;
  padding:40px 120px;
  justify-content: space-between;
  svg{
    height:60px;
    width: 60px;
  }
  > .vue{
    display: flex;
    flex-direction: row;
  }
  > .ts{
    display: flex;
    flex-direction: row;
  }
  > .light{
    display: flex;
    flex-direction: row;
  }
  .text{


  }
}
@media (max-width:1200px ) {
  .document{
    flex-wrap: wrap;
    > .vue{
      padding: 10px 0;
    }
    > .ts{
      padding: 10px 0;
    }
    > .light{
      padding: 10px 0;
    }
  }
}
@media (max-width:600px ) {
  .document{
    flex-wrap: wrap;
    padding:50px 20px;
    justify-content: center;
    > .vue{
      padding: 8px 0;
      width: 250px;
    }
    > .ts{
      padding: 8px 0;
      width: 250px;

    }
    > .light{
      padding: 8px 0;
      width: 250px;
    }
  }
}
</style>