<template>
  <div>
    <ul class="city-selector">
      <li
        :class="{ isSelected: city.selected }"
        v-for="city in cities"
        :key="city.code"
        @click="selectCity(city)"
      >
        {{ city.label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CitySelector",
  data() {
    return {
      cities: [
        { code: "Seoul", label: "서울", selected: false },
        { code: "Tokyo", label: "도쿄", selected: false },
        { code: "Beijing", label: "북경", selected: false },
        { code: "Moscow", label: "모스크바", selected: false },
        { code: "London", label: "런던", selected: false },
        { code: "Deli", label: "델리", selected: false },
        { code: "Minsk", label: "민스크", selected: false },
        { code: "Hongkong", label: "홍콩", selected: false },
        { code: "Yakutsk", label: "야크추크", selected: false },
      ],
    };
  },
  methods: {
    selectCity(city) {
      city.selected = !city.selected;
      this.$emit("setTargetCity", city);
    },
  },
};
</script>

<style scoped>
.city-selector {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
.city-selector li {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #efefef;
  padding: 0.3em;
  cursor: pointer;
  font-size: 14px;
}
.isSelected {
  background: #fd1d1d;
  color: #fff;
}
</style>
