import React from "react";
import Button from "../Button";

const InfoModal = ({ closeModal }) => {
  return (
    <>
      <div onClick={closeModal} className="fixed inset-0 z-20 bg-black opacity-80" />
      <div className="fixed inset-0 sm:inset-10 max-h-[700px] sm:max-w-[690px] m-auto rounded z-20 bg-gray-300">
        <div className="h-full overflow-y-scroll">
          <div className="p-5 flex flex-col h-full overflow-y-scroll">
            <div className="m-auto text-center">
              <h2 className="text-green-600 font-bold text-3xl">Brainfood</h2>
              <h3 className="text-lg">AI powered recipe generator</h3>
            </div>
            <div className="my-5">
              <p>
                Thanks to OpenAI's generosity for providing API access, this app is powered by
                GPT-3: an Artificial Intelligence capable of performing natural language tasks. In
                this case we give the AI some ingredients and it generates recipe suggestions. Once
                you choose one of the suggested recipes, the AI will generate your recipe
                instructions from scratch.
              </p>
              <br></br>
              <div>
                <h4>Please note the following:</h4>
                <ol className="list-disc list-inside text-sm">
                  <li>Uses of this API are limited, please use responsibly!</li>
                  <li>
                    The AI requires actual ingredients to come up with a recipe and will not work
                    with non-food items.
                  </li>
                  <li>If you notice anything funky, please contact me: jcq5010@gmail.com.</li>
                </ol>
              </div>
              <br></br>
              <p>
                The inspiration for this app is based on a term my family used when I was a kid,
                "catch as catch can" (defined as "using whatever methods or materials are
                available"). Every couple of weeks we had a night where we would make dinner out of
                whatever hodgepodge of ingredients we had in our fridge or pantry. Whenever you are
                in a pinch, now you can use this tool to help you come up with AI generated recipes.
                You'd be surprised with what you can make on a catch as catch can night!
              </p>
            </div>
            <Button
              onClick={closeModal}
              uniqueClassNames="bg-green-500 m-auto mb-5"
              text="Let's go"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoModal;
