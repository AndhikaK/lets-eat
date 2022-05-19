import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function RecipeDetail() {
  const location = useLocation();
  const { data } = location.state;

  useEffect(() => {
    document.title = "Let's Eat | " + data.label;
  }, []);

  return (
    <div className="p-5">
      <div className="grid md:grid-cols-[1fr_2fr]">
        <div>
          <img src={data.image} alt="" className="h-72 rounded-md" />
        </div>
        <div>
          <div className="font-bold text-2xl mt-5">{data.label}</div>
          <div>
            See full recipe on:{" "}
            <a className="text-sky-600 hover:underline font-bold" href={data.url}>
              {data.source}
            </a>
          </div>
          <div className="flex flex-wrap gap-3 mt-3">
            {data.healthLabels.map((item) => {
              return <div className="px-3 py-1 bg-sky-500 rounded-md text-white text-sm">{item}</div>;
            })}
          </div>
        </div>
      </div>
      <div>
        <div className="mt-5 md:p-5 md:shadow-md">
          <div className="font-bold text-xl">Ingredients</div>
          <ol className="px-5 list-disc list-inside">
            {data.ingredientLines.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
