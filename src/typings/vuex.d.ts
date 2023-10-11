import { ComponentCustomProperties } from 'vue';
import { Store } from 'vuex';

declare module '@vue/runtime-core' {
    // 声明自己的 index state
    interface State {
        count: number;
    }

    // 为 `this.$index` 提供类型声明
    interface ComponentCustomProperties {
        $store: Store<State>;
    }
}
