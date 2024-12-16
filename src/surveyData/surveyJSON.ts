//import { getValidDays } from "../components/Schedule.tsx";

// export const json = {
//   title: "DEV WEEKEND Registration Form",
//   showProgressBar: "bottom",
//   pages: [
//     {
//       title: "Personal Information",
//       questions: [
//         {
//           type: "text",
//           name: "name",
//           title: "Full Name",
//           isRequired: true,
//         },
//         {
//           type: "text",
//           name: "email",
//           title: "Email",
//           isRequired: true,
//           validators: [{ type: "email" }],
//         },
//         {
//           type: "text",
//           name: "phone",
//           title: "Phone Number",
//           isRequired: true,
//           validators: [
//             {
//               type: "regex",
//               text: "Please enter a valid phone number",
//               regex: "^\\+(?:[0-9] ?){6,14}[0-9]$",
//             },
//           ],
//         },
//         {
//           type: "radiogroup",
//         },
//       ],

// };

export const json = {
  title: "Frontiers 2025",
  description: "registration ",
  logoFit: "none",
  logoPosition: "right",
  focusFirstQuestionAutomatic: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "text",
          name: "name",
          startWithNewLine: false,
          placeholder: "Name",
          isRequired: true,
        },
        {
          type: "text",
          name: "surrname",
          placeholder: "Surrname",
          isRequired: true,
          startWithNewLine: false,
        },

        {
          type: "text",
          name: "email",
          placeholder: "Email",
          isRequired: true,
          inputType: "email",
        },
        // {
        //   type: "dropdown",
        //   name: "ticket",
        //   startWithNewLine: false,
        //   isRequired: true,
        //   requiredErrorText: "Please choose a ticket",
        //   choices: getValidDays(),
        //   placeholder: "Choose a ticket",
        //   allowClear: false,
        // },
        // {
        //   type: "checkbox",
        //   name: "termsAndConditions",
        //   isRequired: true,
        //   // description: "I agree to the terms and conditions",
        //   choices: [
        //     {
        //       value: "agreed",
        //       text: "Agree to terms and conditions",
        //     },
        //   ],
        // },
      ],
    },
  ],
  // cookieName: "theresOnlyOnePerIp",
  // showNavigationButtons: "none",
  // showPrevButton: false,
  showTitle: false,
  questionTitleLocation: "hidden",
  questionErrorLocation: "bottom",
  checkErrorsMode: "onValueChanged",
  validateVisitedEmptyFields: true,
  questionDescriptionLocation: "underInput",
  commentAreaRows: 47,
  // questionStartIndex: "1",
  questionsOnPageMode: "singlePage",
  // showPreviewBeforeComplete: "showAllQuestions",
  widthMode: "responsive",
  completeText: "Proceed",
  showQuestionNumbers: "off",
};
