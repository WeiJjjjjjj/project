<template>
    <div>
        <div class="mui-numbox" data-numbox-min="0">
            <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
            <input
                class="mui-numbox-input"
                ref="input"
                @change="numChange"
                type="number"
                :value="num"
            />
            <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
        </div>
    </div>
</template>

<script>
import mui from "../../libs/mui/js/mui.min.js";
export default {
    props: ["num", "id"],
    methods: {
        numChange() {
            // this.$refs.input
            this.$emit("getCount", {
                id: this.id,
                count: this.$refs.input.value
            });
        }
    },
    mounted() {
        mui(".mui-numbox").numbox();
        // console.log(this.num);
        // console.log(this.id);
    }
};
</script>

<style lang="less" scoped>
</style>