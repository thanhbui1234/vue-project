<!-- <a-skeleton /> -->
<template>
  <div class="container">
    <div class="containerChild" style="width: 376px">
      <div class="image"></div>
      <div class="content-card">
        <a-skeleton />
      </div>
    </div>
    <div class="containerChild" style="width: 376px">
      <div class="image"></div>
      <div class="content-card">
        <a-skeleton />
      </div>
    </div>
    <div class="containerChild" style="width: 376px">
      <div class="image"></div>
      <div class="content-card">
        <a-skeleton />
      </div>
    </div>
    <div class="containerChild" style="width: 376px">
      <div class="image"></div>
      <div class="content-card">
        <a-skeleton />
      </div>
    </div>
    <div class="containerChild" style="width: 376px">
      <div class="image"></div>
      <div class="content-card">
        <a-skeleton />
      </div>
    </div>
    <div class="containerChild" style="width: 376px">
      <div class="image"></div>
      <div class="content-card">
        <a-skeleton />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}
.containerChild {
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  height: 300px !important;
  border-radius: 0px 0px 16px 16px;
}
.image {
  background: linear-gradient(
    180deg,
    rgba(72, 49, 157, 0.2) 18.75%,
    rgba(72, 49, 157, 0) 100%
  );
  height: 250px;
}
.content-card {
  background: linear-gradient(
    180deg,
    rgba(72, 49, 157, 0.2) 18.75%,
    rgba(72, 49, 157, 0) 100%
  );
}
</style>
