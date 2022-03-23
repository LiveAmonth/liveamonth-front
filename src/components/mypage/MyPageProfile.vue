<template>
  <section class="profile-section spad">
    <!--    <div class="container">-->
    <!--      <div class="profile-agent-content">-->
    <!--        <div class="row">-->
    <!--          <div class="col-lg-2">-->
    <!--            <div class="ih-item circle effect13 top_to_bottom">-->
    <!--              <a data-toggle="modal" href="#modifyScheduleContentModal">-->
    <!--                <div class="img">-->
    <!--                  <img-->
    <!--                    v-if="image == null"-->
    <!--                    :src="defaultImg"-->
    <!--                    class="img-thumbnail img-circle mx-2"-->
    <!--                  />-->
    <!--                  <img-->
    <!--                    v-else-->
    <!--                    :src="image"-->
    <!--                    class="img-thumbnail img-circle mx-2"-->
    <!--                  />-->
    <!--                </div>-->
    <!--                <div class="info">-->
    <!--                  <div class="info-back">-->
    <!--                    <h3>[[${loginUser.nickname}]]</h3>-->
    <!--                    <p>프로필 이미지 변경</p>-->
    <!--                  </div>-->
    <!--                </div>-->
    <!--              </a>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div class="col-lg-3">-->
    <!--            <div class="profile-agent-widget">-->
    <!--              <ul>-->
    <!--                <li>[[#{login.name}]] <span>[[${loginUser.name}]]</span></li>-->
    <!--                <li>-->
    <!--                  [[#{login.nickname}]] <span>[[${loginUser.nickname}]]</span>-->
    <!--                </li>-->
    <!--              </ul>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div class="col-lg-4">-->
    <!--            <div class="profile-agent-widget">-->
    <!--              <ul>-->
    <!--                <li>-->
    <!--                  [[#{login.age}]]-->
    <!--                  <span>[[${loginUser.calcAge()}]][[#{age}]]</span>-->
    <!--                </li>-->
    <!--                <li>-->
    <!--                  [[#{login.genderTypes}]]-->
    <!--                  <span>[[#{'gender.'+${loginUser.genderTypes}}]]</span>-->
    <!--                </li>-->
    <!--                <li>[[#{login.email}]] <span>[[${loginUser.email}]]</span></li>-->
    <!--              </ul>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
  </section>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      simpleData: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>

<style></style>
