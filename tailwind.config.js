/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // theme: {
  //   extend: {},
  // },
  daisyui: {
    themes: [],
  },

  theme: {
    fontFamily: {
      body: ["Montserrat", "sans"], // Add Montserrat as the body font
      poppins: ["Poppins", "sans"], // Add Poppins as the popins font
    },

    container: {
      center: "true",
      padding: ".5rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1200px",
      },
    },

    extend: {
      boxShadow: {
        menuItems: "0px 4px 44px 0px rgba(0, 0, 0, 0.03)",
      },
      colors: {
        c_22: "#222",
        c_33: "#333",
        c_85: "#747985",
        c_54: "#006B54",
        c_ff: "#fff",
        c_f5: "#F1F6F5",
        c_ea: "#E1E5EA",
        c_34: "#343434",
        c_ED: "#EDEDED",
        input_bg: "#FDFDFD",
        c_EB: "#E5E7EB",
        c_27: "#111827",
      },

      fontSize: {
        fs_34: [
          "2.125rem",
          {
            //34px
            fontWeight: "700",
          },
        ],

        fs_18: [
          "1.125rem",
          {
            //18px
            fontWeight: "400",
          },
        ],

        fs_16: [
          "1rem",
          {
            //16px
            fontWeight: "600",
          },
        ],

        fs_14: [
          "0.875rem",
          {
            //14px
            fontWeight: "600",
          },
        ],
      },

      borderRadius: {
        r_11: "11px",
      },

      padding: {
        pxy_28: "20px 51px",
        p_input: "16px 28px",
        p_23: "33px 28px",
        p_63: "62px",
        p_60: "16px 50px",
      },
    },
  },

  plugins: [require("daisyui")],
};
