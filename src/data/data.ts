import { ref, watch } from "vue";

export const api_key = ref<string>("");
api_key.value = localStorage.getItem("api_key") || "";

watch(api_key, (value) => {
  localStorage.setItem("api_key", value);
});
