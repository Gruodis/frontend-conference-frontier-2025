import { getValidDays } from "../components/Schedule.tsx";

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
          requiredErrorText: "Name is required",
        },
        {
          type: "text",
          name: "surrname",
          placeholder: "Surrname",
          isRequired: true,
          startWithNewLine: false,
          requiredErrorText: "Surrname is required",
        },

        {
          type: "text",
          name: "email",
          placeholder: "Email",
          isRequired: true,
          inputType: "email",
          requiredErrorText: "Email is required",
        },
        {
          type: "dropdown",
          name: "ticket",
          startWithNewLine: false,
          isRequired: true,
          requiredErrorText: "Please choose a ticket",
          choices: getValidDays(),
          placeholder: "Choose a ticket",
          allowClear: false,
        },
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
