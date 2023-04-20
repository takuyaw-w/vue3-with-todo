<template>
  <!-- ワンカラムレイアウトを作成 -->
  <div class="container">
    <header>
      <div class="header_inner">
        <h1>Todo App</h1>
      </div>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <div class="footer_inner">
        <small>
          <!-- 自分のGitHubAccountへ遷移 -->
          <a href="https://github.com/takuyaw-w" target="_blank" rel="noopener noreferrer">
            @takuyaw-w
          </a>
        </small>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
header {
  padding: 1rem;
  background-color: #f5f5f5;
}
.header_inner {
  width: 1024px;
  margin: 0 auto;
}
main {
  padding: 20px 0;
  width: 1024px;
  margin: 0 auto;
}
footer {
  background-color: #f5f5f5;
  padding: 1rem;
}
.footer_inner {
  width: 1024px;
  margin: 0 auto;
}
</style>
