<template>
  <div class="comment-info" v-if="Object.keys(comment).length !== 0">
    <div class="info-head">
      <div class="head-title">用户评价</div>
      <div class="head-more">更多</div>
    </div>
    <div class="info-user">
      <img :src="comment.user.avatar" />
      <span class="user-name">{{ comment.user.uname }}</span>
    </div>
    <div class="info-date">
      <p>{{ comment.content }}</p>
      <span>{{ comment.created | dateFroMate }}</span>
      <span>{{ comment.style }}</span>
      <br />
      <img :src="item" v-for="(item, index) in comment.images" :key="index" />
    </div>
  </div>
</template>

<script>
import { formatMsToDate } from "common/utils.js";
export default {
  props: {
    comment: {
      type: Object,
    },
  },
  filters: {
    dateFroMate(d) {
      let t = new Date(d * 1000);
      return formatMsToDate(t);
    },
  },
};
</script>

<style scoped>
.comment-info {
  padding: 5px 12px;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
}
.info-head {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.info-head .head-title {
  float: left;
  font-size: 15px;
}
.info-head .head-more {
  float: right;
  font-size: 13px;
  margin-right: 10px;
}
.info-user {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.info-user img {
  border-radius: 50%;
  height: 45px;
  width: 45px;
}
.info-user .user-name {
  font-size: 15px;
  left: 10px;
}
.info-date > p {
  margin: 5px 0px 15px;
  font-size: 14px;
  color: #777;
  line-height: 1.5;
}
.info-date > span {
  font-size: 12px;
  color: #999;
  padding-right: 15px;
}
.info-date > img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
  margin-top: 10px;
}
</style>