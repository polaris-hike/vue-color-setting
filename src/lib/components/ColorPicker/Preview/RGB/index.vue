<template>
<fragment>
    <RGBItem
        :value="red"
        type="number"
        label="R"
        :onChange="value => changeValue('red', value)"
        :classes="'rgb'"
    />
    <RGBItem
        :value="green"
        type="number"
        label="G"
        :onChange="value => changeValue('green', value)"
        :classes="'rgb'"
    />
    <RGBItem
        :value="blue"
        type="number"
        label="B"
        :onChange="value => changeValue('blue', value)"
        :classes="'rgb'"
    />
    <RGBItem
        :value="parseInt(alpha * 100, 10)"
        type="number"
        label="透明度"
        :onChange="value => changeValue('alpha', value)"
        :classes="'rgba'"
    />
</fragment>
</template>

<script src="./script.js" />

<style scoped>

</style>
