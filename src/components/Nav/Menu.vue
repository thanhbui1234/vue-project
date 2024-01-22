<template>
  <div class="contaienrMenu">
    <router-link to="/">All</router-link>
    <p>Gaming</p>
    <p>Thoughts</p>
    <p>Music</p>
    <p>Thrillers</p>
    <p>Mixes</p>
    <p>Avatar</p>
    <p>Film criticisma</p>
    <p>Korean dramas</p>
    <p>Characters</p>
    <p>Eating</p>
  </div>
</template>

<script>
export default {
  name: "menu-bar",
};
</script>
<style lang="scss">
.contaienrMenu {
  display: flex;
  justify-content: end;

  margin-top: 35px;
  width: 100%;
  display: flex;
  white-space: nowrap;
  width: 1500px;
  padding-left: 150px;
  gap: 54px;
  color: rgba(255, 255, 255, 0.6);
  font-family: SF Pro Text;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 146.667% */
  letter-spacing: -0.408px;
  p:hover {
    cursor: pointer;
    background: radial-gradient(
      50% 128.57% at 50% -36.61%,
      #8015a7 0%,
      rgba(97, 54, 144, 0) 100%
    );
  }
}
</style>
