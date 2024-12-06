<template>
  <form-create :rule="rule" v-model:api="fApi" :option="option" />
</template>


<script setup>
import { ref } from 'vue'
import formCreate from '@form-create/element-ui'

const fApi = ref({})
const option = ref({
  onSubmit: (formData) => {
    alert(JSON.stringify(formData))
  },
  resetBtn: true,
})
const rule = ref([{
  "type": "html",
  "native": true,
  "attrs": {
    "innerHTML": ""
  },
  "style": {
    "height": "100px",
    "width": "100%",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "children": [
    "<div style=\"width: 100% display: flex justify-content: center align-items: centerborder: 1px solid #f6f6f7\n    border-radius: 12px\n    height: 100%\n    background-color: var(--fc-bg-color-3)\">\n👈🏻 点击左侧边栏 <i class=\"fc-icon icon-menu2\" style=\"font-size:26pxmargin:0 2pxcolor:var(--fc-style-color-1)\"></i> 按钮查看更多功能示例\n </div>"
  ],
  "_fc_id": "id_F85km1usjbq4egc",
  "name": "ref_F2n0m1usjbq4ehc",
  "_fc_drag_tag": "html",
  "display": true,
  "hidden": false
},
{
  "type": "input",
  "field": "Ff7hm4c4dp0lacc",
  "title": "输入框",
  "$required": false,
  "_fc_id": "id_Fymlm4c4dp0ladc",
  "name": "ref_Fqxam4c4dp0laec",
  "display": true,
  "hidden": false,
  "_fc_drag_tag": "input"
},
{
  "type": "input",
  "field": "Fdmqm4c4drm2afc",
  "title": "多行输入框",
  "$required": false,
  "props": {
    "type": "textarea"
  },
  "_fc_id": "id_Ffdmm4c4drm2agc",
  "name": "ref_Fh6um4c4drm2ahc",
  "display": true,
  "hidden": false,
  "_fc_drag_tag": "textarea"
},
{
  "type": "input",
  "field": "Fdwdm4c4dudkaic",
  "title": "密码输入框",
  "$required": false,
  "props": {
    "type": "password"
  },
  "_fc_id": "id_Fih2m4c4dudkajc",
  "name": "ref_Fz56m4c4dudkakc",
  "display": true,
  "hidden": false,
  "_fc_drag_tag": "password"
},
{
  "type": "input",
  "field": "Fzw4m4c4fkfyalc",
  "title": "输入框",
  "$required": false,
  "_fc_id": "id_Fyjwm4c4fkfzamc",
  "name": "ref_Fdgem4c4fkfzanc",
  "display": true,
  "hidden": false,
  "_fc_drag_tag": "input"
},
{
  "type": "select",
  "field": "F8cxm4c4fm6eaoc",
  "title": "选择器",
  "effect": {
    "fetch": ""
  },
  "$required": false,
  "options": [{
    "label": "选项01",
    "value": "1"
  },
  {
    "label": "选项02",
    "value": "2"
  },
  {
    "label": "选项03",
    "value": "3"
  }
  ],
  "_fc_id": "id_Frk4m4c4fm6fapc",
  "name": "ref_Fi48m4c4fm6faqc",
  "display": true,
  "hidden": false,
  "_fc_drag_tag": "select"
}
])

const dataStr = localStorage.getItem('data')
if (dataStr) {
  const { ruleJson, optionsJson } = JSON.parse(dataStr)
  //回显表单

  rule.value = formCreate.parseJson(ruleJson)
  option.value = formCreate.parseJson(optionsJson)
}
</script>