<template>
    <div class="gradient-controls">
        <div class="gradient-type">
            <div
                :class="`gradient-type-item solid-gradient ${type === 'solid' ? 'active' : ''}`"
                @click="() => changeGradientControl({ type: 'solid' })"
                title="纯色"
            />
            <div
                :class="`gradient-type-item liner-gradient ${type === 'linear' ? 'active' : ''}`"
                    @click="() => changeGradientControl({ type: 'linear' })"
                title="线性渐变色"
            />
            <div
                :class="`gradient-type-item radial-gradient ${type === 'radial' ? 'active' : ''}`"
                @click="() => changeGradientControl({ type: 'radial' })"
                title="径向渐变色"
            />
        </div>
        <div class="gradient-degrees-options" v-if="false">
            <div class="change-deg" @click="onClickChangeDeg">
                <!--<img src="../../../../assets/images/change-deg.png">-->
            </div>
            <div
                class="gradient-degrees"
                @mousedown="mouseEvents"
                @click="onClickGradientDegree"
            >
                <div class="gradient-degree-center" :style="degreesStyle">
                    <div class="gradient-degree-pointer" />
                </div>
            </div>
            <div class="gradient-degree-value">
                <p>
                    {{degree}}&#176;
                </p>
            </div>
        </div>
    </div>
</template>

<script src="./script.js" />
