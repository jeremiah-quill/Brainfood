import React from "react";
import Button from "../Button";

const InfoModal = ({ closeModal }) => {
  return (
    <>
      <div onClick={closeModal} className="fixed inset-0 z-10 bg-black opacity-80" />
      <div className="fixed rounded left-0 top-20 right-0 bottom-56 m-auto max-w-screen-sm z-20 bg-gray-300 overflow-y-scroll">
        <div className="p-5 flex flex-col">
          <div className="m-auto text-center">
            <h2 className="text-xl font-bold">Welcome to AI Chef!</h2>
            <h3 className="text-lg">AI powered recipe generator</h3>
          </div>
          <div className="my-5">
            <p>
              Thanks to OpenAI's generosity for providing API access, this app is powered by GPT-3:
              an AI capable of performing natural language tasks. We give the AI some ingredients
              and it generates recipe suggestions. Once you choose one of the suggested recipes, the
              AI will generate the recipe instructions from scratch.
            </p>
            <br></br>
            <div>
              <h4>Please note the following:</h4>
              <ol className="list-disc list-inside">
                <li>
                  This app accesses GPT-3 through a free API key, meaning uses are limited. Please
                  use responsibly!
                </li>
                <li>If you notice anything funky, please contact me @jcq5010@gmail.com.</li>
                <li>
                  Please only submit actual ingredients into the app. The AI will not respond
                  correctly if inputs are not in the right context.
                </li>
              </ol>
            </div>
            <br></br>
            <p>
              The inspiration for this app is based on a term my family used when I was a kid,
              "catch as catch can" (defined as "using whatever methods or materials are available").
              Every couple of weeks we had a night where we would make dinner out of whatever
              hodgepodge of ingredients we had in our fridge or pantry. Whenever you are in a pinch,
              now you can use this tool to help you come up with AI generated recipes. You'd be
              surprised with what you can make on a catch as catch can night!
            </p>
          </div>
          <Button onClick={closeModal} uniqueClassNames="bg-green-500 m-auto" text="Let's go!" />
        </div>
      </div>
    </>
  );
};

export default InfoModal;
