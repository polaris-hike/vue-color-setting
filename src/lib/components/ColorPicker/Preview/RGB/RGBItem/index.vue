<template>
    <div>
        <Input
            :value="inputValue"
            :type="type"
            :label="label"
            @input="onChangeHandler"
            :onFocus="() => inProgress = true"
            :onBlur="onBlur"
            :inProgress="inProgress"
            :classes="classes"
            :onkeydown="inputDown"
            :max="classes==='rgb'?255:100"
            min=0
        />
    </div>
</template>

<script src="./script.js" />

<style scoped>

</style>
