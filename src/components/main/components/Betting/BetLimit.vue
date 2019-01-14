<template>
    <div class="BetLimit">
        <span>投注限额</span>
        <div class="BetLimit-box"><span></span><span>{{BetLimit}} / 9.3K</span></div>
        <span>100%</span>
    </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "BetLimit",
    computed: mapState(['BetLimit']),
  }
</script>

<style scoped lang="scss">
    @import "./../../../../assets/scss/variable";

    .BetLimit {
        width: 317px;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        span {
            font-size: 16px;
            font-weight: 400;
            color: #fff;

            &:last-of-type {
                display: inline-block;
                width: 50px;
            }
        }

        .BetLimit-box {
            position: relative;
            margin: 0 10px;
            width: 170px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            background: rgba(17, 22, 45, 1);
            border-radius: 4px;
            font-size: 16px;
            font-weight: 400;
            color: #fff;

            span {
                position: absolute;

                &:first-of-type {
                    top: 0;
                    left: 0;
                    width: 60%;
                    height: 100%;
                    background: rgba(87, 96, 139, 1);
                }

                &:last-of-type {
                    width: 50%;
                    left: 40%;
                }
            }
        }

        @media (max-width: 800px) {
            width: auto;
            justify-content: space-between;
            span {
                font-size: rem(28rem);
                line-height: 1;

                &:last-of-type {
                    display: inline-block;
                    width: 50px;
                    color: rgba(86, 90, 108, 1);
                }
            }
            .BetLimit-box {
                margin: 0;
                width: rem(470rem);
                height: rem(30rem);
                line-height: rem(30rem);
                background: rgba(17, 22, 45, 1);
                border-radius: rem(4rem);
                font-size: rem(24rem);
                color: rgba(86, 90, 108, 1);

                span {
                    position: absolute;

                    &:first-of-type {
                        top: 0;
                        left: 0;
                        width: 60%;
                        height: 100%;
                        background: rgba(87, 96, 139, 1);
                    }

                    &:last-of-type {
                        width: 50%;
                        left: 40%;
                    }
                }
            }
        }
    }

</style>