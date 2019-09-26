<template>
    <div>
        <div class="mui-numbox" data-numbox-min="1">
            <!-- "-"按钮，点击可减小当前数值 -->
            <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
            <input class="mui-numbox-input" type="number" @change="numChange" />
            <!-- "+"按钮，点击可增大当前数值 -->
            <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
        </div>
    </div>
</template>

<script>
import mui from "../../libs/mui/js/mui.min.js";
export default {
    data() {
        return {
            input: 1
        };
    },
    props: ["max"],
    methods: {
        numChange() {
            this.$emit(
                "getCount",
                mui(".mui-numbox")
                    .numbox()
                    .getValue()
            );
        },
        maxChange() {
            mui(".mui-numbox")
                .numbox()
                .setOption("max", this.max);
        }
    },
    watch: {
        max(v, o) {
            mui(".mui-numbox")
                .numbox()
                .setOption("max", v);
        }
    },
    mounted() {
        this.numChange();
        mui(".mui-numbox").numbox();
        this.maxChange();
    }
};
</script>

<style lang="less" scoped>
</style>