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
    formData.append("entry.160944922", surveyData.name);
    formData.append("entry.1070458393", surveyData.surrname);
    formData.append("entry.324176906", surveyData.email);
    formData.append("entry.202297744", surveyData.ticket);

    // Send data to Google Forms
    fetch(import.meta.env.VITE_GOOGLE_FORM_URL, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    })
      .then(() => {
        console.log("Survey results sent to Google Forms");
      })
      .catch((error) => {
        console.error("Error sending survey results to Google Forms:", error);
      });

    console.log(JSON.stringify(sender.data, null, 3));
  });

  return (
    <section id="register" className="px-4 w-full max-w-[900px] py-16">
      <h2 className="heading-secondary font-medium mb-8 text-center">
        Register
      </h2>
      <div className="overflow-hidden bg-gray-950 border border-[#d96570] rounded-lg">
        <Survey model={survey} />
      </div>
    </section>
  );
}
