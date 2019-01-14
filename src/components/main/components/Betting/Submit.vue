<template>
    <button class="submit" @click="submit">投注</button>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "Submit",
    computed: mapState(['coin', 'issue', 'bonus', 'memo', 'BetAmount']),
    methods: {
      submit() {
        this.$store.dispatch('SUBMIT')
      }
    }
  }
</script>

<style scoped lang="scss">
    .submit {
        cursor: pointer;
        display: block;
        margin: 24px auto 0;
        width: 311px;
        height: 70px;
        line-height: 70px;
        font-size: 24px;
        font-weight: 400;
        letter-spacing: 14px;
        color: rgba(33, 39, 71, 1);
        border: 0;
        outline: none;
        background: url("./../../../../assets/submit.png") no-repeat center/cover;

        &:hover {
            -webkit-box-shadow: none;
            -moz-box-shadow: none;
            box-shadow: none;
        }
    }

    @media (max-width: 800px) {
        .submit {
            margin: 0 0 rem(20rem) 0;
            padding: 0;
            width: 100%;
            height: rem(90rem);
            line-height: rem(90rem);
            background: rgba(55, 255, 187, 1);
            border: 0;
            border-radius: rem(8rem);
            font-size: rem(32rem);
            color: rgba(19, 25, 50, 1);
        }
    }

</style>