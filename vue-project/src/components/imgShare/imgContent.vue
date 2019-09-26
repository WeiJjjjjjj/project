<template>
    <div class="imgcontent">
        <div class="header">
            <h1>{{title}}</h1>
            <div>
                <span>发表时间:{{time}}</span>
                <span>浏览次数:{{click}}</span>
            </div>
        </div>
        <div class="img">
            <!-- <vue-preview :slides="imgList"></vue-preview> -->
            <!-- <img
                class="preview-img"
                :key="item.src"
                v-for="(item, index) in imgList"
                :src="item.src"
                height="100"
                @click="$preview.open(index, list)"
            />-->
            <div class="thumbs">
                <vue-preview :slides="imgList"></vue-preview>
            </div>
        </div>
        <comment></comment>
    </div>
</template>

<script>
import comment from "../comment/comment";
import Vue from "vue";
export default {
    data() {
        return {
            id: this.$route.params.id,
            imgList: [
                {
                    src:
                        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564255711870&di=b469a9821397467661e81e1bea82ce5e&imgtype=0&src=http%3A%2F%2Fimg4.dwstatic.com%2Ftv%2F1803%2F385035208855%2F1521080418823.jpg"
                },
                {
                    src:
                        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564255711870&di=161df3b0ce84380de6712414d0ba48c5&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F582483956a9f0ed7291572431fb39de203ec7f7711f08-62hrZk_fw658"
                },
                {
                    src:
                        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564255711869&di=9c1e3632039e729a5e6457170d5ea14e&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2F9e409ff37099ef00557fbcc6577c2043d53be06c.png"
                },
                {
                    src:
                        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564255711869&di=dbd826865b23c4b5cb9b54f5e1c6bd08&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2Fffcdfdf2fcb640efcc6ef24f65eb5d981d28625a.jpg"
                },
                {
                    src:
                        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564255711866&di=03ba27f92febd59eb2a6cece1b937d4c&imgtype=0&src=http%3A%2F%2Fimg4.dwstatic.com%2Ftv%2F1803%2F385035208855%2F1521080437716.jpg"
                },
                {
                    src:
                        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564255711862&di=b680a4d31b0ed7c27edfa28ead88eb61&imgtype=0&src=http%3A%2F%2Fimg.xker.com%2Fxkerfiles%2Fallimg%2F1705%2F1H2563040-2.jpg"
                }
            ],
            message: [
                {
                    id: 1,
                    title: "美丽的风景",
                    click: "10"
                },
                {
                    id: 2,
                    title: "美食",
                    click: "20"
                },
                {
                    id: 3,
                    title: "洗护",
                    click: "30"
                },
                {
                    id: 4,
                    title: "生鲜",
                    click: "40"
                },
                {
                    id: 5,
                    title: "女装",
                    click: "50"
                },
                {
                    id: 6,
                    title: "手机",
                    click: "60"
                },
                {
                    id: 7,
                    title: "包厢",
                    click: "70"
                }
            ],
            title: "",
            time: "",
            click: ""
        };
    },
    components: {
        comment: comment
    },
    created() {
        this.getTime();
        this.getMsg();
        this.getImg();
    },
    methods: {
        getMsg() {
            let newArr = this.message.filter(
                item => item.id === Number(this.id)
            )[0];
            this.title = newArr.title;
            this.click = newArr.click;
        },
        getTime() {
            let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            let hour = date.getHours();
            let min = date.getMinutes();
            let sec = date.getSeconds();
            this.time =
                year +
                "-" +
                month +
                "-" +
                day +
                " " +
                hour +
                ":" +
                min +
                ":" +
                sec;
        },
        getImg() {
            this.imgList.forEach(item => {
                Vue.set(item, "w", 600);
                Vue.set(item, "h", 400);
                Vue.set(item, "msrc", item.src);
            });
        }
    }
};
</script>

<style lang="less" scoped>
.imgcontent {
    padding: 0 10px;

    .header {
        padding: 5px 0;
        h1 {
            padding: 5px 0;
            font-size: 16px;
            color: #226aff;
            text-align: center;
        }
        div {
            display: flex;
            justify-content: space-between;
            span {
                font-size: 12px;
            }
        }
    }
}
.thumbs {
    /deep/ .my-gallery {
        display: flex;
        flex-wrap: wrap;
        figure {
            width: 30%;
            margin: 5px;
            img {
                width: 100%;
            }
        }
    }
}
</style>