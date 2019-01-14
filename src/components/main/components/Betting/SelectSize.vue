<template>
    <div class="select-size">
        <div class="select-button">
            <button :class="size[0] === 'b'?'isActive':''" @click="clickSize('b')">大</button>
            <button :class="size[0] === 's'?'isActive':''" @click="clickSize('s')">小</button>
            <button :class="plural[0] === 'o'?'isActive':''" @click="clickPlural('o')">单</button>
            <button :class="plural[0] === 'e'?'isActive':''" @click="clickPlural('e')">双</button>
            <button @click="reset">重置</button>
        </div>
        <div class="select-show">
            <p>{{size[0]==='b'?'大':size[0]==='s'?'小':''}} {{plural[0]==='o'?'单':plural[0]==='e'?'双':''}}</p>
            <p class="slash"> / </p>
        </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "SelectSize",
    computed: mapState(['size', 'plural']),
    methods: {
      clickSize(x) {
        x === this.size[0] ? this.$store.commit('SET_SIZE', []) : this.$store.commit('SET_SIZE', [x])
      },
      clickPlural(x) {
        x === this.plural[0] ? this.$store.commit('SET_PLURAL', []) : this.$store.commit('SET_PLURAL', [x])
      },
      reset() {
        this.$store.commit('SET_SIZE', []);
        this.$store.commit('SET_PLURAL', []);
      }
    }
  }
</script>

<style scoped lang="scss">
    @import "./../../../../assets/scss/variable";

    .select-size {
        margin-bottom: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            margin: 0 3px;
            width: 67px;
            height: 50px;
            border: 0;
            line-height: 50px;
            background: rgba(17, 22, 45, 1);
            border-radius: 8px;
            font-size: 16px;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);

            &:first-of-type {
                margin-left: 0;
            }

            &:nth-of-type(2) {
                margin-right: 42px;
            }

            &:nth-of-type(4) {
                margin-right: 54px;
            }

            &:last-of-type {
                float: right;
                width: 67px;
                margin-right: 0;
            }
        }

        .select-button {
            width: 472px;
        }

        .select-show {
            width: 150px;
            height: 50px;

            p {
                margin: 0;
                color: #fff;
                text-align: center;
                height: 50px;
                line-height: 50px;
                font-size: 16px;
                font-weight: 400;

                &.slash {
                    line-height: 1;
                    color: rgba(21, 240, 243, 1);
                }
            }
        }

        @media (max-width: 800px) {
            margin: rem(35rem) 0 rem(25rem);
            width: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            button {
                padding: 0;
                margin: 0 !important;
                width: rem(107rem);
                height: rem(80rem);
                line-height: rem(80rem);
                background: rgba(14, 18, 39, 1);
                border-radius: rem(8rem);

                &:last-of-type {
                    width: rem(171rem);
                    height: rem(80rem);
                    background: rgba(14, 18, 39, 1);
                    border-radius: rem(8rem);
                }

            }
        }
    }
</style>