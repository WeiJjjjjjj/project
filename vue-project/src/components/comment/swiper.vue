<template>
    <div>
        <mt-swipe>
            <mt-swipe-item v-for="(item,index) in img" :key="index">
                <img :src="item.src" alt :class="{'fullWidth':fullWidth}" />
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    props: ["img", "fullWidth"]
};
</script>

<style lang="less" scoped>
.mint-swipe {
    height: 200px;
    text-align: center;
    img {
        height: 100%;
    }
}
.fullWidth {
    width: 100%;
    height: 100%;
}
</style>