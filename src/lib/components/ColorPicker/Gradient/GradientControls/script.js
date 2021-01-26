import { useMouseEvents } from "@/lib/hooks";
import { calculateDegree } from "@/lib/helpers";

export default {
    name: "GradientControls",

    props: {
        type: String,
        degree: Number,
        changeGradientControl: {
            type: Function,
            default: () => {}
        },
        updataDeg: {
            type: Function,
            default: () => {}
        }
    },
    data() {
        return {
            disableClick: false,
            mouseEvents: () => {},
        }
    },

    mounted() {
        this.mouseEvents = useMouseEvents(this.mouseDownHandler, this.mouseMoveHandler, this.mouseUpHandler);
    },

    computed: {
        degreesStyle() {
            return { transform: `rotate(${this.degree}deg)` };
        }
    },

    methods: {
        mouseDownHandler(event) {
            //滑动开始
            const pointer = event.target;
            const pointerBox = pointer.getBoundingClientRect();
            const centerY = pointerBox.top + parseInt(8 - window.pageYOffset, 10);
            const centerX = pointerBox.left + parseInt(8 - window.pageXOffset, 10);

            return {
                centerY,
                centerX,

            };
        },

        mouseMoveHandler(event, { centerX, centerY }) {
            //滑动中
            this.disableClick = true;

            const newDegree = calculateDegree(event.clientX, event.clientY, centerX, centerY);

            this.changeGradientControl({ degree: parseInt(newDegree, 10) });
        },

        mouseUpHandler(event) {
            //滑动结束
            this.updataDeg(event)
            const targetClasses = event.target.classList;

            if (targetClasses.contains('gradient-degrees') || targetClasses.contains('icon-rotate')) {
                return;
            }

            this.disableClick = false;
        },

        onClickGradientDegree() {
            if (this.disableClick) {
                this.disableClick = false;
                return;
            }

            let gradientDegree = this.degree + 45;

            if (gradientDegree >= 360) {
                gradientDegree = 0;
            }
            this.changeGradientControl({ degree: parseInt(gradientDegree, 10) });
        },
        onClickChangeDeg(){
            let gradientDegree = this.degree+180
            if (gradientDegree >= 360){
                gradientDegree = gradientDegree - 360
            }
            this.changeGradientControl({ degree: parseInt(gradientDegree, 10) });
        }
    }
};
