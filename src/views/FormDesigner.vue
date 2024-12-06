<template>
    <fc-designer ref="designer" @save="handleSave" :config="config" height="120vh">
        <template #handle>
            <el-button @click="goto" type="primary" size="small">新窗口预览</el-button>
            <el-button @click="showData" type="primary" size="small">查看json数据</el-button>
        </template>
    </fc-designer>
</template>
<script setup>
import { onMounted, ref } from 'vue'
// 可以在此处获取设计器实例或进行其他操作
const designer = ref(null)

const config = ref({
    // 显示保存按钮
    showSaveBtn: true,
    showBaseForm: true
})

const showData = () => {
    const ruleJson = designer.value.getJson()
    //获取表单的配置
    const optionsJson = designer.value.getOptionsJson()

    const data = { ruleJson, optionsJson }
    alert(JSON.stringify(data))
}

const goto = () => {
    window.open("view", "_blank")
}


// 保存事件处理函数
const handleSave = () => {
    // 处理表单保存逻辑，例如获取设计器表单数据
    const formData = designer.value?.getFormData()
    console.log('表单数据:', formData)

    //获取表单的生成规则
    const ruleJson = designer.value.getJson()
    //获取表单的配置
    const optionsJson = designer.value.getOptionsJson()

    const data = { ruleJson, optionsJson }

    console.log('data', data)

    localStorage.setItem('data', JSON.stringify(data))
}

onMounted(() => {
    const dataStr = localStorage.getItem('data')
    if (dataStr) {
        const { ruleJson, optionsJson } = JSON.parse(dataStr)
        //回显表单
        designer.value.setOptions(optionsJson)
        designer.value.setRule(ruleJson)
    }
})

</script>