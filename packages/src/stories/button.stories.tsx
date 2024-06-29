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
  },
};

const Template = (args: CustomButtonProps) => <CustomButton {...args} />;
export const Default = Template.bind({});


export const Secondary = Template.bind({});
Secondary.args = {
  text: "Secondary",
  mode: "secondary",
  disabled: false,
  description: "secondary",
};

export const Warning = Template.bind({});
Warning.args = {
  text: "Warning",
  mode: "warning",
  disabled: false,
  description: "warning",
};

export const Danger = Template.bind({});
Danger.args = {
  text: "Danger",
  mode: "danger",
  disabled: false,
  description: "danger",
};


