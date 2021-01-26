<template>
    <div
        :class="`picker-pointer${activeClassName}`"
        :style="pointStyle"
        @mousedown.stop="mouseEvents"
        @dblclick="() => removePoint(index)"
        @keydown.stop="onkeydown($event)"
        @click.stop
        :title="length>2?'双击删除标记':''"
    >
        <span :class="`child-point${activeClassName}`" />
    </div>
</template>

<script src="./script.js" />
