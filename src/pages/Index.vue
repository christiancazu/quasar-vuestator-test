<template>
  <q-page class="">
    <h1>x {{ $state.users.foo.bar }}</h1>
    <h1>x {{ foox }}</h1>
  <pre style="background-color: gray">{{ $state.users.users }}</pre>
  </q-page>
</template>

<script>
// import * as types from 'src/store/types'
import { mapState, mapActions } from 'vue-stator'
import * as types from 'src/store-stator/types.js'

export default {
  name: 'PageIndex',

  data () {
    return {
      ga: 'login'
    }
  },

  async mounted () {
    // await this.$actions.users.login()
    // await this.login()
    // console.warn(test)
    await this.test()
    this.foo('something')
    this.$state.users.users[0].name = 'asd'
    // this.fooz = 'valval'
  },
  computed: {
    ...mapState({
      foox: 'users/foo'
    }),

    fooz: {
      set (val) {
        this.$state.users.foo = { bar: val }
      },
      get () {
        return this.$state.users.foo
      }
    }
  },

  methods: {
    login () {
      return this.$actions.users[this.ga]
    },

    // foo () {
    //   return this.$actions.users['foo']
    // },

    ...mapActions({
      // foo () {
      //   console.warn('actions', this.$actions)
      //   return this.$actions.users['foo']
      // },
      foo: `users/foo`,
      test: `users/${types.TEST}`
    })
  }

}
</script>
