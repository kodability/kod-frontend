// Globally in your .storybook/preview.js.
export const decorators = [
  (Story) => (
    <div
      style={{
        width: "300px",
        height: "300px",
        backgroundColor: "#FFBA00",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Story />
    </div>
  ),
];

const customViewports = {
  kindleFire2: {
    name: "Kindle Fire 2",
    styles: {
      width: "600px",
      height: "963px",
    },
  },
  kindleFireHD: {
    name: "Kindle Fire HD",
    styles: {
      width: "533px",
      height: "801px",
    },
  },
};

export const parameters = {
  layout: "centered",
  viewport: { viewports: customViewports },
  backgrounds: {
    default: "white",
    values: [
      {
        name: "gopax_bg",
        value: "#171b23",
      },
      {
        name: "white",
        value: "#fffff",
      },
    ],
  },
};
