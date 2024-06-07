
import { createGlobalStyle } from "styled-components";
"@import url(https://fonts.googleapis.com/css?family=Comic+Neue:300,300italic,regular,italic,700,700italic);"

export const Global = createGlobalStyle`

   * {

      padding:0;
      margin:0;
      font-size: 10px;
      color:black;
      box-sizing: border-box;
      
   }

   body{

      
      max-width: 140rem;
      margin: 0 auto;
      font-family: "Comic Neue", sans-serif;
      

   }

   a {
      text-decoration:none;
   }

` 


