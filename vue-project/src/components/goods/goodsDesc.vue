<template>
    <div class="goodsDesc">
        <h1>{{title}}</h1>
        <hr />
        {{content}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: [
                {
                    id: 1,
                    title: "小米 红米Redmi Note7 幻彩渐变AI双摄 4GB+64GB",
                    content: "暂无数据"
                },
                {
                    id: 2,
                    title: "荣耀V20 游戏手机 麒麟980芯片 魅眼全视屏",
                    content: "暂无数据"
                },
                {
                    id: 3,
                    title: "荣耀20 4800万超广角AI四摄 3200W美颜自拍",
                    content: "暂无数据"
                },
                {
                    id: 4,
                    title: "ROG电竞游戏手机 8GB+128GB 黑色 骁龙845",
                    content: "暂无数据"
                },
                {
                    id: 5,
                    title: "小米9 4800万超广角三摄 6GB+128GB全息幻彩蓝",
                    content: "暂无数据"
                }
            ],
            id: this.$route.params.id,
            title: "",
            content: ""
        };
    },
    created() {
        this.getContent();
    },
    methods: {
        getContent() {
            let content = this.msg.filter(
                item => item.id === Number(this.id)
            )[0];
            this.title = content.title;
            this.content = content.content;
        }
    }
};
</script>

<style lang="less" scoped>
.goodsDesc{
    h1{
        font-size: 13px;
        text-align: center;
        margin: 10px 0;
        color: red;
    }
}
</style>