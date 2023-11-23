// 管理全局options
import {ref, watch} from "vue";
import {read_local_storage, save_local_storage} from "@/utils/local_storage.js";

export const user_options = ref({
    theme: "auto",
    language: "undefined",
});
watch(user_options, () => {
    save_local_storage("user_options", JSON.stringify(user_options.value));
}, {deep: true});

//初始化
export function init_user_options() {
    const r = JSON.parse(read_local_storage("user_options"));
    if (r === null || r === undefined) {
        save_local_storage("user_options", JSON.stringify(user_options.value));
        return;
    }
    for (let key in user_options.value) {
        if (r[key] !== undefined) {
            user_options.value[key] = r[key];
        }
    }
}

