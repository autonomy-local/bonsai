import type { JSXElement } from "solid-js";

export const Button = () => {
	/*
  Buttonコンポーネントの基本要素
  Ref: https://developer.mozilla.org/ja/docs/Web/HTML/Element/button
  */

	// 📝form要素の一部として扱うボタンとユーザーの入力を受け付け何かをするためのボタンの2種類に分けて実装する

	return <button type="button">Add Todo</button>;
};

const mode = {
	default:
		"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
	secondary:
		"py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70",
	warning:
		"focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900",
	danger:
		"focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
};

export type CustomButtonProps = {
  text: string;
  mode: "default" | "secondary" | "warning" | "danger";
  disabled?: boolean;
  description?: string;
};

export const CustomButton = (prop: CustomButtonProps): JSXElement => {
  return (
    <button
      type="button"
      disabled={prop.disabled}
      id={prop.description}
      class={mode[prop.mode]}
    >
      {prop.text}
    </button>
  );
};

type FormButtonProps = {
	type: "submit" | "reset"; // ボタンの種類
	disabled?: boolean; // ボタンが無効化されているかどうか
	formId: string; // ボタンが属するフォームのID
	description?: string; // ボタンの説明を追加する スクリーンリーダーやRPAに対してボタンの目的を伝える
  mode: "default" | "secondary" | "warning" | "danger"; // ボタンのスタイル
};

const FormButton = (prop: FormButtonProps): JSXElement | Error => {
	if (!prop.formId) {
		return new Error("formId is required");
	}
	switch (prop.type) {
		case "submit":
			return (
				<button
					type="submit"
					disabled={prop.disabled}
					id={prop.description}
					name={prop.formId}
          class={mode[prop.mode]}
				>
					Submit
				</button>
			);
		case "reset":
			return (
				<button
					type="reset"
					disabled={prop.disabled}
					id={prop.description}
					name={prop.formId}
          class={mode[prop.mode]}
				>
					Reset
				</button>
			);
		default:
			return new Error("Invalid type");
	}
};
