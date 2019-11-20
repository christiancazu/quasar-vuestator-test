import { plugin as VueStator } from 'vue-stator'

import { modules } from 'src/store-stator'

export default async ({ Vue }) => {
  Vue.use(VueStator, { modules })
}
