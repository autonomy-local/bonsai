import { CustomButton } from "../design/button/button";
import type { CustomButtonProps } from "../design/button/button";

export default {
  title: "CustomButton",
  component: CustomButton,
  args: {
    text: "Default",
    mode: "default",
    disabled: false,
    description: "default",
    eventEmitter: () => {
      console.log("clicked");
    }
  },
};

const Template = (args: CustomButtonProps) => <CustomButton {...args} />;
export const Default = Template.bind({});


export const Secondary = Template.bind({});
Secondary.args = {
  text: "Secondary",
  mode: "secondary",
  eventEmitter: () => {
    console.log("clicked");
  },
  disabled: false,
  description: "secondary",
};

export const Warning = Template.bind({});
Warning.args = {
  text: "Warning",
  mode: "warning",
  eventEmitter: () => {
    console.log("clicked");
  },
  disabled: false,
  description: "warning",
};

export const Danger = Template.bind({});
Danger.args = {
  text: "Danger",
  mode: "danger",
  eventEmitter: () => {
    console.log("clicked");
  },
  disabled: false,
  description: "danger",
};


