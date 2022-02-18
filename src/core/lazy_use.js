import Vue from 'vue'

// base library
import {
  Button,
  Tooltip,
  Icon,
  Menu,
  Spin,
  Dropdown,
  Avatar,
  Modal,
  message,
  Table,
  Result,
  Card,
  Row,
  Tag,
  Col,
  Tabs,
  Input,
  Select,
  Alert,
  Badge,
  Form,
  Divider,
  InputNumber,
  DatePicker,
  notification,
  ConfigProvider,
  TimePicker
} from 'ant-design-vue'

import './directives/action'

Vue.use(Button)
Vue.use(TimePicker)
Vue.use(Tooltip)
Vue.use(Icon)
Vue.use(Spin)
Vue.use(Menu)
Vue.use(Table)
Vue.use(Card)
Vue.use(Dropdown)
Vue.use(Avatar)
Vue.use(Result)
Vue.use(Modal)
Vue.use(Row)
Vue.use(Col)
Vue.use(Input)
Vue.use(Select)
Vue.use(Alert)
Vue.use(Tag)
Vue.use(Tabs)
Vue.use(Form)
Vue.use(Badge)
Vue.use(Divider)
Vue.use(DatePicker)
Vue.use(InputNumber)
Vue.use(ConfigProvider)

Vue.prototype.$confirm = Modal.confirm
Vue.prototype.$message = message
Vue.prototype.$notification = notification
Vue.prototype.$info = Modal.info
Vue.prototype.$success = Modal.success
Vue.prototype.$error = Modal.error
Vue.prototype.$warning = Modal.warning
