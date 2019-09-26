<template>
    <div class="comment">
        <div class="edit">
            <h1>发表评论</h1>
            <hr />
            <textarea name placeholder="请输入评论的内容" v-model="submitMsg"></textarea>
            <mt-button type="primary" size="large" @click="submit">提交</mt-button>
        </div>
        <div class="othersMsg" v-for="(item,index) in comment" :key="index">
            <div class="wape">
                <div class="grey">
                    <div>
                        <span>第{{index+1}}楼</span>
                        <span>用户:{{item.user_name}}</span>
                    </div>
                    <span>发表时间: {{item.add_time}}</span>
                </div>
                <div>
                    <p>{{item.content}}</p>
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="addComment">加载更多</mt-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            commentAll: [
                {
                    page: 1,
                    msg: [
                        {
                            user_name: "张三",
                            add_time: "2019-4-11 12:12:12",
                            content: "真美啊"
                        },
                        {
                            user_name: "李四",
                            add_time: "2019-4-12 12:12:13",
                            content: "蜗天下第一"
                        },
                        {
                            user_name: "王五",
                            add_time: "2019-4-13 12:12:14",
                            content: "太帅了"
                        },
                        {
                            user_name: "张飞",
                            add_time: "2019-4-14 12:12:15",
                            content: "vue前端框架"
                        },
                        {
                            user_name: "关羽",
                            add_time: "2019-4-15 12:12:16",
                            content: "react框架"
                        },
                        {
                            user_name: "李白",
                            add_time: "2019-4-16 12:12:17",
                            content: "angular框架"
                        },
                        {
                            user_name: "张三",
                            add_time: "2019-4-11 12:12:12",
                            content: "真美啊"
                        },
                        {
                            user_name: "李四",
                            add_time: "2019-4-12 12:12:13",
                            content: "蜗天下第一"
                        },
                        {
                            user_name: "李四",
                            add_time: "2019-4-12 12:12:13",
                            content: "蜗天下第一"
                        },
                        {
                            user_name: "李四",
                            add_time: "2019-4-12 12:12:13",
                            content: "蜗天下第一"
                        }
                    ]
                },
                {
                    page: 2,
                    msg: [
                        {
                            user_name: "张三",
                            add_time: "2019-4-11 12:12:12",
                            content: "真美啊"
                        },
                        {
                            user_name: "李四",
                            add_time: "2019-4-12 12:12:13",
                            content: "蜗天下第一"
                        },
                        {
                            user_name: "王五",
                            add_time: "2019-4-13 12:12:14",
                            content: "太帅了"
                        },
                        {
                            user_name: "张飞",
                            add_time: "2019-4-14 12:12:15",
                            content: "vue前端框架"
                        },
                        {
                            user_name: "关羽",
                            add_time: "2019-4-15 12:12:16",
                            content: "react框架"
                        },
                        {
                            user_name: "李白",
                            add_time: "2019-4-16 12:12:17",
                            content: "angular框架"
                        },
                        {
                            user_name: "张三",
                            add_time: "2019-4-11 12:12:12",
                            content: "真美啊"
                        },
                        {
                            user_name: "李四",
                            add_time: "2019-4-12 12:12:13",
                            content: "蜗天下第一"
                        },
                        {
                            user_name: "李四",
                            add_time: "2019-4-12 12:12:13",
                            content: "蜗天下第一"
                        },
                        {
                            user_name: "李四",
                            add_time: "2019-4-12 12:12:13",
                            content: "蜗天下第一"
                        }
                    ]
                },
                {
                    page: 3,
                    msg: [
                        {
                            user_name: "张三",
                            add_time: "2019-4-11 12:12:12",
                            content: "真美啊"
                        },
                        {
                            user_name: "李四",
                            add_time: "2019-4-12 12:12:13",
                            content: "蜗天下第一"
                        },
                        {
                            user_name: "王五",
                            add_time: "2019-4-13 12:12:14",
                            content: "太帅了"
                        },
                        {
                            user_name: "张飞",
                            add_time: "2019-4-14 12:12:15",
                            content: "vue前端框架"
                        },
                        {
                            user_name: "关羽",
                            add_time: "2019-4-15 12:12:16",
                            content: "react框架"
                        },
                        {
                            user_name: "李白",
                            add_time: "2019-4-16 12:12:17",
                            content: "angular框架"
                        },
                        {
                            user_name: "张三",
                            add_time: "2019-4-11 12:12:12",
                            content: "真美啊"
                        },
                        {
                            user_name: "李四",
                            add_time: "2019-4-12 12:12:13",
                            content: "蜗天下第一"
                        },
                        {
                            user_name: "李四",
                            add_time: "2019-4-12 12:12:13",
                            content: "蜗天下第一"
                        },
                        {
                            user_name: "李四",
                            add_time: "2019-4-12 12:12:13",
                            content: "蜗天下第一"
                        }
                    ]
                }
            ],
            comment: [],
            currentPage: 1,
            submitMsg: "",
            userName: "略略略"
        };
    },
    created() {
        this.getCommentList();
    },
    methods: {
        addComment() {
            this.currentPage++;
            if (this.currentPage > 3) return;
            this.comment = this.comment.concat(
                this.commentAll.filter(
                    item => item.page === this.currentPage
                )[0].msg
            );
        },
        getCommentList() {
            this.comment = this.commentAll[0].msg;
            console.log(this.comment);
        },
        submit() {
            if (this.submitMsg === "") return false;
            let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            let hour = date.getHours();
            let min = date.getMinutes();
            let sec = date.getSeconds();
            let time =
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
            this.comment.unshift({
                add_time: time,
                content: this.submitMsg,
                user_name: this.userName
            });
            this.submitMsg = "";
        }
    }
};
</script>

<style lang="less" scoped>
.comment {
    margin: 10px 0;
    .edit {
        h1 {
            font-size: 16px;
        }
        textarea {
            font-size: 12px;
            height: 85px;
            margin: 0;
        }
    }
    .othersMsg {
        .wape {
            margin: 10px 0;
            .grey {
                background-color: #ccc;
                font-size: 14px;
                display: flex;
                justify-content: space-between;
                span:nth-child(1) {
                    padding-left: 3px;
                }
            }
            p {
                text-indent: 2em;
            }
        }
    }
}
</style>