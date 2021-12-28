import { Global } from "@emotion/react";

export const Fonts = () => (
    <Global
        styles={`
        /* Copied from https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900 */

        /* vietnamese */
@font-face {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 100;
  src: url(https://fonts.gstatic.com/s/lexenddeca/v13/K2FifZFYk-dHSE0UPPuwQ7CrD94i-NCKm-U48MxwpBnDmLM.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 100;
  src: url(https://fonts.gstatic.com/s/lexenddeca/v13/K2FifZFYk-dHSE0UPPuwQ7CrD94i-NCKm-U48MxwpRnDmLM.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 100;
  src: url(https://fonts.gstatic.com/s/lexenddeca/v13/K2FifZFYk-dHSE0UPPuwQ7CrD94i-NCKm-U48MxwqxnD.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 200;
  src: url(https://fonts.gstatic.com/s/lexenddeca/v13/K2FifZFYk-dHSE0UPPuwQ7CrD94i-NCKm-U4cM1wpBnDmLM.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 200;
  src: url(https://fonts.gstatic.com/s/lexenddeca/v13/K2FifZFYk-dHSE0UPPuwQ7CrD94i-NCKm-U4cM1wpRnDmLM.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 200;
  src: url(https://fonts.gstatic.com/s/lexenddeca/v13/K2FifZFYk-dHSE0UPPuwQ7CrD94i-NCKm-U4cM1wqxnD.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 300;
  src: url(https://fonts.gstatic.com/s/lexenddeca/v13/K2FifZFYk-dHSE0UPPuwQ7CrD94i-NCKm-U4rs1wpBnDmLM.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 300;
  src: url(https://fonts.gstatic.com/s/lexenddeca/v13/K2FifZFYk-dHSE0UPPuwQ7CrD94i-NCKm-U4rs1wpRnDmLM.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 300;
  src: url(https://fonts.gstatic.com/s/lexenddeca/v13/K2FifZFYk-dHSE0UPPuwQ7CrD94i-NCKm-U4rs1wqxnD.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/lexenddeca/v13/K2FifZFYk-dHSE0UPPuwQ7CrD94i-NCKm-U48M1wpBnDmLM.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/lexenddeca/v13/K2FifZFYk-dHSE0UPPuwQ7CrD94i-NCKm-U48M1wpRnDmLM.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/lexenddeca/v13/K2FifZFYk-dHSE0UPPuwQ7CrD94i-NCKm-U48M1wqxnD.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/lexenddeca/v13/K2FifZFYk-dHSE0UPPuwQ7CrD94i-NCKm-U4ws1wpBnDmLM.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/lexenddeca/v13/K2FifZFYk-dHSE0UPPuwQ7CrD94i-NCKm-U4ws1wpRnDmLM.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/lexenddeca/v13/K2FifZFYk-dHSE0UPPuwQ7CrD94i-NCKm-U4ws1wqxnD.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/lexenddeca/v13/K2FifZFYk-dHSE0UPPuwQ7CrD94i-NCKm-U4LspwpBnDmLM.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/lexenddeca/v13/K2FifZFYk-dHSE0UPPuwQ7CrD94i-NCKm-U4LspwpRnDmLM.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/lexenddeca/v13/K2FifZFYk-dHSE0UPPuwQ7CrD94i-NCKm-U4LspwqxnD.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/lexenddeca/v13/K2FifZFYk-dHSE0UPPuwQ7CrD94i-NCKm-U4F8pwpBnDmLM.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/lexenddeca/v13/K2FifZFYk-dHSE0UPPuwQ7CrD94i-NCKm-U4F8pwpRnDmLM.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/lexenddeca/v13/K2FifZFYk-dHSE0UPPuwQ7CrD94i-NCKm-U4F8pwqxnD.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/lexenddeca/v13/K2FifZFYk-dHSE0UPPuwQ7CrD94i-NCKm-U4cMpwpBnDmLM.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/lexenddeca/v13/K2FifZFYk-dHSE0UPPuwQ7CrD94i-NCKm-U4cMpwpRnDmLM.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/lexenddeca/v13/K2FifZFYk-dHSE0UPPuwQ7CrD94i-NCKm-U4cMpwqxnD.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/lexenddeca/v13/K2FifZFYk-dHSE0UPPuwQ7CrD94i-NCKm-U4WcpwpBnDmLM.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/lexenddeca/v13/K2FifZFYk-dHSE0UPPuwQ7CrD94i-NCKm-U4WcpwpRnDmLM.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/lexenddeca/v13/K2FifZFYk-dHSE0UPPuwQ7CrD94i-NCKm-U4WcpwqxnD.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
      `}
    />
);
