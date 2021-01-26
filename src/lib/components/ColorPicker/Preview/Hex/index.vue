<template>
    <fragment>
        <Input
            :value="hexValue"
            label="Hex"
            @input="changeHex"
            :onFocus="() => inProgress = true"
            :onBlur="inputBlur"
            :onkeydown="inputDown"
            :inProgress="inProgress"
            classes="hex"
        />
    </fragment>
</template>

<script src="./script.js" />
