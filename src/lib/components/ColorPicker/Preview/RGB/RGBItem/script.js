import {Input} from "@/lib/components/UI";

export default {
  name: "RGBItem",

  props: {
    value: String | Number,
    type: String,
    label: String,
    onChange: Function,
    classes: String
  },

  components: {
    Input
  },

  data() {
    return {
      inputValue: this.value,
      inProgress: false
    }
  },

  watch: {
    value: "setValue"
  },

  methods: {
    inputDown(event){
      this.onBlur(event)
    },
    onChangeHandler(event) {
      let value = +event.target.value;
      switch (this.classes) {
        case 'rgb':
          if (value > 255) {
            event.target.value = 255
            value = 255
          }
          break
        case 'rgba':
          if (value > 100) {
            event.target.value = 100
            value = 100
          }
          break
      }
      if (Number.isNaN(value) || value.length > 3 || value < 0 || value > 255) {
        this.inputValue = this.value;

        this.$forceUpdate();

        return;
      }

      this.inputValue = event.target.value;

      // this.onChange(value);
    },

    onBlur(event) {
      this.onChangeHandler(event)

      if (!this.inputValue && !this.inputValue !== 0) {
        this.inputValue = this.value;
      }
      this.inProgress = false;

      const value = +event.target.value;
      if (Number.isNaN(value) || value.length > 3 || value < 0 || value > 255) {
        this.inputValue = this.value;

        this.$forceUpdate();

        return;
      }

      this.inputValue = event.target.value;

      this.onChange(value);
    },

    setValue() {
      if (this.value !== +this.inputValue && this.inputValue !== '') {
        this.inputValue = this.value;
      }
    }
  }
};
