import { CompleteEvent, Model } from "survey-core";
import { Survey } from "survey-react-ui";
//import { BorderlessDark } from "survey-core/themes";
import "survey-core/modern.min.css";
import * as SurveyTheme from "survey-core/themes";

//import { darkTheme } from "../surveyData/themes.ts";
import { json as surveyJson } from "../surveyData/surveyJSON.ts";

export default function SurveyForm() {
  // Initialize the survey model once
  const survey = new Model(surveyJson);
  //   survey.applyTheme(darkTheme);
  survey.applyTheme(SurveyTheme.DefaultDarkPanelless);

  survey.onComplete.add((sender: Model, options: CompleteEvent) => {
    console.log("Survey results:", options);
    const surveyData = sender.data;

    // Map survey data to Google Form fields
    const formData = new FormData();
    formData.append("entry.160944922", surveyData.name); // Replace with actual entry ID
    formData.append("entry.1070458393", surveyData.surrname); // Replace with actual entry ID
    formData.append("entry.324176906", surveyData.email); // Replace with actual entry ID
    // formData.append("entry.5566778899", surveyData.ticket); // Replace with actual entry ID
    // formData.append("entry.6677889900", surveyData.termsAndConditions); // Replace with actual entry ID

    // Send data to Google Form
    // fetch("https://docs.google.com/forms/d/e/1FAIpQLSdnXKU8FqmJqoM2pR0nx6B5trvkhhzzikMKGCnYmBxwh2xp6g/viewform?usp=pp_url", {
    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSdnXKU8FqmJqoM2pR0nx6B5trvkhhzzikMKGCnYmBxwh2xp6g/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        body: formData,
      }
    )
      .then(() => {
        console.log("Survey results sent to Google Forms");
      })
      .catch((error) => {
        console.error("Error sending survey results to Google Forms:", error);
      });

    console.log(JSON.stringify(sender.data, null, 3));
  });

  return (
    <section id="register" className="w-full max-w-[900px] py-16">
      <Survey model={survey} />
    </section>
  );
}
