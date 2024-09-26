/* eslint-disable react/prop-types */
function Question({ question, suggestion }) {
  return (
    <>
      <p className="font-semibold">{question}</p>
      <p className="text-gray-500 text-sm">({suggestion})</p>
    </>
  );
}

export default Question;
