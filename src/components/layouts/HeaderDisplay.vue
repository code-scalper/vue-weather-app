<template>
  <header class="header">
    <h2>Weather Application</h2>
    <p>{{ userInfo.name }}님 반갑습니다.</p>
  </header>
</template>

<script>
export default {
  name: "HeaderDisplay",
  props: {
    userInfo: {
      type: Object,
      default() {
        return {
          id: "guest",
          name: "Guest",
        };
      },
    },
  },
};
</script>

<style scoped>
.header {
  background: linear-gradient(25deg, #833ab4, #fd1d1d, #fcb045);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1em;
}
.header h2 {
  color: #fff;
}
.header p {
  color: #fff;
  font-size: 12px;
}
</style>
