import i18next from "i18next";

const en = {
  Button: {
    defaultText: "Button",
  },
};

const ko = {
  Button: {
    defaultText: "버튼",
  },
};

const namespace = "components";
i18next.addResourceBundle("en", namespace, en);
i18next.addResourceBundle("ko", namespace, ko);
