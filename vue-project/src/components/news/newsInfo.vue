<template>
    <div class="newsShow">
        <p>{{news.title}}</p>
        <div class="foot">
            <span>浏览时间：{{news.add_time}}</span>
            <span>浏览次数：{{news.click}}</span>
        </div>
        <hr />
        <div class="content">{{news.content}}</div>
        <comment></comment>
    </div>
</template>

<script>
import comment from "../comment/comment.vue";
export default {
    data() {
        return {
            id: this.$route.params.id,
            news: {},
            msg: [
                {
                    id: "1",
                    title: "习近平会见全国退役军人工作会议代表",
                    click: "1",
                    add_time: "2015-04-16 16:24:60",
                    content: "xxxxxxx"
                },
                {
                    id: "2",
                    title: "傅园慧成绩下滑因上综艺？请理解运动员的选择",
                    click: "2",
                    add_time: "2015-04-16 16:24:60",
                    content: "xxxxxxx"
                },
                {
                    id: "3",
                    title: "花生芽不能预防心脑血管疾病，也不能抗癌",
                    click: "3",
                    add_time: "2015-04-16 16:24:60",
                    content: "xxxxxxx"
                }
            ]
        };
    },
    components: {
        "comment": comment
    },
    methods: {
        getNews() {
            // this.news = this.msg.map(item => {
            //     item.id === this.id;
            // });

            // this.news = this.msg.forEach(item => {
            //     item.id === this.id;
            // });
            this.news = this.msg.filter(item => item.id === this.id)[0];
            // console.log(this.news);
            // console.log(typeof this.news);
            // for (let i = 0; i < this.msg.length; i++) {
            //     if (this.id === this.msg[i].id) {
            //         this.news.id = this.msg[i].id;
            //         this.news.title = this.msg[i].title;
            //         this.news.add_time = this.msg[i].add_time;
            //         this.news.click = this.msg[i].click;
            //         this.news.content = this.msg[i].content;
            //     }
            // }
        }
    },
    created() {
        this.getNews();
    }
};
</script>

<style lang="less" scoped>
.newsShow {
    p {
        text-align: center;
    }
    padding: 0 10px;
    p {
        font-size: 14px;
        padding: 10px 0;
        margin: 0;
    }
    .foot {
        display: flex;
        justify-content: space-between;
        color: #226aff;
        font-size: 12px;
    }
    padding-bottom: 50px;
}
</style>