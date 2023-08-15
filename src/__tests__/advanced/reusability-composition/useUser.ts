import { ref, onMounted } from "vue";
import axios from "axios";

export function useUser(userId: number) {
  const user = ref();

  function fetchUser(id: number) {
    axios.get(`users/${id}`).then((response) => (user.value = response.data));
  }

  onMounted(() => fetchUser(userId));

  return { user };
}
