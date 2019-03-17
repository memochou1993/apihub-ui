import Vue from 'vue';
import Vuetify from 'vuetify';
import colors from 'vuetify/lib/util/colors';
import zhHant from 'vuetify/es5/locale/zh-Hant';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.use(Vuetify, {
  theme: {
    primary: colors.indigo,
    secondary: colors.grey,
    accent: colors.cyan,
    error: colors.pink,
    info: colors.lightBlue,
    success: colors.lightGreen,
    warning: colors.orange,
  },
  customProperties: true,
  iconfont: 'md',
  lang: {
    locales: { zhHant },
    current: 'zh-Hant',
  },
});
